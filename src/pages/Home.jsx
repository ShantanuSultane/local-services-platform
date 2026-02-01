import { Link } from "react-router-dom";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard";
import "../styles/components/Home.css";

export default function Home() {
  return (
    <div className="home-advanced">

      {/* ---------------- Premium Hero Section ---------------- */}
      <section className="hero-advanced">
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <h1>
            Local Home Services  
            <span>Delivered Professionally.</span>
          </h1>

          <p className="hero-sub">
            Trusted experts for cleaning, repairs, beauty, and more —  
            book services instantly with guaranteed quality.
          </p>

          <div className="hero-search">
            <input type="text" placeholder="Search for services (cleaning, AC repair, salon...)" />
            <button>Search</button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div>
              <h3>1200+</h3>
              <p>Verified Experts</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Positive Ratings</p>
            </div>
          </div>
        </div>
      </section>



      {/* ---------------- Curved Feature Section ---------------- */}
      <section className="features">
        <h2>All Home Services in One Platform</h2>

        <div className="features-grid">
          <div className="feature-box">
            <img src="/assets/icons/shield.png" alt="verified" />
            <h3>Safe & Verified Experts</h3>
            <p>Background checked professionals with high service ratings.</p>
          </div>

          <div className="feature-box">
            <img src="/assets/icons/time.png" alt="fast" />
            <h3>Instant Booking</h3>
            <p>Book any service within seconds, anytime.</p>
          </div>

          <div className="feature-box">
            <img src="/assets/icons/warranty.png" alt="warranty" />
            <h3>Service Warranty</h3>
            <p>Free 7-day service warranty for selected categories.</p>
          </div>

          <div className="feature-box">
            <img src="/assets/icons/support.png" alt="support" />
            <h3>24/7 Customer Support</h3>
            <p>We are available to assist you round the clock.</p>
          </div>
        </div>
      </section>



      {/* ---------------- Trending Categories ---------------- */}
      <section className="categories-advanced">
        <h2>Trending Home Services</h2>
        <p className="sub">Book our most loved and highly rated services</p>

        <div className="category-slider">

          <div className="cat-box">
            <img src="/assets/banners/cleaning.jpg" />
            <div className="cat-info">
              <h3>Deep Home Cleaning</h3>
              <Link to="/services">Book Now →</Link>
            </div>
          </div>

          <div className="cat-box">
            <img src="/assets/banners/electrician.jpg" />
            <div className="cat-info">
              <h3>Electrician Repair</h3>
              <Link to="/services">Book Now →</Link>
            </div>
          </div>

          <div className="cat-box">
            <img src="/assets/banners/plumber.jpg" />
            <div className="cat-info">
              <h3>Plumbing & Fixing</h3>
              <Link to="/services">Book Now →</Link>
            </div>
          </div>

        </div>
      </section>



      {/* ---------------- Popular Services ---------------- */}
      <section className="services-advanced">
        <h2>Popular Services Near You</h2>

        <div className="services-grid-adv">
          {services.slice(0, 8).map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </div>

        <div className="center">
          <Link to="/services" className="btn-large">
            View All Services
          </Link>
        </div>
      </section>



      {/* ---------------- Testimonial Premium ---------------- */}
      <section className="reviews-advanced">
        <h2>What Customers Say</h2>

        <div className="review-slider">
          <div className="review-card">
            <p>“Amazing service! The deep cleaning team was professional and fast.”</p>
            <h4>— Shruti Patil</h4>
          </div>

          <div className="review-card">
            <p>“I booked an electrician at 10 PM — he arrived within 20 minutes!”</p>
            <h4>— Harshal Jadhav</h4>
          </div>

          <div className="review-card">
            <p>“Affordable pricing and top service quality. Highly recommended.”</p>
            <h4>— Monika Deshmukh</h4>
          </div>
        </div>
      </section>



      {/* ---------------- App Download CTA ---------------- */}
      <section className="download-advanced">
        <div className="download-content">
          <h2>Book Services Faster on the App</h2>
          <p>Exclusive discounts, live tracking & priority support in the app.</p>

          <div className="download-buttons">
            <button className="app-btn">Download App</button>
            <Link to="/services" className="app-outline">Explore Services</Link>
          </div>
        </div>

        <div className="download-img">
          <img src="/assets/phone-app.png" alt="App" />
        </div>
      </section>

    </div>
  );
}
