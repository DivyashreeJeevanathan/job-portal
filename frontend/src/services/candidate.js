import axios from "axios";

const API_URL = "http://localhost:5000/api/candidate";

export const registerCandidate = async (data) => {
    return await axios.post(`${API_URL}/register`, data);
};

export const loginCandidate = async (data) => {
    return await axios.post(`${API_URL}/login`, data);
};
