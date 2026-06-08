const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5173/";

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE}api/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const setToken = (token) => {
  localStorage.setItem("restaurant_token", token);
};

export const getToken = () => {
  return localStorage.getItem("restaurant_token");
};

export const clearToken = () => {
  localStorage.removeItem("restaurant_token");
};

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});
