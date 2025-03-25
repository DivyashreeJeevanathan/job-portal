import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            <h1>Job Portal</h1>
            <nav>
                <Link to="/recruiter/dashboard">Recruiter Dashboard</Link> | 
                <Link to="/candidate/browse-jobs">Browse Jobs</Link>
            </nav>
        </div>
    );
};

export default App;
