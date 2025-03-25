import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/recruiter/dashboard">Recruiter Dashboard</Link>
            <Link to="/candidate/browse-jobs">Browse Jobs</Link>
        </nav>
    );
};

export default Navbar;
