import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    switch (status) {
      case 401:
        console.error("Unauthorized");

        window.location.href = "/login";
        break;

      case 403:
        console.error("Access Denied");
        break;

      case 404:
        console.error("Resource Not Found");
        break;

      case 500:
        console.error("Internal Server Error");
        break;

      default:
        if (!error.response) {
          console.error("Network Error");
        }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
