// import mongoose from "mongoose";
const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

const Candidate = mongoose.model("Candidate", candidateSchema);
export default Candidate;