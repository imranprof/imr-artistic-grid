import axios from "./axios";

export const login = async (formData) => {
  try {
    const res = await axios.post("/api/login/", formData);

    localStorage.setItem("hasSession", "true");

    return res.data;
  } catch (error) {
    // handle known errors from backend
    if (error.response) {
      if (error.response.status === 401) {
        throw new Error("Invalid username or password");
      }
      throw new Error(error.response.data?.detail || "Login failed");
    } else if (error.request) {
      // no response (network error)
      throw new Error("Network error. Please try again.");
    } else {
      throw new Error("Unexpected error occurred.");
    }
  }
};

export const signup = async (formData) => {
  const rest = await axios.post("/api/signup/", formData);
  return rest.data;
};

export const logout = async () => {
  const res = await axios.post("/api/logout/");
  localStorage.removeItem("hasSession");
  return res.data;
};

export const getCurrentUser = async () => {
  try {
    const res = await axios.get("/api/user/me");
    return res.data;
  } catch (error) {
    throw error; // only throw unexpected errors
  }
};

export const createPost = async (formData) => {
  const rest = await axios.post("/api/posts/", formData);
  alert("Post created successfully!");
  return rest.data;
};
