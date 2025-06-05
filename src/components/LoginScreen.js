import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (savedUser && savedUser.email === email) {
      navigate("/AccountSettingPage", {
        state: { name: savedUser.name, email: savedUser.email },
      });
    } else {
      alert("User not found or wrong email.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form onSubmit={handlerSubmit}>
          <h2 className="login-header">Signin to your PopX account</h2>
          <p className="login-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <label className="label" htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />

          <label className="label" htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            type="password"
            required
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
