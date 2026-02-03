import React, { useState } from "react";
import "../styles/components/Provider.css";

export default function Provider() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceCategory: "",
    experience: "",
    address: "",
    city: "",
    price: "",
    description: "",
    photo: null,
    idProof: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
    console.log(form);
  };

  return (
    <div className="provider-page">

      {/* HERO SECTION */}
      <div className="provider-hero">
        <h1>Become a Trusted Service Professional</h1>
        <p>
          Join thousands of experts earning more by offering services through our platform...!
        </p>
      </div>

      {/* WHY REGISTER */}
      <section className="provider-info-section">
        <h2>Why Register as a Provider?</h2>
        <div className="provider-info-grid">
          <div className="provider-info-card">
            <h3>Grow Your Business</h3>
            <p>
              Get access to thousands of customers searching for services every day.
            </p>
          </div>

          <div className="provider-info-card">
            <h3>Guaranteed Payments</h3>
            <p>
              Transparent pricing and secure payments directly to your bank account.
            </p>
          </div>

          <div className="provider-info-card">
            <h3>Flexible Work</h3>
            <p>
              Choose when and where you want to work. Total freedom.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <div className="provider-container">
        <div className="provider-card">
          <h2 className="provider-title">Service Provider Registration</h2>
          <p className="provider-subtitle">Fill the form to complete your onboarding</p>

          <form className="provider-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Service Category</label>
                <input
                  type="text"
                  name="serviceCategory"
                  placeholder="e.g., Electrician, Plumber, Cleaner"
                  value={form.serviceCategory}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Experience (Years)</label>
                <input
                  type="number"
                  name="experience"
                  placeholder="e.g., 4"
                  value={form.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Complete Address</label>
              <input
                type="text"
                name="address"
                placeholder="House No, Street, Area"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Base Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="e.g., 499"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Short Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Describe your service"
                  value={form.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* PHOTO UPLOAD */}
            <div className="input-group">
              <label>Upload Profile Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            {/* ID PROOF UPLOAD */}
            <div className="input-group">
              <label>Upload ID Proof (Aadhar / PAN)</label>
              <input
                type="file"
                name="idProof"
                accept="image/*,application/pdf"
                onChange={handleChange}
                required
              />
            </div>

            <button className="provider-btn" type="submit">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
