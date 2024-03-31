import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if entered credentials match stored credentials
    if (email === storedEmail && password === storedPassword) {
      // If credentials are correct, redirect to /home
      window.location.href = "/home";
    } else {
      // If credentials are incorrect, show an alert
      alert("Invalid login details. Please try again.");
    }
  };

  return (
    <div className="loginMain"><div className="register-container">
    <h1>login</h1>
    <h1>Hidden Voices</h1>
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
    <p>
      Don't have an account?{" "}
      <Link to="/" className="register-link">
        Signup
      </Link>
    </p>
  </div></div>
    
  );
};

export default (Login);
