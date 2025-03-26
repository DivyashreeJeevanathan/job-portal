import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("recruiter"); // Default role
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

const handleSignup = async () => {
  try {
    console.log("📤 Sending Data to Backend:", { email, password, role });

    const response = await fetch(`${API_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Only needed if using cookies for authentication
      body: JSON.stringify({ email, password, role }), // Ensure this matches backend schema
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Signup Successful:", data);
    } else {
      console.error("❌ Signup Failed:", data.message || "Unknown error");
    }
  } catch (error) {
    console.error("❌ Error Signing Up:", error);
  }
};

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="signup-container">
      <div><p className="signup-text">Step into success—one click away! 🚀</p></div>
      <div className="signup-card">
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            required
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>

          <div className="role-label">
            Choose your role:
          </div>

          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={role === "recruiter"}
                onChange={() => setRole("recruiter")}
              />
              Recruiter
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="candidate"
                checked={role === "candidate"}
                onChange={() => setRole("candidate")}
              />
              Candidate
            </label>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="or-divider">or</div>

        <button className="alt-signup-btn" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
          Continue with Google
        </button>

        <p className="signin-link">
          Already on Job Portal? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}
