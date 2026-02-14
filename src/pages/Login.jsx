import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import "../styles/components/Auth.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) =>
        (u.username === loginData.username ||
          u.email === loginData.username) &&
        u.password === loginData.password
    );

    if (!existingUser) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username/email or password!",
      });
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        username: existingUser.username,
        email: existingUser.email,
      })
    );
    localStorage.setItem("isLoggedIn", "true");

    window.dispatchEvent(new Event("userLoggedIn"));

    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      text: "Redirecting to Home...",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="auth-container">
      <img className="auth-background" src="../assets/backgrounds/login9.jpg" alt="" />
      <div className="auth-card">
        
        <form className="auth-form" onSubmit={onLogin}>
        <h2 className="auth-title">Welcome Back </h2>
          <div className="input-group">
            <label>Email or Username</label>
            <input
              type="text"
              required
              autoComplete="off"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              placeholder="Enter email or username"
            />
          </div>

          <div className="input-group password-field">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              placeholder="Enter password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>

          <div className="auth-forgot">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button className="auth-btn" type="submit">
            Login
          </button>

          <p className="auth-switch">
          Don’t have an account? <Link to="/register">Register</Link>
          </p>
          
        </form>

        
      </div>
    </div>
  );
}
