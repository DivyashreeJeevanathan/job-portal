import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    // Email validation regex
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Password validation regex (6+ chars, 1 number, 1 special char)
    const validatePassword = (password) =>
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { email: "", password: "" };

        if (!email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = "Enter a valid email address";
            valid = false;
        }

        if (!password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (!validatePassword(password)) {
            newErrors.password = "Password must have 6+ characters, a number, and a special character";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log("Form submitted successfully", { email, password });
            // Proceed with login request (API call)
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Motivational Quote */}
                <div className="motivation">
                    <span className="sparkle">✨</span>
                    <p>"Every great journey begins with a single step. Let's take it together."</p>
                </div>

                <h2>Welcome Back</h2>
                <p>Log in to your account</p>

                {/* Google Login Button */}
                <button className="login-btn google-btn">
                    <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" />
                    Continue with Google
                </button>

                <div className="divider">OR</div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={errors.password ? "input-error" : ""}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button type="submit" className="login-btn submit-btn">Log In</button>
                </form>

                {/* Sign Up Link */}
                <div className="login-footer">
                    <p>New here? <Link to="/signup">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
