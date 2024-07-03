import axios from "axios";

const access_token = localStorage.getItem("access_token");
const apiClient = axios.create({
  baseURL: "https://taskmanagebackend-l0jp.onrender.com/api",
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + access_token,
  },
});

export default apiClient;
