import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/Home"; // Create a separate Home page
import "./App.css"; // Import styles
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        const fetchUser = async () => {
          const token = localStorage.getItem("token"); // Check if token exists
    
          if (!token) {
            console.log("⚠️ No token found, skipping user fetch.");
            return; // Don't call API if no user is logged in
          }
    
          try {
            const response = await fetch(`${API_URL}/api/auth/user`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Ensure correct auth header
              },
              credentials: "include",
            });
    
            if (response.ok) {
              const data = await response.json();
              console.log("✅ User Data:", data);
            } else {
              console.error("❌ Failed to fetch user:", response.status);
            }
          } catch (error) {
            console.error("❌ Error fetching user:", error);
          }
        };
    
        fetchUser();
      }, []);
    
    return (
        <div className="app-container">
            <Routes>
                {/* Define all routes */}
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
