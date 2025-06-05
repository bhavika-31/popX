import React from "react";
import { FaCamera } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const userName = localStorage.getItem("userName") || "Mary Doe";
  const userEmail = localStorage.getItem("userEmail") || "Mary@Gmail.com";

  return (
    <div className="account-wrapper">
      <div className="account-container">
        <h2 className="heading">Account Settings</h2>

        <div className="profile-section">
          <div className="profile-pic-wrapper">
            <img src="https://i.pravatar.cc/100" alt="profile" />
            <div className="camera-icon">
              <FaCamera size={10} />
            </div>
          </div>
          <div className="user-details">
            <div className="user-name">{userName}</div>
            <div className="user-email">{userEmail}</div>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
