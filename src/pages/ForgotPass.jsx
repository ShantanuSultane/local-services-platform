import React, { useState } from "react";
import "../styles/components/ForgotPass.css";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const sendResetLink = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (!existingUser) {
      alert("Email not registered!");
      return;
    }

    const token = crypto.randomUUID();
    const expiry = Date.now() + 10 * 60 * 1000;

    localStorage.setItem(
      "resetTokenData",
      JSON.stringify({ token, email, expiry })
    );

    const resetLink = `${window.location.origin}/reset-password?token=${token}`;

    emailjs.send(
      "service_wk3298j",
      "template_m5tbpo4",
      {
        email: email,
        link: resetLink,
      },
      "Ee28i3cP5ZH7GItqT"
    );

    alert("Password reset link sent!");
    navigate("/login");
  };

  return (
    <div className="auth-container1">
      {/* background overlay */}
      <img
        className="auth-background1"
        src="/assets/backgrounds/login.png"
        alt="bg"
      />

      <div className="auth-card1">
        <form className="auth-form1" onSubmit={sendResetLink}>
          <h2 className="auth-title1">Forgot Password</h2>

          <div className="input-group1">
            <label>Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="auth-btn1">Send Reset Link</button>

          <p
            className="auth-switch1"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
}
