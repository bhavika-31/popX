import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting...", name, email); 
    localStorage.setItem("userData", JSON.stringify({ name, email }));
    navigate("/AccountSettingPage");
  };

  return (
    <div className="createAccount_wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="heading">
            Create Your <br /> PopX account
          </h1>

          <div className="custom-input-group">
            <label>
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              placeholder="Enter Full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="custom-input-group">
            <label>
              Phone number <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter Phone number" />
          </div>

          <div className="custom-input-group">
            <label>
              Email address <span className="required">*</span>
            </label>
            <input
              type="text"
              required
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="custom-input-group">
            <label>
              Password <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter password" />
          </div>

          <div className="custom-input-group">
            <label>
              Company Name <span className="required">*</span>
            </label>
            <input type="text" placeholder="Enter comapny name" />
          </div>

          <div className="custom-radio-group">
            <p>
              Are you an agency? <span className="required">*</span>
            </p>
            <label>
              <input type="radio" name="agency" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" /> No
            </label>
          </div>

          <button type="submit" className="Create_btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
