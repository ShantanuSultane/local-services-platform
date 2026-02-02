import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {


  
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="logo">Local<span>Services</span></div>

        <ul className={mobileOpen ? "nav-links active" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/providers">Providers</a></li>
          <li><a href="/contact">Contact</a></li>
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
