export default function Footer() {
  return (
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
  );
}
