const paths = [
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
];

export default function Paths() {
  return (
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

        {/*
          Each path card is an anchor to #verse — the reading panel is the
          single entry point until distinct path modes (Reader / Student /
          Seeker) are actually built. The card-as-anchor preserves the
          "click here to begin" affordance without lying about behavior:
          all three paths land you at the same place for now.
        */}
        <div className="grid md:grid-cols-3 gap-px vellum">
          {paths.map((c, i) => (
            <a
              key={i}
              href="#verse"
              className="chapter-link paper p-10 cursor-pointer group block"
              aria-label={`Begin ${c.title}: scroll to the verse card`}
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
