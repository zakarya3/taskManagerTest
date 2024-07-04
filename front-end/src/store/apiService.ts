import axios from "axios";

const access_token = localStorage.getItem("access_token");
const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + access_token,
  },
});

export default apiClient;
