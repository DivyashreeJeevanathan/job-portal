import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/Home"; // Create a separate Home page
import "./App.css"; // Import styles

const App = () => {
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
