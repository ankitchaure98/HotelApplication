import React, { useState } from "react";
import Auth from "./Auth";
import Hotels from "./Hotels";
import "./styles.css";

export default function App() {
  const [token, setToken] = useState(() => localStorage.getItem("hotel_token"));
  const [view, setView] = useState("home");

  const logout = () => {
    localStorage.removeItem("hotel_token");
    setToken(null);
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <button className="brand" onClick={() => setView("home")}>
          <span className="brand-mark">✦</span> AURELIA<span>STAYS</span>
        </button>
        <div className="nav-links">
          <button onClick={() => setView("home")}>Discover</button>
          <button onClick={() => setView("hotels")}>Hotels</button>
          {token ? <button className="nav-cta" onClick={logout}>Sign out</button> :
            <button className="nav-cta" onClick={() => setView("auth")}>Sign in</button>}
        </div>
      </nav>

      {view === "auth" && !token ? <Auth setToken={(t) => { localStorage.setItem("hotel_token", t); setToken(t); setView("hotels"); }} /> :
       view === "hotels" || token ? <Hotels token={token} /> :
       <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">THE ART OF STAYING</p>
            <h1>Stay somewhere<br/><em>extraordinary.</em></h1>
            <p className="hero-sub">Handpicked hotels, unforgettable spaces, and a calmer way to travel.</p>
            <button className="primary-btn" onClick={() => setView(token ? "hotels" : "auth")}>Explore stays <span>↗</span></button>
          </div>
          <div className="hero-orb"><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><div className="orb-core">A</div></div>
        </section>
        <section className="feature-strip">
          <div><strong>01</strong><span>Curated spaces</span></div>
          <div><strong>02</strong><span>Effortless booking</span></div>
          <div><strong>03</strong><span>Made for memories</span></div>
        </section>
        <section className="intro">
          <p className="eyebrow">A NEW PERSPECTIVE</p>
          <h2>Hotels with a point of view.</h2>
          <p>From quiet city hideaways to sunlit escapes, discover places that feel as good as they look.</p>
        </section>
       </main>}
      <footer>© {new Date().getFullYear()} Aurelia Stays · Crafted for curious travellers</footer>
    </div>
  );
}