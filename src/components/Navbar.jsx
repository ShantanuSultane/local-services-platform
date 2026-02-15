import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [profileModal, setProfileModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [previewPhoto, setPreviewPhoto] = useState(null);

  const [editForm, setEditForm] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setUser(loggedUser);

      const savedPhoto = localStorage.getItem("userProfilePhoto");
      if (savedPhoto) setPreviewPhoto(savedPhoto);
    };

    loadUser();
    window.addEventListener("userLoggedIn", loadUser);

    return () => window.removeEventListener("userLoggedIn", loadUser);
  }, []);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const firstLetter = user?.username?.charAt(0).toUpperCase();

  // LOGOUT → Close modal → Redirect to login
  const handleLogout = () => {
    setProfileModal(false); 
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userProfilePhoto");
  
    setUser(null);
    setBookings([]);  //CLEAR DATA
  
    setTimeout(() => navigate("/login"), 300);
  };
  
  // OPEN EDIT PROFILE MODAL
  const openEditModal = () => {
    setEditForm({
      fullname: user.fullname,
      username: user.username,
      email: user.email,
    });

    setEditModal(true);
  };

  // SAVE PROFILE UPDATES
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    const updatedUser = { ...user, ...editForm };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    setEditModal(false);
  };

  // UPLOAD / CHANGE PROFILE PHOTO
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("userProfilePhoto", reader.result);
      setPreviewPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
                     {/* PROFILE MODAL */}
      {profileModal && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="close-modal-btn" onClick={() => setProfileModal(false)}>×</button>

            <h2>User Profile</h2>

            <div className="profile-photo-section">
              {previewPhoto ? (
                <img src={previewPhoto} alt="profile" className="profile-photo" />
              ) : (
                <div className="profile-photo-default">{firstLetter}</div>
              )}
            </div>

            <div className="profile-info">
              <p><strong>Full Name:</strong> {user?.fullname}</p>
              <p><strong>Username:</strong> {user?.username}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </div>

            <div className="profile-buttons">
              <button className="edit-btn" onClick={openEditModal}>Edit Profile</button>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PROFILE MODAL */}

      {editModal && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="close-modal-btn" onClick={() => setEditModal(false)}>×</button>

            <h2>Edit Profile</h2>

            <div className="edit-photo-section">
              <label className="upload-btn">
                Change Photo
                <input type="file" accept="image/*" onChange={handlePhotoUpload} />
              </label>

              {previewPhoto ? (
                <img src={previewPhoto} className="profile-photo" alt="profile" />
              ) : (
                <div className="profile-photo-default">{firstLetter}</div>
              )}
            </div>

            <div className="edit-form">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                value={editForm.fullname}
                onChange={handleEditChange}
              />

              <label>Username</label>
              <input
                type="text"
                name="username"
                value={editForm.username}
                onChange={handleEditChange}
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleEditChange}
              />
            </div>

            <button className="save-btn" onClick={saveProfile}>
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="navbar-container">
        <div className="navbar">

          <div className="logo">
            <Link to="/">Local<span>Services</span></Link>
          </div>

          <ul className={mobileOpen ? "nav-links active" : "nav-links"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/providers">Providers</Link></li>
            {user && <li><Link to="/bookings">My Bookings</Link></li>}
            <li><Link to="/about">About Us</Link></li>

            <li>
              {user ? (
                <div
                  className="profile-icon"
                  onClick={() => setProfileModal(true)}
                >
                  {previewPhoto ? (
                    <img src={previewPhoto} className="profile-icon-img" alt="profile" />
                  ) : (
                    firstLetter
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
    </>
  );
};

export default Navbar;
