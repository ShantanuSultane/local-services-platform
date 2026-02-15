import React from "react";
import "../styles/components/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-wrapper">

      {/*  HERO  */}
      <section className="about-hero">
        <div className="hero-text">
          <h1 className="fade-up">Premium Home Services Delivered With Trust</h1>
          <p className="fade-up delay-1">
            LocalServices brings skilled and verified professionals to your doorstep.
            Fast booking, transparent pricing, and top-quality service — all in one place.
          </p>
          <div className="hero-buttons fade-up delay-2">
            <Link to="/contact" className="btn-outline">Contact Us</Link>
            <Link to="/services" className="btn-primary1">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-core fade-up">
        <h2 className="h2font">Who We Are..?</h2>
        <p>
          LocalServe is a digital home services platform created to simplify how
          people book trusted service professionals. Whether it’s plumbing,
          repairs, home cleaning, grooming, electrical work or appliances —
          we ensure high-quality, safe and reliable service every time.
        </p>
      </section>

      {/*  VALUES (New & Professional) */}
      <section className="values-section fade-up delay-1">
        <h2 className="h2font1">Our Core Values..!</h2>
        <div className="values-grid">

          <div className="value-card">
            <span>🔒</span>
            <h3>Trust & Safety</h3>
            <p>Every professional on our platform is verified, trained and background-checked.</p>
          </div>

          <div className="value-card">
            <span>⚡</span>
            <h3>Fast Response</h3>
            <p>Book services instantly — no waiting, no delays, no follow-up hassle.</p>
          </div>

          <div className="value-card">
            <span>💼</span>
            <h3>Professional Standards</h3>
            <p>We provide top-tier service with guaranteed quality and transparent pricing.</p>
          </div>

        </div>
      </section>

      {/*  WHY CHOOSE US  */}
      <section className="why-us fade-up">
        <h2 className="h2font1">Why Customers Prefer LocalServices ? </h2>
        <div className="why-grid">

          <div className="why-card">⭐ Verified & Trained Experts</div>
          <div className="why-card">💰 Transparent Pricing</div>
          <div className="why-card">⏱ On-Time Service Assurance</div>
          <div className="why-card">📱 Easy Online Booking</div>
          <div className="why-card">🔐 Secure Digital Payments</div>
          <div className="why-card">📞 Dedicated Support</div>

        </div>
      </section>

      {/*  STATS  */}
      <section className="stats-section fade-up delay-1">
        <div className="stat-card">
          <h3>2,500+</h3>
          <p>Services Delivered</p>
        </div>
        <div className="stat-card">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
        <div className="stat-card">
          <h3>300+</h3>
          <p>Verified Service Experts</p>
        </div>
        <div className="stat-card">
          <h3>14+</h3>
          <p>Service Categories</p>
        </div>
      </section>

      {/*  CTA  */}
      <section className="cta fade-up">
        <h2>Experience Hassle-Free Home Services</h2>
        <p>Book professionals who deliver quality, speed and trust.</p>
        <Link to="/services" className="cta-btn">Book Now</Link>
      </section>

    </div>
  );
}
