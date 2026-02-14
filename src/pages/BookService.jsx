import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import services from "../data/services.json";
import "../styles/components/BookService.css";

export default function BookService({ addBooking }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(id));

  const [form, setForm] = useState({
    fullname: "",
    mobile: "",
    email: "",
    address: "",
    date: "",
    time: "9:00 AM – 11:00 AM",
    instructions: "",
  });

  const [popup, setPopup] = useState(false);

  if (!service) {
    return <h2 className="not-found">Service not found</h2>;
  }

  const tax = Math.round(service.price * 0.18);
  const totalPrice = service.price + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (!form.fullname || !form.mobile || !form.email || !form.address || !form.date) {
      alert("Please fill all required fields before booking.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      serviceName: service.title,
      serviceId: service.id,
      price: totalPrice,
      date: form.date,
      time: form.time,
      pro: "Assigned Professional",
      status: "Upcoming",
    };

    addBooking(newBooking);

    setPopup(true);

    setTimeout(() => {
      navigate("/bookings");
    }, 1500);
  };

  return (
    <div className="book-page">
      {popup && (
        <div className="booking-popup">
          <p>✅ Booking Confirmed Successfully!</p>
        </div>
      )}

      <div className="page-header">
        <h1>Book {service.title}</h1>
        <p>Fill your details & confirm your booking instantly...!</p>
      </div>

      <div className="booking-layout">

        <div className="booking-form-area">
          <div className="form-card">
            <h2>Customer Details</h2>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullname" value={form.fullname} placeholder="Enter your name" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" value={form.mobile} placeholder="Enter mobile number" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={form.email} placeholder="example@gmail.com" onChange={handleChange} />
            </div>
          </div>

          <div className="form-card">
            <h2>Service Address</h2>
            <textarea name="address" value={form.address} placeholder="Flat / House No, Street, Locality, Landmark" onChange={handleChange}></textarea>
          </div>

          <div className="form-card">
            <h2>Service Schedule</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Select Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Select Time Slot</label>
                <select name="time" value={form.time} onChange={handleChange}>
                  <option>9:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 1:00 PM</option>
                  <option>2:00 PM – 4:00 PM</option>
                  <option>4:00 PM – 6:00 PM</option>
                  <option>6:00 PM – 8:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h2>Any Special Instructions?</h2>
            <textarea name="instructions" value={form.instructions} placeholder="Write any special request (optional)" onChange={handleChange}></textarea>
          </div>

          {/* ✅ FIXED */}
            <button type="button" className="confirm-booking-btn" onClick={handleBooking}>
              Confirm Booking
            </button>


        </div>

        <div className="summary-box">
          <div className="sticky-summary">
            <h2>Booking Summary</h2>

            <div className="summary-service">
              <div>
                <h3>{service.title}</h3>
                <p>⭐ {service.rating} ({service.reviews} reviews)</p>
              </div>
            </div>

            <div className="price-details">
              <p><span>Base Price</span> <span>₹{service.price}</span></p>
              <p><span>Tax (18%)</span> <span>₹{tax}</span></p>
              <hr />
              <p className="total"><span>Total</span> <span>₹{totalPrice}</span></p>
            </div>

            <p className="arrival">⏳ Expected arrival in <b>{service.arrivalTime} minutes</b></p>
            <p className="safety-note">🔒 100% Safe & Secure Booking • Verified Professionals</p>
          </div>
        </div>

      </div>
    </div>
  );
}
