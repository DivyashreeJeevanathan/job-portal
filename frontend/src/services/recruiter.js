import axios from "axios";

const API_URL = "http://localhost:5000/api/recruiter";

export const registerRecruiter = async (data) => {
    return await axios.post(`${API_URL}/register`, data);
};

export const loginRecruiter = async (data) => {
    return await axios.post(`${API_URL}/login`, data);
};
