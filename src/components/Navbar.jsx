import React, { useState } from "react";
import "../styles/components/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        
        <div className="logo">
          <Link to="/">Local<span>Services</span></Link>
        </div>

        <ul className={mobileOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/providers">Providers</Link></li>

          {/* NEW: My Bookings */}
          <li><Link to="/bookings">My Bookings</Link></li>

          <li><Link to="/contact">Contact</Link></li>

          <li><Link to="/about">About Us</Link></li>


          {/* Login Button */}
          <li><button className="btn-primary">Login</button></li>
        </ul>

        <div className="mobile-icon" onClick={toggleMenu}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
