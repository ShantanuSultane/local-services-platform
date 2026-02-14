import React, { useState, useEffect, useRef } from "react";
import "../styles/components/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  
  useEffect(() => {
    const loadUser = () => {
      const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setUser(loggedUser);
    };
  
    loadUser(); // load on mount
  
    // listen for login updates
    window.addEventListener("userLoggedIn", loadUser);
  
    // cleanup
    return () => window.removeEventListener("userLoggedIn", loadUser);
  }, []);
  
  

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const firstLetter = user?.username?.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            Local<span>Services</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className={mobileOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/providers">Providers</Link></li>

          {/* Protected Route: Only visible when user logged in */}
          {user && <li><Link to="/bookings">My Bookings</Link></li>}

          <li><Link to="/about">About Us</Link></li>

          {/* Profile Dropdown */}
          <li>
            {user ? (
              <div className="profile-wrapper" ref={dropdownRef}>
                <div
                  className="profile-icon"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {firstLetter}
                </div>

                {dropdownOpen && (
                  <div className="profile-menu">
                    <p className="menu-username">
                      {user.username}
                    </p>

                    <Link to="/profile" className="menu-item">
                      Edit Profile
                    </Link>

                    <Link to="/settings" className="menu-item">
                      Settings
                    </Link>

                    <button className="menu-item logout-btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="btn-primary">
                <Link to="/login">Login</Link>
              </button>
            )}
          </li>
        </ul>

        <div className="mobile-icon" onClick={toggleMenu}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
