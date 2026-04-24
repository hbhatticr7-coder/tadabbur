import { useState } from "react";
import { verses, verseOrder, rootMeanings, rootOccurrences, tafsir } from "../data/fatiha.js";
import WordStudy from "./WordStudy.jsx";
import ScholarlyPanel from "./ScholarlyPanel.jsx";

export default function Hero({ loaded }) {
  const [verseId, setVerseId] = useState("1:1");
  const [activeWord, setActiveWord] = useState(2); // "ar-Raḥmān" on first load
  const [analysisOpen, setAnalysisOpen] = useState(false);

  const verse = verses[verseId];
  // Verses have different word counts (1:3 has 2, 1:7 has 8). Clamp the active
  // word index so navigating from a long verse to a short one doesn't land on
  // an out-of-bounds word and crash WordStudy.
  const wordIndex = Math.min(activeWord, verse.words.length - 1);
  const current = verse.words[wordIndex];
  const idx = verseOrder.indexOf(verseId);
  const prevVerse = verseOrder[idx - 1];
  const nextVerse = verseOrder[idx + 1];

  const goToVerse = (id) => {
    if (!id) return;
    setVerseId(id);
    setActiveWord((prev) => Math.min(prev, verses[id].words.length - 1));
  };

  return (
    <section className="relative max-w-6xl mx-auto px-8 pt-24 pb-32">
      <div className={`mb-8 flex items-center justify-center lg:justify-start gap-4 font-body text-xs uppercase tracking-[0.3em] gilt ${loaded ? "reveal r-1" : "opacity-0"}`}>
        <span className="h-px w-10 bg-current" />
        <span>Al-Fātiḥa · the opening surah</span>
      </div>

      <h1 className={`font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-14 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left ${loaded ? "reveal r-2" : "opacity-0"}`} style={{ fontWeight: 300 }}>
        Read the Quran <em className="gilt" style={{ fontStyle: "italic" }}>slowly</em>.<br/>
        Understand it <span className="moss">deeply</span>.
      </h1>

      <div className={`grid lg:grid-cols-12 gap-12 items-start ${loaded ? "reveal r-3" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <div className="vellum p-10 md:p-14 relative" style={{ boxShadow: "0 1px 0 rgba(29,25,23,0.06), 0 30px 60px -30px rgba(29,25,23,0.25)" }}>
            <div className="absolute top-4 left-5 font-body text-sm uppercase tracking-[0.2em]" style={{ color: "#5a4325", fontWeight: 500 }}>Al-Fātiḥa · {verse.ref}</div>
            <div className="absolute top-4 right-5 font-body text-sm tracking-wider italic" style={{ color: "#5a4a36" }}>{verse.label}</div>

            <p dir="rtl" className="font-ar text-5xl md:text-6xl leading-[1.6] text-center mt-6 mb-10 ink">
              {verse.words.map((w, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWord(i)}
                  data-active={wordIndex === i}
                  className="word-btn px-2 py-1 rounded-sm mx-1 outline-none"
                >
                  {w.ar}
                </button>
              ))}
            </p>

            <p className="font-display text-xl text-center italic mb-3" style={{ fontWeight: 400 }}>
              "{verse.translation}"
            </p>
            <p className="font-body text-sm text-center" style={{ color: "#7a6e5e" }}>
              tap any word to open it
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between font-body text-sm">
            <button
              onClick={() => goToVerse(prevVerse)}
              disabled={!prevVerse}
              className="moss disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous verse"
            >
              ← {prevVerse ? `verse ${prevVerse}` : "previous"}
            </button>
            <span className="font-body text-xs uppercase tracking-[0.3em] gilt">
              verse {idx + 1} of {verseOrder.length}
            </span>
            <button
              onClick={() => goToVerse(nextVerse)}
              disabled={!nextVerse}
              className="moss disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next verse"
            >
              {nextVerse ? `verse ${nextVerse}` : "next"} →
            </button>
          </div>
        </div>

        <WordStudy
          word={current}
          rootMeaning={rootMeanings[current.rootTr]}
          occurrences={rootOccurrences[current.rootTr]}
          onOpenAnalysis={() => setAnalysisOpen(true)}
        />
      </div>

      {analysisOpen && (
        <ScholarlyPanel
          word={current}
          analysis={tafsir[current.tr]}
          onClose={() => setAnalysisOpen(false)}
        />
      )}
    </section>
  );
}
