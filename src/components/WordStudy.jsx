export default function WordStudy({ word, rootMeaning, occurrences }) {
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

      <div className="mb-6">
        <div className="font-body text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "#7a6e5e" }}>Root</div>
        <div className="flex items-baseline gap-3">
          <span className="font-ar text-2xl moss">{word.root}</span>
          <span className="font-body italic">{word.rootTr}</span>
          <span className="font-body text-sm" style={{ color: "#7a6e5e" }}>— {rootMeaning}</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#7a6e5e" }}>Where else this root appears</div>
        <ul className="space-y-2">
          {occurrences.map((o, i) => (
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
  );
}
