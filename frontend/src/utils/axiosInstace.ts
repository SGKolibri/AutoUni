import axios, { AxiosError } from "axios";

// ⚠️ useNavigate cannot be used outside React components/hooks
// So we must handle redirection differently in Axios interceptors

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      // You can't use `useNavigate()` here.
      // Instead, emit an event or redirect using `window.location`:
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
