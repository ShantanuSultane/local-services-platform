import { useParams } from "react-router-dom";
import services from "../data/services.json";
import "../styles/components/BookService.css";

export default function BookService() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2 className="not-found">Service not found</h2>;
  }

  const tax = Math.round(service.price * 0.18);
  const totalPrice = service.price + tax;

  return (
    <div className="book-page">

      {/* PAGE TITLE */}
      <div className="page-header">
        <h1>Book {service.title}</h1>
        <p>Fill your details & confirm your booking instantly...!</p>
      </div>

      <div className="booking-layout">

        {/* LEFT SIDE — FORM SECTION */}
        <div className="booking-form-area">

          {/* CUSTOMER DETAILS */}
          <div className="form-card">
            <h2>Customer Details</h2>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter mobile number" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
          </div>

          {/* ADDRESS DETAILS */}
          <div className="form-card">
            <h2 className="address">Service Address</h2>
            <textarea
              rows="3"
              placeholder="Flat / House No, Street, Locality, Landmark"
            ></textarea>
          </div>

          {/* DATE & TIME SECTION */}
          <div className="form-card">
            <h2 className="schedule">Service Schedule</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Select Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Select Time Slot</label>
                <select>
                  <option>9:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 1:00 PM</option>
                  <option>2:00 PM – 4:00 PM</option>
                  <option>4:00 PM – 6:00 PM</option>
                  <option>6:00 PM – 8:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* SPECIAL INSTRUCTIONS */}
          <div className="form-card">
            <h2 className="special-instructions">Any Special Instructions?</h2>
            <textarea
              rows="2"
              placeholder="Write any special request for the professional (optional)"
            ></textarea>
          </div>

          <button className="confirm-booking">Confirm Booking</button>
        </div>

        {/* RIGHT SIDE — BOOKING SUMMARY */}
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

            <p className="arrival">
              ⏳ Expected arrival in <b>{service.arrivalTime} minutes</b>
            </p>

            <p className="safety-note">
              🔒 100% Safe & Secure Booking • Verified Professionals
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
