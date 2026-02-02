import { Link } from "react-router-dom";
import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard";
import "../styles/components/Home.css";

export default function Home() {
  return (
    <div className="home-advanced">

{/* ---------------- Premium Hero Section 2.0 ---------------- */}
<section className="hero-final2">
<div className="hero-overlay"></div>

<div className="hero-inner">

  {/* Left Content */}
  <div className="hero-left">
    <h1 className="fade-up">
      Your Home.  
      <span>Our Expert Services.</span>
    </h1>

    <p className="hero-text fade-up-delay">
      Book trusted professionals for cleaning, repairs, appliances,
      beauty, painting & more — fast, verified and reliable.
    </p>

    <div className="hero-search-box slide-up">
      <input type="text" placeholder="Search services — cleaning, AC repair, electrician..." />
      <button>Search</button>
    </div>

    <div className="hero-stats-floating">
      <div className="float-card">
        <h3>50K+</h3>
        <p>Happy Customers</p>
      </div>

      <div className="float-card">
        <h3>1200+</h3>
        <p>Trusted Professionals</p>
      </div>

      <div className="float-card">
        <h3>98%</h3>
        <p>Positive Rating</p>
      </div>
    </div>
  </div>

  {/* Right Content — Premium Quick Highlights Section */}
  <div className="hero-right-section">
    <h3>Why Choose Us?</h3>
    <ul>
      <li>
        <strong>Fast Booking:</strong> Book a professional in under 60 seconds.
      </li>
      <li>
        <strong>Verified Experts:</strong> All professionals are background-checked.
      </li>
      <li>
        <strong>Flexible Scheduling:</strong> Choose time slots that suit you.
      </li>
      <li>
        <strong>Service Warranty:</strong> We stand behind our work with a 7-day warranty.
      </li>
    </ul>
    <button className="cta-btn">Explore Services</button>
  </div>

</div>
</section>





      {/* ---------------- Curved Feature Section ---------------- */}
      <section className="features">
  <h2 className="section-title">All Home Services in One Platform</h2>

  <div className="features-grid">

    <div className="feature-box">
      <div className="icon-circle">
        <img src="/assets/icons/verified.jpg" alt="verified" />
      </div>
      <h3>Safe & Verified Experts</h3>
      <p>All professionals are identity-verified and background checked.</p>
    </div>

    <div className="feature-box">
      <div className="icon-circle">
        <img src="/assets/icons/time4.png" alt="fast" />
      </div>
      <h3>Instant Booking</h3>
      <p>Book any service in seconds — hassle-free scheduling.</p>
    </div>

    <div className="feature-box">
      <div className="icon-circle">
        <img src="/assets/icons/warranty.jpg" alt="warranty" />
      </div>
      <h3>Service Warranty</h3>
      <p>Enjoy a free 7-day warranty on selected services.</p>
    </div>

    <div className="feature-box">
      <div className="icon-circle">
        <img src="/assets/icons/support2.png" alt="support" />
      </div>
      <h3>24/7 Customer Support</h3>
      <p>Round-the-clock assistance for all your service needs.</p>
    </div>

  </div>
</section>



{/* ---------------- Trending Categories ---------------- */}
<section className="categories-advanced">
  <h2 className="section-title">Trending Home Services</h2>
  <p className="sub">Book our most loved and highly rated services</p>

  <div className="category-slider">

    <div className="cat-box">
      <img src="/assets/banners/cleaning2.jpg" alt="cleaning" />
      <div className="cat-info">
        <h3>Deep Home Cleaning</h3>
        <Link to="/services">Book Now →</Link>
      </div>
    </div>

    <div className="cat-box">
      <img src="/assets/banners/electrician2.jpg" alt="electrician" />
      <div className="cat-info">
        <h3>Electrician Repair</h3>
        <Link to="/services">Book Now →</Link>
      </div>
    </div>

    <div className="cat-box">
      <img src="/assets/banners/plumber.webp" alt="plumber" />
      <div className="cat-info">
        <h3>Plumbing & Fixing</h3>
        <Link to="/services">Book Now →</Link>
      </div>
    </div>

    <div className="cat-box">
      <img src="/assets/banners/salon.jpg" alt="salon" />
      <div className="cat-info">
        <h3>Salon at Home</h3>
        <Link to="/services">Book Now →</Link>
      </div>
    </div>

  </div>
</section>




{/* ---------------- Popular Services ---------------- */}
<section className="services-advanced">
  <h2 className="section-title">Popular Services Near You</h2>
  <p className="section-sub">
    Most booked and highly trusted services in your area
  </p>

  <div className="services-grid-adv">
    {services.slice(0, 12).map((item) => (
      <ServiceCard key={item.id} service={item} />
    ))}
  </div>

  <div className="center">
    <Link to="/services" className="btn-large">
      View All Services →
    </Link>
  </div>
</section>




{/* ---------------- Testimonial Premium ---------------- */}
<section className="reviews-advanced">
  <h2 className="section-title">What Customers Say</h2>
  <p className="section-sub">Real experiences from happy customers</p>

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

    <div className="review-card">
      <p>“Professional experts and quick service. My AC repair was done perfectly.”</p>
      <h4>— Rahul Shinde</h4>
    </div>

    <div className="review-card">
      <p>“Their salon-at-home service is absolutely premium. Loved the experience!”</p>
      <h4>— Kavita More</h4>
    </div>

    <div className="review-card">
      <p>“Best home services platform. Transparent pricing and trusted professionals.”</p>
      <h4>— Sagar Kulkarni</h4>
    </div>

  </div>
</section>


{/* ---------------- App Download CTA - Premium ---------------- */}
<section className="download-advanced">
  <div className="download-content">
    <h2>Book Services Faster on the App</h2>
    <p>Get exclusive discounts, live tracking, priority scheduling, and 24x7 support with our mobile app.</p>

    {/* Highlight Features */}
    <ul className="app-features">
      <li>✔ 15% OFF on first app booking</li>
      <li>✔ Live Technician Tracking</li>
      <li>✔ Priority Customer Support</li>
      <li>✔ Easy Rescheduling & Rebooking</li>
    </ul>

    {/* Buttons */}
    <div className="download-buttons">
      <button className="app-btn">
        📱 Download App
      </button>

      <Link to="/services" className="app-outline">
        Explore Services
      </Link>
    </div>

    {/* Trust Badges */}
    <div className="trust-box">
      <span>⭐ 4.8 App Rating</span>
      <span>💯 50,000+ Active Users</span>
      <span>🔒 Safe & Secure Payments</span>
    </div>
  </div>

  {/* App Image */}
  <div className="download-img">
    <img src="/assets/phone_app.png" alt="App Preview" />
  </div>
</section>

    </div>
  );
}
