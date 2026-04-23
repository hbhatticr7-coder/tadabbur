import { useState } from "react";
import { words, rootMeanings, rootOccurrences } from "../data/fatiha.js";
import WordStudy from "./WordStudy.jsx";

export default function Hero({ loaded }) {
  const [activeWord, setActiveWord] = useState(2); // "ar-Raḥmān" by default
  const current = words[activeWord];

  return (
    <section className="relative max-w-6xl mx-auto px-8 pt-24 pb-32">
      <div className={`mb-8 flex items-center justify-center lg:justify-start gap-4 font-body text-xs uppercase tracking-[0.3em] gilt ${loaded ? "reveal r-1" : "opacity-0"}`}>
        <span className="h-px w-10 bg-current" />
        <span>verse for today · 21 Ramaḍān</span>
      </div>

      <h1 className={`font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-14 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left ${loaded ? "reveal r-2" : "opacity-0"}`} style={{ fontWeight: 300 }}>
        Read the Quran <em className="gilt" style={{ fontStyle: "italic" }}>slowly</em>.<br/>
        Understand it <span className="moss">deeply</span>.
      </h1>

      <div className={`grid lg:grid-cols-12 gap-12 items-start ${loaded ? "reveal r-3" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <div className="vellum p-10 md:p-14 relative" style={{ boxShadow: "0 1px 0 rgba(29,25,23,0.06), 0 30px 60px -30px rgba(29,25,23,0.25)" }}>
            <div className="absolute top-4 left-4 font-body text-xs uppercase tracking-[0.3em] gilt">Al-Fātiḥa · 1:1</div>
            <div className="absolute top-4 right-4 font-body text-xs tracking-wider" style={{ color: "#7a6e5e" }}>the opening</div>

            <p dir="rtl" className="font-ar text-5xl md:text-6xl leading-[1.6] text-center mt-6 mb-10 ink">
              {words.map((w, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWord(i)}
                  data-active={activeWord === i}
                  className="word-btn px-2 py-1 rounded-sm mx-1 outline-none"
                >
                  {w.ar}
                </button>
              ))}
            </p>

            <p className="font-display text-xl text-center italic mb-3" style={{ fontWeight: 400 }}>
              "In the name of Allah, the Most Gracious, the Most Merciful."
            </p>
            <p className="font-body text-sm text-center" style={{ color: "#7a6e5e" }}>
              tap any word to open it
            </p>
          </div>
        </div>

        <WordStudy
          word={current}
          rootMeaning={rootMeanings[current.rootTr]}
          occurrences={rootOccurrences[current.rootTr]}
        />
      </div>
    </section>
  );
}
