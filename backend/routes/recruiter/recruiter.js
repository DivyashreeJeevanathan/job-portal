const express = require("express");

const { getRecruiterDashboard } = require("../../controllers/recruiter/recruiter.js");
const router = express.Router();

router.get("/dashboard", getRecruiterDashboard);

module.exports = router;