import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://athletic-club-server.vercel.app", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
