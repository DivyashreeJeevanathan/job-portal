import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Signup from "./pages/auth/Signup";  
import RecruiterDashboard from "./pages/recruiter/Dashboard"; 
import CandidateBrowseJobs from "./pages/candidate/BrowseJobs"; 

const App = () => {
    const location = useLocation();  // Get the current route path

    return (
        <div>
            <h1>Job Portal</h1>
            
            {/* Hide Navbar on the Signup Page */}
            {location.pathname !== "/signup" && (
                <nav>
                    <Link to="/recruiter/dashboard">Recruiter Dashboard</Link> | 
                    <Link to="/candidate/browse-jobs">Browse Jobs</Link> | 
                    <Link to="/signup">Sign Up</Link>
                </nav>
            )}

            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
                <Route path="/candidate/browse-jobs" element={<CandidateBrowseJobs />} />
            </Routes>
        </div>
    );
};

export default App;
