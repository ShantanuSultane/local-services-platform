import "../styles/components/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-advanced">

      {/* Top Section */}
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-about">
          {/* <h2 className="footer-logo">LocalServices</h2> */}
          <h2 className="footer-logo">Local<span>Services</span></h2>
          <p>
            Your trusted platform for booking professional home services — 
            cleaning, repairs, beauty, appliance care & more.
          </p>

          <div className="footer-social">
            <a><FaFacebook /></a>
            <a><FaInstagram /></a>
            <a><FaTwitter /></a>
            <a><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">All Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        {/* Popular Services */}
        <div className="footer-links">
          <h3>Popular Services</h3>
          <Link>Deep Home Cleaning</Link>
          <Link>AC Repair & Services</Link>
          <Link>Electrician Services</Link>
          <Link>Plumbing & Fittings</Link>
          <Link>Salon at Home</Link>
          <Link>Pest Control</Link>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Pune, Maharashtra, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@localservices.com</p>

          <div className="footer-apps">
            <img  className="appstore" src="/assets/appstore3.png" alt="App Store" />
            <img src="/assets/playstore.png" alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2026 Local Services — All Rights Reserved
      </div>
    </footer>
  );
}
