export default function WordStudy({ word, rootMeaning, occurrences, onOpenAnalysis }) {
  return (
    <div className="lg:col-span-5 lg:pt-4">
      <div className="font-body text-xs uppercase tracking-[0.3em] gilt mb-6">Studying</div>

      <div className="flex items-baseline gap-4 mb-8 pb-6 border-b rule" style={{ borderBottomWidth: 1 }}>
        <div className="font-ar text-5xl moss">{word.ar}</div>
        <div>
          <div className="font-display text-2xl italic" style={{ fontWeight: 400 }}>{word.tr}</div>
          <div className="font-body" style={{ color: "#7a6e5e" }}>{word.gloss}</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#5a4a36" }}>Root</div>
        <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1">
          <span className="font-ar text-3xl moss">{word.root}</span>
          <span className="font-body italic text-lg">{word.rootTr}</span>
          <span className="font-body text-base" style={{ color: "#4a4239" }}>— {rootMeaning}</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#5a4a36" }}>Where else this root appears</div>
        <ul className="space-y-4">
          {occurrences.map((o, i) => (
            <li key={i} className="font-body">
              <div className="flex items-baseline gap-4">
                <span className="tabular-nums text-sm w-12 flex-shrink-0" style={{ color: "#8a6a2a" }}>{o.ref}</span>
                <span dir="rtl" className="font-ar text-2xl leading-relaxed">{o.text}</span>
              </div>
              <div className="ml-16 mt-1 text-sm italic" style={{ color: "#5a4a36" }}>— {o.note}</div>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={onOpenAnalysis} className="font-body text-sm moss border-b border-current pb-0.5">
        Open full scholarly analysis →
      </button>
    </div>
  );
}
