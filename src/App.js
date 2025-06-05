import React from "react";
import Landing from "./components/Landing";
import LoginScreen from "./components/LoginScreen";
import Profile from "./components/Profile";
import SignupScreen from "./components/SignupScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/CreateNewAccount" element={<SignupScreen />} />
          <Route path="/AccountSettingPage" element={<Profile />} />
          <Route path="/LoginPage" element={<LoginScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
