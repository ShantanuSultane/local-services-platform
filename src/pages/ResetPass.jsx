import React, { useState, useEffect } from "react";
import "../styles/components/ResetPass.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [validToken, setValidToken] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      alert("Invalid password reset link.");
      navigate("/forgot-password");
      return;
    }

    const data = JSON.parse(localStorage.getItem("resetTokenData"));

    if (!data || data.token !== token) {
      alert("Invalid or expired reset link.");
      navigate("/forgot-password");
      return;
    }

    if (Date.now() > data.expiry) {
      alert("Reset link expired. Please request a new one.");
      localStorage.removeItem("resetTokenData");
      navigate("/forgot-password");
      return;
    }

    setEmail(data.email);
    setValidToken(true);
  }, [navigate]);

  const handleReset = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    // Update password in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let updatedUsers = users.map((user) =>
      user.email === email ? { ...user, password } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.removeItem("resetTokenData");

    alert("Password reset successfully!");
    navigate("/login");
  };

  if (!validToken) return null;

  return (
    <div className="auth-container2">
      <div className="auth-card2">
        <h2 className="auth-title2">Create New Password</h2>

        <form className="auth-form2" onSubmit={handleReset}>
          <div className="input-group2">
            <label>New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>

          <div className="input-group2">
            <label>Confirm Password</label>
            <input
              type="password"
              required
              placeholder="Re-enter password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>

          <button className="auth-btn2">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
