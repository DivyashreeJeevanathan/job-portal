import React, { useEffect, useState } from "react";
import axios from "axios";

const CandidateBrowseJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/candidate/browse-jobs")
            .then(response => setJobs(response.data.jobs))
            .catch(error => console.error("Error fetching jobs:", error));
    }, []);

    return (
        <div>
            <h2>Browse Jobs</h2>
            <ul>
                {jobs.map((job, index) => <li key={index}>{job}</li>)}
            </ul>
        </div>
    );
};

export default CandidateBrowseJobs;
