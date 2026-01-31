import { Link } from "react-router-dom";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard.jsx";
import "../styles/components/Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* ---------------- Hero Section ---------------- */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Trusted Local Services Platform</h1>
          <p>Book professional home services with ease — fast, safe, and affordable.</p>

          <div className="search-box">
            <input type="text" placeholder="Search for cleaning, plumbing, repairs..." />
            <button>Search</button>
          </div>

          <p className="hero-note">100+ verified service experts in your city.</p>
        </div>

        <div className="hero-img">
          <img src="/assets/hero.png" alt="Local services" />
        </div>
      </section>



      {/* ---------------- Popular Categories ---------------- */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-list">
          <div className="category-card">
            <img src="/assets/icons/cleaning.png" alt="" />
            <p>Cleaning</p>
          </div>

          <div className="category-card">
            <img src="/assets/icons/plumbing.png" alt="" />
            <p>Plumbing</p>
          </div>

          <div className="category-card">
            <img src="/assets/icons/electrician.png" alt="" />
            <p>Electrician</p>
          </div>

          <div className="category-card">
            <img src="/assets/icons/salon.png" alt="" />
            <p>Beauty & Salon</p>
          </div>
        </div>
      </section>



      {/* ---------------- Services Section ---------------- */}
      <section className="services">
        <h2>Top Booked Services</h2>

        <div className="services-grid">
          {services.slice(0, 6).map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </div>

        <div className="view-all">
          <Link to="/services" className="btn-view-all">View All Services</Link>
        </div>
      </section>



      {/* ---------------- Why Choose Us ---------------- */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div className="why-card">
            <img src="/assets/icons/verified.png" alt="" />
            <h3>Verified Professionals</h3>
            <p>All experts go through background checks and verifications.</p>
          </div>

          <div className="why-card">
            <img src="/assets/icons/quality.png" alt="" />
            <h3>High Quality Service</h3>
            <p>We guarantee excellent service experience and satisfaction.</p>
          </div>

          <div className="why-card">
            <img src="/assets/icons/support.png" alt="" />
            <h3>24/7 Support</h3>
            <p>We assist you anytime with your booking queries.</p>
          </div>

          <div className="why-card">
            <img src="/assets/icons/secure.png" alt="" />
            <h3>Secure Payments</h3>
            <p>Pay securely with UPI, cards, or cash after service.</p>
          </div>

        </div>
      </section>



      {/* ---------------- Testimonials ---------------- */}
      <section className="testimonials">
        <h2>What Customers Say</h2>

        <div className="testimonial-list">

          <div className="testimonial-card">
            <p>"Best cleaning service I ever booked. Fast and neat work!"</p>
            <h4>— Priya Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>"Electrician arrived on time and solved the issue properly."</p>
            <h4>— Rohan Patil</h4>
          </div>

          <div className="testimonial-card">
            <p>"Reliable platform with affordable prices. Loved it."</p>
            <h4>— Sneha Kulkarni</h4>
          </div>

        </div>
      </section>



      {/* ---------------- Download App / CTA ---------------- */}
      <section className="cta">
        <h2>Book Services Anytime, Anywhere</h2>
        <p>Get our app for faster booking and exclusive discounts!</p>

        <div className="cta-buttons">
          <button className="download-btn">Download App</button>
          <Link to="/services" className="cta-explore">Explore Services</Link>
        </div>
      </section>

    </div>
  );
}
