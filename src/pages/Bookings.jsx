import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/Bookings.css";

export default function Bookings({ bookings, onCancelBooking }) {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Upcoming");
  const [expandedCard, setExpandedCard] = useState(null);

  // Popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Filter bookings
  const upcoming = bookings.filter((b) => b.status === "Upcoming");
  const completed = bookings.filter((b) => b.status === "Completed");
  const cancelled = bookings.filter((b) => b.status === "Cancelled");

  const tabs = {
    Upcoming: upcoming,
    Completed: completed,
    Cancelled: cancelled,
  };

  // Popup open
  const handleCancelClick = (id) => {
    setSelectedId(id);
    setShowPopup(true);
  };

  // Confirm cancel
  const confirmCancel = () => {
    onCancelBooking(selectedId);
    setShowPopup(false);
    setSelectedId(null);
  };

  return (
    <div className="bookings-container">

      {/* HEADER */}
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <p>Track, manage and review your service history easily.</p>
      </div>

      <div className="bookings-layout">

        {/* LEFT SIDE - VERTICAL TABS */}
        <div className="bookings-tabs">
          {["Upcoming", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}

          <button className="new-book-btn" onClick={() => navigate("/services")}>
            + Book New Service
          </button>
        </div>

        {/* RIGHT SIDE - BOOKINGS LIST */}
        <div className="bookings-list">
          <h2 className="section-title">{activeTab}</h2>

          {tabs[activeTab].length === 0 ? (
            <p className="empty-state">No {activeTab.toLowerCase()} bookings found</p>
          ) : (
            tabs[activeTab].map((b) => (
              <div
                key={b.id}
                className={`booking-card premium-card ${b.status.toLowerCase()}`}
              >

                {/* CARD TOP */}
                <div className="booking-top">
                  <div>
                    <h3>{b.serviceName}</h3>
                    <p><span>Date:</span> {b.date}</p>
                    <p><span>Time:</span> {b.time}</p>
                    <p className="price">₹{b.price}</p>
                  </div>

                  <div className="booking-actions">

                    {/* STATUS BADGE FIRST */}
                    <span className={`status-badge ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>

                    {/* CANCEL BUTTON BELOW */}
                    {activeTab === "Upcoming" && (
                      <button
                        className="cancel-btn"
                        onClick={() => handleCancelClick(b.id)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

                {/* EXPAND MORE DETAILS */}
                <button
                  className="details-toggle"
                  onClick={() =>
                    setExpandedCard(expandedCard === b.id ? null : b.id)
                  }
                >
                  {expandedCard === b.id ? "Hide Details ▲" : "View Details ▼"}
                </button>

                {/* PROVIDER DETAILS */}
                {expandedCard === b.id && (
                  <div className="provider-details">
                    <h4>Professional Details</h4>
                    <p><span>Name:</span> {b.pro}</p>
                    <p><span>Experience:</span> {b.experience || "3+ years"}</p>
                    <p><span>Rating:</span> ⭐ {b.rating || "4.8"}</p>
                    <p><span>Phone:</span> {b.phone || "+91 9876543210"}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* POPUP CONFIRM BOX */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Cancel Booking?</h3>
            <p>
              Are you sure you want to cancel this service?
              Your assigned professional will be notified.
            </p>

            <div className="popup-buttons">
              <button className="no-btn" onClick={() => setShowPopup(false)}>
                No
              </button>
              <button className="yes-btn" onClick={confirmCancel}>
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
