const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const recruiterRoutes = require("./routes/recruiter/recruiter.js")
const candidateRoutes = require("./routes/candidate/candidate.js")

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/recruiter", recruiterRoutes);
app.use("/api/candidate", candidateRoutes);

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
