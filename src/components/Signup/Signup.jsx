import React, { useState } from "react";
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="register-container">
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
        <span className="register-link" onClick={() => {}}>
          Log In
        </span>
      </p>
    </div>
  );
};

export default Signup;