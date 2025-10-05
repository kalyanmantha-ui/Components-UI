import React, { useEffect, useState } from "react";
import resumePDF from "./assets/Kalyan-Resume-Latest.pdf";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Prefer observing the actual hero wrapper; fall back gracefully
    const hero =
      (document.querySelector(".hero-wrapper") as HTMLElement | null) ||
      (document.querySelector(".hero-viewport") as HTMLElement | null);

    // If IntersectionObserver exists and we found the hero, use it (most reliable)
    if (hero && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // header visible when hero is NOT intersecting the viewport
          setVisible(!entry.isIntersecting);
        },
        {
          // start showing a hair before the hero fully leaves (account for header height)
          root: null,
          threshold: 0,
          rootMargin: "-64px 0px 0px 0px",
        }
      );

      observer.observe(hero);

      return () => observer.disconnect();
    }

    // Fallback: basic scroll check if either hero was not found or IO is unavailable
    const onScroll = () => {
      const y = window.scrollY;
      const trigger = window.innerHeight * 0.6; // show after ~60% viewport scrolled
      setVisible(y > trigger);
    };

    onScroll(); // run once
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToComponents = () => {
    const section =
      (document.getElementById("components-section") as HTMLElement | null) ||
      (document.querySelector(".containerCards") as HTMLElement | null);

    if (!section) return;

    const headerHeight =
      (document.querySelector(".header") as HTMLElement)?.offsetHeight || 0;

    const y = section.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
      <div className="header-content">
        <h1 className="logo">⚡ Kalyan’s Components</h1>

        <nav className="navLinks">
          <button className="navButton" onClick={scrollToComponents}>
            Components
          </button>

          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="navButton resumeButton"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}