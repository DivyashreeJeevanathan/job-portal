import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import RecruiterDashboard from "./pages/recruiter/Dashboard";
import CandidateBrowseJobs from "./pages/candidate/BrowseJobs";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/candidate/browse-jobs" element={<CandidateBrowseJobs />} />
        </Routes>
    </Router>
);
