import { useState } from "react";
import { entries } from "../data/askIndex.js";
import { findAnswer } from "../lib/askSearch.js";

// Initial state: show the seed entry so the section reads as "full" on first
// paint. Once the user asks something, we switch to their query's result.
const INITIAL = entries[0];

export default function Ask() {
  const [draft, setDraft] = useState("");
  const [asked, setAsked] = useState(null);   // the submitted query string, or null
  const [result, setResult] = useState(INITIAL);

  const submit = () => {
    const q = draft.trim();
    if (!q) return;
    setAsked(q);
    setResult(findAnswer(q));
    setDraft("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") submit();
  };

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
          {result ? (
            <AnswerCard question={asked ?? result.question} answer={result.answer} sources={result.sources} />
          ) : (
            <NoMatchCard question={asked} />
          )}

          <div className="mt-6 flex items-center gap-4 border-b rule pb-4" style={{ borderBottomWidth: 1 }}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Try: what's the difference between ar-Raḥmān and ar-Raḥīm?"
              className="flex-1 bg-transparent font-body text-lg outline-none placeholder:italic"
              style={{ color: "#1D1917" }}
            />
            <button onClick={submit} className="font-body text-sm moss">Ask →</button>
          </div>

          <p className="mt-3 font-body text-xs italic" style={{ color: "#7a6e5e" }}>
            Our annotated library currently covers Al-Fātiḥa 1:1 — anything outside that will say so.
          </p>
        </div>
      </div>
    </section>
  );
}

function AnswerCard({ question, answer, sources }) {
  return (
    <div className="vellum p-10" style={{ boxShadow: "0 1px 0 rgba(29,25,23,0.06), 0 30px 60px -30px rgba(29,25,23,0.25)" }}>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b rule" style={{ borderBottomWidth: 1 }}>
        <div className="w-6 h-6 rounded-full" style={{ background: "#1B3A2E" }} />
        <span className="font-display text-sm tracking-wider uppercase">Companion</span>
        <span className="ml-auto font-body text-xs" style={{ color: "#7a6e5e" }}>sources: {sources.length}</span>
      </div>

      <div className="font-body italic mb-5 text-lg" style={{ color: "#4a4239" }}>
        "{question}"
      </div>

      <div className="font-body leading-relaxed mb-6">
        {answer}
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t rule" style={{ borderTopWidth: 1 }}>
        {sources.map((s, i) => (
          <span key={i} className="font-body text-xs px-3 py-1 rounded-sm" style={{ background: "#F3EADB", color: "#1B3A2E" }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function NoMatchCard({ question }) {
  return (
    <div className="vellum p-10" style={{ boxShadow: "0 1px 0 rgba(29,25,23,0.06), 0 30px 60px -30px rgba(29,25,23,0.25)" }}>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b rule" style={{ borderBottomWidth: 1 }}>
        <div className="w-6 h-6 rounded-full" style={{ background: "#A07E42" }} />
        <span className="font-display text-sm tracking-wider uppercase">Companion</span>
        <span className="ml-auto font-body text-xs" style={{ color: "#7a6e5e" }}>no annotated answer</span>
      </div>

      {question && (
        <div className="font-body italic mb-5 text-lg" style={{ color: "#4a4239" }}>
          "{question}"
        </div>
      )}

      <div className="font-body leading-relaxed mb-3">
        We don't have an annotated answer for this yet.
      </div>
      <div className="font-body text-sm leading-relaxed" style={{ color: "#4a4239" }}>
        The current library covers Al-Fātiḥa 1:1 — the four words of the Basmala and the questions that open naturally around them. We'll only surface answers where we've read the sources and can cite them. Anything else, we say so plainly.
      </div>
    </div>
  );
}
