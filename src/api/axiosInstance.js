import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://afsc.in/afscapi/public/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
