import { useState, useEffect } from "react";
import { components } from "./componentData";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import SwiggyDashboard from "./SwiggyDashboard";

declare global {
  interface Window {
    Tenor?: { init: () => void };
  }
}

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [id, setId] = useState<number>(0);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [page, setPage] = useState<"home" | "swiggy">("home");

  function modalHandler(name: string, num: number) {
    if (name === "Swiggy Dashboard") {
      setPage("swiggy");
    } else {
      setId(num);
      setShowModal(true);
    }
  }

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 300);
  }

  useEffect(() => {
    const scriptId = "tenor-embed-js";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.async = true;
      s.src = "https://tenor.com/embed.js";
      document.body.appendChild(s);
    }
    const t = setTimeout(() => window.Tenor?.init?.(), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((p) => (p === "ltr" ? "rtl" : "ltr"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-root">
      {page === "home" && <Header />}
  
      {page === "swiggy" ? (
        <SwiggyDashboard onBack={() => setPage("home")} />
      ) : (
        <>
          {/* Fullscreen hero with fixed header on top */}
          <section className="hero-wrapper">
            <Hero />
          </section>
  
          {/* Components Section */}
          <section
            id="components-section"
            className={`main ${showModal ? "active" : ""}`}
          >
            <Cards clickHandler={modalHandler} />
  
            {showModal && (
              <div className={`modal ${closing ? "fade-out" : "fade-in"}`}>
                <div
                  className={`modalInner ${closing ? "scale-out" : "scale-in"}`}
                >
                  <button className="close" onClick={handleClose}>
                    ×
                  </button>
                  {components[id].component}
                  <div
                    className="description"
                    style={{ marginTop: "auto", color: "#888" }}
                  >
                    {components[id].description}
                  </div>
                </div>
              </div>
            )}
          </section>
  
          {/* Naruto GIF stays globally positioned */}
          {page === "home" && <div className={`naruto-runner ${direction === "rtl" ? "reverse" : ""}`}>
            <div
              className="tenor-gif-embed naruto-gif"
              data-postid="15371317"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/naruto-run-ninja-gif-15371317">
                Naruto Run GIF
              </a>{" "}
              from{" "}
              <a href="https://tenor.com/search/naruto-gifs">Naruto GIFs</a>
            </div>
          </div>}
        </>
      )}
  
      <Footer />
    </div>
  );
}