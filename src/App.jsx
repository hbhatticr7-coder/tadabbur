import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Ask from "./components/Ask.jsx";
import Paths from "./components/Paths.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#F3EADB", color: "#1D1917" }}>
      <div className="grain absolute inset-0 pointer-events-none opacity-70" />
      <Nav />
      <div id="verse"><Hero loaded={loaded} /></div>
      <div id="ask"><Ask /></div>
      <div id="paths"><Paths /></div>
      <div id="about"><Closing /></div>
      <Footer />
    </div>
  );
}
