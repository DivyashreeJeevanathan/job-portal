import { useState } from "react";
import "./Signup.css"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup with:", { email, password, remember });
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Step into success—one click away! 🚀</h1>
      <div className="signup-card">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            required
          />
          <div className="signup-checkbox">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label>Remember me</label>
          </div>
          <button type="submit" className="signup-btn">
            Agree & Join
          </button>
        </form>

        <div className="or-divider">or</div>

        <button className="alt-signup-btn">
          <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
          Continue with Google
        </button>
        <button className="alt-signup-btn">
          <img src="https://www.svgrepo.com/show/354202/microsoft-icon.svg" alt="Microsoft" />
          Continue with Microsoft
        </button>

        <p className="signin-link">
          Already on Job Portal? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
}
