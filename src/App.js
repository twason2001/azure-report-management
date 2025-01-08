import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import { Container } from 'react-bootstrap';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login handler to simulate authentication (you can replace this with actual API calls)
  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login
  };

  // Logout handler to reset login state
  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
  };

  return (
    <Router>
      <Container>
        <Routes>
          {/* Public route for login */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protected route for dashboard */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" /> // Redirect to login if not logged in
              )
            }
          />

          {/* Redirect to dashboard if user is logged in and tries to access root */}
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
