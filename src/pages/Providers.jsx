import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/components/Provider.css";

export default function Provider() {
  const [error, setError] = useState("");
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

  const [successPopup, setSuccessPopup] = useState(false);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {  
      const providerData = {
        id: Date.now(),
        name: form.name,
        phone: form.phone,
        email: form.email,
        serviceCategory: form.serviceCategory,
        experience: form.experience,
        address: form.address,
        city: form.city,
        price: form.price,
        description: form.description,
        createdAt: new Date().toISOString()
      };
  
      const existing = JSON.parse(localStorage.getItem("providers")) || [];
      existing.push(providerData);
      localStorage.setItem("providers", JSON.stringify(existing));
  
      await emailjs.send(
        "service_wlpkpfv",
        "template_zjpttte",
        providerData,
        "nmstShpF3IV9Fd3fa"
      );
  
      await emailjs.send(
        "service_wlpkpfv",
        "template_3bom8bh",
        {
          name: form.name,
          email: form.email,
        },
        "nmstShpF3IV9Fd3fa"
      );
  
      setSuccessPopup(true);
  
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
  
    } catch (err) {
      console.error(err);
      setError("❌ Submission failed! Check EmailJS ID / Network.");
    }
  };
  
  return (
    <div className="provider-page">

      {/* SUCCESS POPUP */}
      {successPopup && (
        <div className="provider-popup">
          <div className="provider-popup-box">
            <h2>🎉 Registration Submitted!</h2>
            <p>Your details have been successfully received.</p>
            <p>Our team will contact you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* HERO */}
      <div className="provider-hero">
        <h1>Become a Trusted Service Professional</h1>
        <p>Join thousands of experts earning more by offering services through our platform!</p>
      </div>

      {/* WHY REGISTER */}
      <section className="provider-info-section">
        <h2>Why Register as a Provider?</h2>

        <div className="provider-info-grid">
          <div className="provider-info-card">
            <h3>Grow Your Business</h3>
            <p>Get access to thousands of customers searching for services every day.</p>
          </div>

          <div className="provider-info-card">
            <h3>Guaranteed Payments</h3>
            <p>Secure and timely payments directly to your bank account.</p>
          </div>

          <div className="provider-info-card">
            <h3>Flexible Work</h3>
            <p>Choose your working hours and locations. Total freedom.</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <div className="provider-container">
        <div className="provider-card">

          <h2 className="provider-title">Service Provider Registration</h2>
          <p className="provider-subtitle">Fill the form to complete your onboarding</p>

          <form className="provider-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Service Category</label>
                <input type="text" name="serviceCategory" value={form.serviceCategory} onChange={handleChange} required />
              </div>

              <div className="input-group">
                <label>Experience (Years)</label>
                <input type="number" name="experience" value={form.experience} onChange={handleChange} required />
              </div>
            </div>

            <div className="input-group">
              <label>Complete Address</label>
              <input type="text" name="address" value={form.address} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>City</label>
              <input type="text" name="city" value={form.city} onChange={handleChange} required />
            </div>

            <div className="row">
              <div className="input-group">
                <label>Base Price (₹)</label>
                <input type="number" name="price" value={form.price} onChange={handleChange} required />
              </div>

              <div className="input-group">
                <label>Short Description</label>
                <input type="text" name="description" value={form.description} onChange={handleChange} required />
              </div>
            </div>

            {/* FILE INPUTS */}
            <div className="input-group">
              <label>Upload Profile Photo</label>
              <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Upload ID Proof (Aadhar / PAN)</label>
              <input type="file" name="idProof" accept="image/*,application/pdf" onChange={handleChange} required />
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
