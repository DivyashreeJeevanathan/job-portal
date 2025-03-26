const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const connectDB = require("./config/db.js");
const recruiterRoutes = require("./routes/recruiter/recruiter.js");
const candidateRoutes = require("./routes/candidate/candidate.js");
const User = require("./models/User");
require("./config/passport.js"); // Google OAuth Strategy

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ Improved CORS setup for frontend authentication
app.use(
    cors({
      origin: "http://localhost:5173", // Frontend URL
      credentials: true, // Allow cookies & sessions
      methods: "GET,POST,PUT,DELETE",
      allowedHeaders: "Content-Type,Authorization",
    })
  );
  

// ✅ Secure Session Setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "lax", // Helps with CORS issues
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// ✅ Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use("/api/recruiter", recruiterRoutes);
app.use("/api/candidate", candidateRoutes);

app.get("/", (req, res) => res.send("API is running..."));

app.post("/api/signup", async (req, res) => {
    console.log("📩 Received signup request:", req.body); // Debugging step
  
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      console.log("❌ Missing fields:", req.body);
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      let user = await User.findOne({ email });
      if (user) {
        console.log("⚠️ User already exists:", email);
        return res.status(400).json({ message: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      user = new User({ email, password: hashedPassword, role });
      await user.save();
  
      console.log("✅ User created successfully:", user);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("❌ Signup Error:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  });
      

// ✅ Google OAuth Login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log("Google authentication successful:", req.user);
    res.redirect("http://localhost:5173/dashboard"); // Adjust based on frontend
  }
);

// ✅ Check if user is authenticated
app.get("/api/auth/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

// ✅ Logout Route (Fixed)
app.get("/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout Error:", err);
      return res.status(500).json({ message: "Logout failed" });
    }
    res.send({ message: "Logged out successfully" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
