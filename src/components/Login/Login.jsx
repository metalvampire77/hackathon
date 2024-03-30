import React, { useState } from "react";
import './Signup.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="register-container">
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
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span className="register-link" onClick={() => {}}>
          Signup
        </span>
      </p>
    </div>
  );
};

export default Login;