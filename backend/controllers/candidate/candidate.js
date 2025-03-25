const getCandidateJobs = (req, res) => {
    res.json({ jobs: ["Software Engineer", "Data Scientist", "UX Designer"] });
};

module.exports = { getCandidateJobs };  // ✅ Use CommonJS export
