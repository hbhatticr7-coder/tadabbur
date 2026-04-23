import { useState, useEffect } from "react";

export default function TadabburLanding() {
  const [activeWord, setActiveWord] = useState(2); // "Ar-Rahman" by default
  const [question, setQuestion] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Basmala broken into words for the study demo
  const words = [
    { ar: "بِسْمِ", tr: "bismi", gloss: "in the name of", root: "س م و", rootTr: "s-m-w" },
    { ar: "اللَّهِ", tr: "Allāh", gloss: "Allah (God)", root: "أ ل ه", rootTr: "ʾ-l-h" },
    { ar: "الرَّحْمَٰنِ", tr: "ar-Raḥmān", gloss: "the Most Gracious", root: "ر ح م", rootTr: "r-ḥ-m" },
    { ar: "الرَّحِيمِ", tr: "ar-Raḥīm", gloss: "the Most Merciful", root: "ر ح م", rootTr: "r-ḥ-m" },
  ];

  const rootOccurrences = [
    { ref: "1:1", text: "الرَّحْمَٰنِ الرَّحِيمِ", note: "the opening invocation" },
    { ref: "55:1", text: "الرَّحْمَٰنُ", note: "surah named for this attribute" },
    { ref: "19:18", text: "أَعُوذُ بِالرَّحْمَٰنِ", note: "Maryam's appeal for refuge" },
    { ref: "17:110", text: "ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ", note: "names of equal standing" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F3EADB", color: "#1D1917" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Amiri:ital,wght@0,400;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-variation-settings: "opsz" 144, "SOFT" 50, "WONK" 0; }
        .font-body { font-family: 'EB Garamond', serif; }
        .font-ar { font-family: 'Amiri', serif; }
        .ink { color: #1D1917; }
        .moss { color: #1B3A2E; }
        .gilt { color: #A07E42; }
        .paper { background: #F3EADB; }
        .vellum { background: #EADFCB; }
        .rule { border-color: #1D1917; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .reveal { animation: fadeUp 900ms cubic-bezier(.2,.7,.2,1) both; }
        .r-1 { animation-delay: 80ms; } .r-2 { animation-delay: 200ms; }
        .r-3 { animation-delay: 340ms; } .r-4 { animation-delay: 500ms; }
        .r-5 { animation-delay: 660ms; } .r-6 { animation-delay: 820ms; }
        .grain {
          background-image: radial-gradient(rgba(29,25,23,0.04) 1px, transparent 1px);
          background-size: 3px 3px;
        }
        .link-underline { background-image: linear-gradient(currentColor, currentColor); background-size: 100% 1px; background-repeat: no-repeat; background-position: 0 100%; }
        .word-btn { transition: color 200ms ease, background 200ms ease; }
        .word-btn[data-active="true"] { background: #EADFCB; box-shadow: inset 0 -2px 0 #A07E42; }
        .chapter-link:hover .chapter-num { color: #1B3A2E; }
      `}</style>

      <div className="grain absolute inset-0 pointer-events-none opacity-70" />

      {/* ===== NAV ===== */}
      <nav className="relative max-w-6xl mx-auto px-8 pt-8 flex items-end justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight" style={{ fontWeight: 500 }}>Tadabbur</span>
          <span className="font-ar text-xl moss">تدبر</span>
        </div>
        <div className="hidden md:flex gap-8 font-body text-sm" style={{ letterSpacing: "0.02em" }}>
          <a className="link-underline">The Quran</a>
          <a className="link-underline">Study</a>
          <a className="link-underline">Ask</a>
          <a className="link-underline">For seekers</a>
          <a className="link-underline">About</a>
        </div>
        <button className="font-body text-sm moss border-b border-current pb-0.5">Begin →</button>
      </nav>

      {/* ===== HERO ===== */}
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

          {/* Word study panel */}
          <div className="lg:col-span-5 lg:pt-4">
            <div className="font-body text-xs uppercase tracking-[0.3em] gilt mb-6">Studying</div>
            <div className="flex items-baseline gap-4 mb-8 pb-6 border-b rule" style={{ borderBottomWidth: 1 }}>
              <div className="font-ar text-5xl moss">{words[activeWord].ar}</div>
              <div>
                <div className="font-display text-2xl italic" style={{ fontWeight: 400 }}>{words[activeWord].tr}</div>
                <div className="font-body" style={{ color: "#7a6e5e" }}>{words[activeWord].gloss}</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="font-body text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "#7a6e5e" }}>Root</div>
              <div className="flex items-baseline gap-3">
                <span className="font-ar text-2xl moss">{words[activeWord].root}</span>
                <span className="font-body italic">{words[activeWord].rootTr}</span>
                <span className="font-body text-sm" style={{ color: "#7a6e5e" }}>— mercy, womb-closeness</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#7a6e5e" }}>Where else this root appears</div>
              <ul className="space-y-2">
                {rootOccurrences.map((o, i) => (
                  <li key={i} className="flex items-baseline gap-4 font-body">
                    <span className="gilt text-sm tabular-nums w-10">{o.ref}</span>
                    <span className="font-ar text-lg flex-shrink-0">{o.text}</span>
                    <span className="text-xs italic" style={{ color: "#7a6e5e" }}>— {o.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="font-body text-sm moss border-b border-current pb-0.5">
              Open full scholarly analysis →
            </button>
          </div>
        </div>
      </section>

      {/* ===== ASK SECTION ===== */}
      <section className="relative border-t rule" style={{ borderTopWidth: 1 }}>
        <div className="max-w-6xl mx-auto px-8 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="font-body text-xs uppercase tracking-[0.3em] gilt mb-6">§ II · The Companion</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6" style={{ fontWeight: 400 }}>
              Ask a question.<br/>
              <em className="gilt" style={{ fontStyle: "italic" }}>Receive scholarship</em>,<br/>
              not a chat bubble.
            </h2>
            <p className="font-body text-lg leading-relaxed mx-auto lg:mx-0" style={{ color: "#4a4239", maxWidth: "36ch" }}>
              Every answer is grounded in the Quran, the six authentic hadith collections, and classical tafsir. Every claim is cited. If a source cannot be found, we say so — plainly.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="vellum p-10" style={{ boxShadow: "0 1px 0 rgba(29,25,23,0.06), 0 30px 60px -30px rgba(29,25,23,0.25)" }}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b rule" style={{ borderBottomWidth: 1 }}>
                <div className="w-6 h-6 rounded-full" style={{ background: "#1B3A2E" }} />
                <span className="font-display text-sm tracking-wider uppercase">Companion</span>
                <span className="ml-auto font-body text-xs" style={{ color: "#7a6e5e" }}>sources: 3</span>
              </div>

              <div className="font-body italic mb-5 text-lg" style={{ color: "#4a4239" }}>
                "Why does Allah describe Himself as both <em>ar-Raḥmān</em> and <em>ar-Raḥīm</em>? Aren't they the same thing?"
              </div>

              <div className="font-body leading-relaxed mb-6">
                They share a root, but classical scholars draw a careful distinction. <span className="gilt">Ar-Raḥmān</span> is often described as mercy that is vast and universal — extended to all of creation, believer and otherwise. <span className="gilt">Ar-Raḥīm</span> is more particular — a special, ongoing mercy for those who turn toward Him. The first is the ocean; the second is the spring that flows to you personally.
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t rule" style={{ borderTopWidth: 1 }}>
                <a className="font-body text-xs px-3 py-1 rounded-sm" style={{ background: "#F3EADB", color: "#1B3A2E" }}>
                  Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm
                </a>
                <a className="font-body text-xs px-3 py-1 rounded-sm" style={{ background: "#F3EADB", color: "#1B3A2E" }}>
                  al-Ṭabarī · Jāmiʿ al-Bayān
                </a>
                <a className="font-body text-xs px-3 py-1 rounded-sm" style={{ background: "#F3EADB", color: "#1B3A2E" }}>
                  Lane's Arabic-English Lexicon
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 border-b rule pb-4" style={{ borderBottomWidth: 1 }}>
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Try: what does sabr really mean?"
                className="flex-1 bg-transparent font-body text-lg outline-none placeholder:italic"
                style={{ color: "#1D1917" }}
              />
              <button className="font-body text-sm moss">Ask →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== READING PATH ===== */}
      <section className="relative border-t rule" style={{ borderTopWidth: 1 }}>
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6 text-center lg:text-left">
            <div>
              <div className="font-body text-xs uppercase tracking-[0.3em] gilt mb-4">§ III · Your journey</div>
              <h2 className="font-display text-4xl md:text-5xl" style={{ fontWeight: 400 }}>
                Three paths through the book.
              </h2>
            </div>
            <div className="hidden lg:block font-body text-sm" style={{ color: "#7a6e5e" }}>
              choose one — change anytime
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px vellum">
            {[
              {
                num: "I",
                title: "The Reader",
                ar: "القارئ",
                desc: "Read the whole Quran with translation and quiet reflection. 30 days, 60 days, or your own pace.",
                tag: "most popular",
              },
              {
                num: "II",
                title: "The Student",
                ar: "الطالب",
                desc: "Study one surah deeply over two weeks. Word roots, tafsir, context of revelation, and weekly reflections.",
                tag: "for depth",
              },
              {
                num: "III",
                title: "The Seeker",
                ar: "الباحث",
                desc: "Never read it before? We begin where you are. No assumptions, no jargon, every question welcome.",
                tag: "for newcomers",
              },
            ].map((c, i) => (
              <div key={i} className="chapter-link paper p-10 cursor-pointer group">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="chapter-num font-display text-6xl transition-colors" style={{ fontWeight: 300, color: "#D4C6A8" }}>
                    {c.num}
                  </span>
                  <span className="font-ar text-2xl moss">{c.ar}</span>
                </div>
                <h3 className="font-display text-2xl mb-3" style={{ fontWeight: 500 }}>{c.title}</h3>
                <p className="font-body leading-relaxed mb-6" style={{ color: "#4a4239" }}>
                  {c.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t rule" style={{ borderTopWidth: 1 }}>
                  <span className="font-body text-xs uppercase tracking-wider gilt">{c.tag}</span>
                  <span className="font-body text-sm moss">begin →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="relative border-t rule" style={{ borderTopWidth: 1 }}>
        <div className="max-w-4xl mx-auto px-8 py-32 text-center">
          <p dir="rtl" className="font-ar text-3xl md:text-4xl mb-6 moss leading-loose">
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ
          </p>
          <p className="font-display text-xl italic mb-3" style={{ fontWeight: 400 }}>
            "And We have certainly made the Quran easy to remember."
          </p>
          <p className="font-body text-sm gilt tracking-wider">— al-Qamar · 54:17</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t rule" style={{ borderTopWidth: 1 }}>
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-wrap items-center justify-between gap-4 font-body text-sm" style={{ color: "#7a6e5e" }}>
          <div className="flex items-baseline gap-3">
            <span className="font-display" style={{ fontWeight: 500, color: "#1D1917" }}>Tadabbur</span>
            <span>· a quiet companion for the Quran</span>
          </div>
          <div className="flex gap-6">
            <a className="link-underline">sources</a>
            <a className="link-underline">scholarship</a>
            <a className="link-underline">contact</a>
            <a className="link-underline">donate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
