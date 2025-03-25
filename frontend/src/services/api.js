import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getCandidateJobs = () => API.get("/candidate/browse-jobs");
export const getRecruiterDashboard = () => API.get("/recruiter/dashboard");
