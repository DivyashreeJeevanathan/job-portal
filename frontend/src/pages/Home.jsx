import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <div className="app-container">
            {/* Header */}
            <header className="header">
                <h2 className="logo">Job Portal</h2>
                <nav className="header-nav">
                    <Link to="/login" className="sign-in">Sign in</Link>
                </nav>
            </header>

            {/* Main Content */}
            <div className="content">
                <div className="left-section">
                    <h1>Welcome to your <br /> professional community</h1>
                    <div className="login-buttons">
                        <button className="google-btn">
                            <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" />
                            Continue with Google
                        </button>
                        <button className="email-btn">
                            <img src="https://img.icons8.com/ios-filled/16/email.png" alt="Email" />
                            Sign in with email
                        </button>
                    </div>
                </div>
                <div className="right-section">
                    <img src="image1.png" alt="Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Home;
