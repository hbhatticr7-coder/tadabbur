import { useState } from "react";

export default function Ask() {
  const [question, setQuestion] = useState("");

  return (
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
  );
}
