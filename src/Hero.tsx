import React, { useEffect } from "react";

export default function Hero() {
  // Smooth scroll to components section
  function scrollToComponents() {
    const section = document.getElementById("components-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  // Electric pulse effect on entry
  useEffect(() => {
    const timer = setTimeout(() => {
      const flash = document.querySelector(".lightning-flash");
      if (flash) {
        flash.classList.add("active");
        setTimeout(() => flash.classList.remove("active"), 400);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* background particles */}
      <div className="particles"></div>

      {/* main text block */}
      <div className="hero-content">
        <h1 className="hero-name">Kalyan&nbsp;Srinivas&nbsp;Mantha</h1>
        <h2 className="hero-tagline">Building UIs at the speed of Thunder ⚡</h2>
      </div>

      {/* lightning flash layer */}
      <div className="lightning-flash"></div>

      {/* scroll arrows + text */}
      <div className="scroll-hint" onClick={scrollToComponents}>
        <span className="scroll-text">scroll to view components</span>
        <div className="arrows">
          <span>▼</span>
          <span>▼</span>
          <span>▼</span>
        </div>
      </div>
    </section>
  );
}