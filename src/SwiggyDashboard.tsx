import React from "react";
import { restaurants, CARD_URL, HEADER_URL } from "./data";


export default function SwiggyDashboard({ onBack }: { onBack?: () => void }) {
  return (
    <div className="swiggy-page">
      {/* 🔸 Header */}
      <header className="swiggy-header">
        <div className="swiggy-logo">
          <img src={HEADER_URL} alt="Swiggy logo" />
          <h1>Swiggy</h1>
        </div>

        <div className="swiggy-search">
          <input type="text" placeholder="Search for restaurant, item or more" />
        </div>

        <div className="swiggy-buttons">
          <button>Get the App</button>
          <button className="signin">Sign In</button>
        </div>
      </header>

      {/* 🔸 Hero Section */}
      <section className="swiggy-hero">
        <div className="hero-content">
          <h2>Order food & groceries. Discover best restaurants. Swiggy it!</h2>
          <div className="hero-actions">
            <input type="text" placeholder="Enter your location..." />
            <button>Find Food</button>
          </div>
        </div>
      </section>

      {/* 🔸 Restaurants */}
      <section className="restaurant-section">
        <h3>Discover best restaurants near you</h3>

        <div className="restaurant-grid">
          {restaurants.map((r, i) => (
            <div key={i} className="restaurant-card">
              <img src={CARD_URL + r.image} alt={r.name} />
              <div className="restaurant-info">
                <h4>{r.name}</h4>
                <p className="cuisines">{r.cuisines.join(", ")}</p>
                <div className="info-row">
                  <span>⭐ {r.rating}</span>
                  <span>{r.deliveryTime}</span>
                  <span>{r.costForTwo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔸 Footer */}
      <footer className="swiggy-footer">
        <p>© 2025 Swiggy Clone by Kalyan Srinivas Mantha</p>
      </footer>
    </div>
  );
}