import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.headers["Content-Type"] = "application/json";
axios.interceptors.request.use(
  async (conf) => {
    return conf;
  },
  (error) => {
    return Promise.reject(error);
  }
);
