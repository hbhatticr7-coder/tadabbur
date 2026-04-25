// Nav links are scroll-to-section anchors; each href targets a section ID
// added in App.jsx. "The Quran" and "Study" both point to the verse card —
// the reading panel IS the study experience for now. When the Three Paths
// modes are eventually built, "Study" can rebind to a Student-mode entry.
const NAV_ITEMS = [
  { label: "The Quran", href: "#verse" },
  { label: "Study", href: "#verse" },
  { label: "Ask", href: "#ask" },
  { label: "For seekers", href: "#paths" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <nav className="relative max-w-6xl mx-auto px-8 pt-8 flex items-end justify-between">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl tracking-tight" style={{ fontWeight: 500 }}>Tadabbur</span>
        <span className="font-ar text-xl moss">تدبر</span>
      </div>
      <div className="hidden md:flex gap-8 font-body text-sm" style={{ letterSpacing: "0.02em" }}>
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href} className="link-underline">{item.label}</a>
        ))}
      </div>
      <a href="#verse" className="font-body text-sm moss border-b border-current pb-0.5">Begin →</a>
    </nav>
  );
}
