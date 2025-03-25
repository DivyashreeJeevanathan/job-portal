// import mongoose from "mongoose";
const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: String,
    jobsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
export default Recruiter;