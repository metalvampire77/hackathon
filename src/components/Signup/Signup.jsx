import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // Save registration data to localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Redirect to login page
    window.location.href = "/home"; // This will redirect the user to the login page
  };

  return (
    <div className="signupMain"><div className="register-container">
    <h1>Register yourself</h1>
    <h1>Hidden Voices</h1>
    <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?{" "}
      <Link to="/login" className="register-link">
        Log In
      </Link>
    </p>
  </div></div>
    
  );
};

export default Signup;
