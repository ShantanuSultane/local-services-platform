
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/Bookings.css";

const Bookings = ({ bookings, onCancelBooking }) => {
  const navigate = useNavigate();

  const upcoming = bookings.filter((b) => b.status === "Upcoming");
  const completed = bookings.filter((b) => b.status === "Completed");
  const cancelled = bookings.filter((b) => b.status === "Cancelled");

  return (
    <div className="bookings-container">
      <h1 className="page-title">My Bookings</h1>

      <button
        className="book-another-btn"
        onClick={() => navigate("/services")}
      >
        Book Another Service
      </button>

      {/* Upcoming */}
      <section className="booking-section">
        <h2 className="section-title">Upcoming Bookings</h2>
        {upcoming.length === 0 ? (
          <p className="empty-text">No upcoming bookings</p>
        ) :
        
        (
          upcoming.map((b) => (
            <div className="booking-card" key={b.id}>
              <div className="booking-info">
                <h3>{b.serviceName}</h3>
                <p><strong>Date:</strong> {b.date}</p>
                <p><strong>Time:</strong> {b.time}</p>
                <p><strong>Professional:</strong> {b.pro}</p>
                <p className="price-tag">₹{b.price}</p>
              </div>

              <div className="booking-actions">
                <button
                  className="cancel-btn"
                  onClick={() => onCancelBooking(b.id)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Completed */}
      <section className="booking-section">
        <h2 className="section-title">Completed Services</h2>
        {completed.length === 0 ? (
          <p className="empty-text">No completed bookings</p>
        ) : (
          completed.map((b) => (
            <div className="booking-card completed" key={b.id}>
              <div className="booking-info">
                <h3>{b.serviceName}</h3>
                <p><strong>Date:</strong> {b.date}</p>
                <p><strong>Time:</strong> {b.time}</p>
                <p><strong>Professional:</strong> {b.pro}</p>
                <p className="price-tag">₹{b.price}</p>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Cancelled */}
      <section className="booking-section">
        <h2 className="section-title">Cancelled Bookings</h2>
        {cancelled.length === 0 ? (
          <p className="empty-text">No cancelled bookings</p>
        ) : (
          cancelled.map((b) => (
            <div className="booking-card cancelled" key={b.id}>
              <div className="booking-info">
                <h3>{b.serviceName}</h3>
                <p><strong>Date:</strong> {b.date}</p>
                <p><strong>Time:</strong> {b.time}</p>
                <p><strong>Professional:</strong> {b.pro}</p>
                <p className="price-tag">₹{b.price}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Bookings;

