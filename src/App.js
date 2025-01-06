import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import UserManagement from "./usermanagement"; // Assuming you have a UserManagement component

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  const navigateToSignup = () => setCurrentPage("signup");
  const navigateToLogin = () => setCurrentPage("login");

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage navigateToSignup={navigateToSignup} />}
        />
        <Route
          path="/signup"
          element={<SignupPage navigateToLogin={navigateToLogin} />}
        />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route
          path="/"
          element={<LoginPage navigateToSignup={navigateToSignup} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
