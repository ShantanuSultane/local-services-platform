import React, { useState } from "react";
import "../styles/components/Register.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

emailjs.init("Ee28i3cP5ZH7GItqT");

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !form.fullname ||
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Field",
        text: "Please fill all the fields.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    if (form.password !== form.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match!",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === form.email)) {
      Swal.fire({
        icon: "error",
        title: "Email Already Exists",
        text: "Try logging in or use another email.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    const newUser = {
      fullname: form.fullname.trim(),
      email: form.email.trim(),
      username: form.username.trim(),
      password: form.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    try {
      await emailjs.send(
        "service_wk3298j",
        "template_3f4b182",
        {
          user_name: form.fullname,
          user_email: form.email,
          email: form.email,
        },
        "Ee28i3cP5ZH7GItqT"
      );
    } catch (err) {
      console.log("Email Error:", err);
    }

    Swal.fire({
      icon: "success",
      title: "Welcome!",
      text: "Your account has been created successfully.",
      timer: 2000,
      showConfirmButton: false,
    });

    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="reg-wrapper">
      <div className="reg-card">

        <div className="reg-image">
        <h1 className="card-main-title">Sign Up</h1>

        <div className="reg-bottom-text">
        <h2 className="card-second-title">Create Your Account</h2>
        <p>Join the premium home services experience.</p>
      </div>
        </div>

        <div className="reg-content">
          {/* Anti-Autofill Hidden Fields */}
          <input type="text" name="fakeuser" autoComplete="off" style={{display:"none"}} />
          <input type="password" name="fakepass" autoComplete="new-password" style={{display:"none"}} />

          <form onSubmit={handleRegister} className="reg-form">

            <div className="reg-field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                // autoComplete="off"
                required
              />
            </div>

            <div className="reg-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                // autoComplete="off"
                required
              />
            </div>

            <div className="reg-field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                // autoComplete="off"
                required
              />
            </div>

            <div className="reg-field password-field">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <span
                className="toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>

            <div className="reg-field">
              <label>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            <button className="reg-btn">Create Account</button>

            <p className="switch">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
