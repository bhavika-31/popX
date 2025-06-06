import React from "react";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userData")) || {
    name: "Marry Doe",
    email: "marry@gmail.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("userData"); // Clear user info
    navigate("/"); // Redirect to main/login page
  };

  return (
    <div className="account-wrapper">
      <div className="account-container">
        <h2 className="account-heading">Account Settings</h2>

        <div className="profile-section">
          <div className="profile-pic-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt="User"
              className="profile-pic"
            />
            <div className="camera-icon">
              <FaCamera size={12} />
            </div>
          </div>

          <div className="user-info">
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
          </div>
        </div>

        <div className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>

        <div className="separator"></div>

        {/* 🔘 Logout Button */}
        <div
          className="logout-wrapper"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="separator" style={{ marginTop: "60vh" }}></div>
      </div>
    </div>
  );
};

export default Profile;
