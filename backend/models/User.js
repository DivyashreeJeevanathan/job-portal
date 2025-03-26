const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for OAuth users
  googleId: { type: String, unique: true, sparse: true }, // Unique & sparse for Google users
  name: { type: String },
  role: { type: String, enum: ["recruiter", "candidate"], required: true } // Store user role
});

module.exports = mongoose.model("User", UserSchema);
