import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/components/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [successPopup, setSuccessPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await emailjs.send(
        "service_wk3298j",           // EmailJS service ID
        "template_3f4b182",          // ADMIN template for contact page
        formData,                    // All details sent to admin
        "Ee28i3cP5ZH7GItqT"          // public key
      );

      setSuccessPopup(true);

      setTimeout(() => {
        setSuccessPopup(false);
      }, 3500);

      setFormData({
        fullname: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      setError("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-wrapper">

      {/* SUCCESS POPUP */}
      {successPopup && (
        <div className="contact-popup">
          <div className="contact-popup-box">
            <h2>🎉 Message Sent!</h2>
            <p>Thank you for contacting us.</p>
            <p>Our team will get back to you shortly.</p>
          </div>
        </div>
      )}

      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>
          Not sure what service you need? Our Local Services team is always
          ready to listen and guide you with suggestions tailored to your needs.
        </p>

        <div className="contact-details">
          <div className="detail-box">
            <i className="fa-solid fa-envelope"></i>
            <span>support@localservices.com</span>
          </div>

          <div className="detail-box">
            <i className="fa-solid fa-phone"></i>
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <h2>We’d love to hear from you!</h2>
        <p className="subtext">Let’s get in touch</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="two-col">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Company (Optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="two-col">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-box">
                <select>
                  <option>IN</option>
                  <option>US</option>
                  <option>UK</option>
                  <option>Aus</option>
                  <option>Afg</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
