const express = require("express");
const { getCandidateJobs } = require("../../controllers/candidate/candidate.js");

const router = express.Router();

router.get("/browse-jobs", getCandidateJobs);

module.exports = router;  // ✅ Use CommonJS export
