export default function Nav() {
  return (
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
  );
}
