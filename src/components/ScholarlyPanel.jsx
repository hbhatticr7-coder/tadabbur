import { useEffect } from "react";

export default function ScholarlyPanel({ word, analysis, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!analysis) {
    return (
      <Backdrop onClose={onClose}>
        <Sheet>
          <CloseButton onClose={onClose} />
          <Heading word={word} />
          <p className="font-body text-base leading-relaxed" style={{ color: "#4a4239" }}>
            A full scholarly annotation for this word has not yet been written.
            We don't paraphrase where we haven't read — so this panel is empty, plainly.
          </p>
        </Sheet>
      </Backdrop>
    );
  }

  return (
    <Backdrop onClose={onClose}>
      <Sheet>
        <CloseButton onClose={onClose} />
        <Heading word={word} />

        <Section label="Morphology">
          <p className="font-body text-base leading-relaxed" style={{ color: "#2a2520" }}>
            {analysis.morphology}
          </p>
        </Section>

        {analysis.excerpts && analysis.excerpts.length > 0 && (
          <Section label="In the classical tafsirs">
            <div className="space-y-6">
              {analysis.excerpts.map((ex, i) => (
                <article key={i} className="pl-5 border-l rule" style={{ borderLeftWidth: 2 }}>
                  <div className="font-body text-xs uppercase tracking-[0.25em] gilt mb-2">
                    {ex.source}
                  </div>
                  <p className="font-body text-base leading-relaxed" style={{ color: "#2a2520" }}>
                    {ex.body}
                  </p>
                  <div className="mt-2 font-body text-xs italic" style={{ color: "#7a6e5e" }}>
                    {ex.url ? (
                      <a href={ex.url} target="_blank" rel="noreferrer" className="link-underline">view original →</a>
                    ) : (
                      <span>editorial paraphrase · original text not yet linked</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Section>
        )}

        <Section label="Lexicon">
          <div className="font-body text-xs uppercase tracking-[0.25em] gilt mb-2">
            {analysis.lexicon.source}
          </div>
          <p className="font-body text-base leading-relaxed" style={{ color: "#2a2520" }}>
            {analysis.lexicon.body}
          </p>
        </Section>

        <footer className="mt-10 pt-6 border-t rule font-body text-xs italic" style={{ borderTopWidth: 1, color: "#7a6e5e" }}>
          Excerpts on this page are editorial paraphrases of positions attributed to each scholar in the cited work — not verbatim translations. Where the original is not yet linked, we say so plainly.
        </footer>
      </Sheet>
    </Backdrop>
  );
}

function Backdrop({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-6 md:p-12"
      style={{ background: "rgba(29,25,23,0.55)" }}
      onClick={onClose}
    >
      {children}
    </div>
  );
}

function Sheet({ children }) {
  return (
    <div
      className="vellum relative w-full max-w-3xl p-10 md:p-14 my-8"
      style={{
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.45), 0 1px 0 rgba(29,25,23,0.06)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

function CloseButton({ onClose }) {
  return (
    <button
      onClick={onClose}
      aria-label="Close scholarly analysis"
      className="absolute top-4 right-5 font-body text-2xl leading-none"
      style={{ color: "#7a6e5e" }}
    >
      ×
    </button>
  );
}

function Heading({ word }) {
  return (
    <header className="mb-8 pb-6 border-b rule" style={{ borderBottomWidth: 1 }}>
      <div className="font-body text-xs uppercase tracking-[0.3em] gilt mb-3">Scholarly analysis</div>
      <div className="flex items-baseline gap-5">
        <div className="font-ar text-5xl moss">{word.ar}</div>
        <div>
          <div className="font-display text-3xl italic" style={{ fontWeight: 400 }}>{word.tr}</div>
          <div className="font-body" style={{ color: "#7a6e5e" }}>{word.gloss}</div>
        </div>
      </div>
    </header>
  );
}

function Section({ label, children }) {
  return (
    <section className="mb-8">
      <div className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#7a6e5e" }}>
        {label}
      </div>
      {children}
    </section>
  );
}
