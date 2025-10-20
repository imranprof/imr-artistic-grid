import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // for sending cookies with requests
});

// ✅ Intercept 401 errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Try to refresh access token
        await axiosInstance.post("/api/token/refresh/");
        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
        localStorage.removeItem("hasSession");
        window.location.href = "/login"; // optional: redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
