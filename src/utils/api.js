import axios from "axios";

/* ─────────────────────────────
   1. Axios instance
   ───────────────────────────── */
const baseURL =
  "https://blog-project-backend-geeks-production.up.railway.app/api";

const api = axios.create({ baseURL });

/* ─────────────────────────────
   2. Auth token helpers
   ───────────────────────────── */
let authToken = localStorage.getItem("accessToken") || null;

export const setAuthToken = (token) => {
  authToken = token;
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const clearAuthToken = () => setAuthToken(null);

/* ─────────────────────────────
   3. Request / response interceptors
   ───────────────────────────── */
api.interceptors.request.use((config) => {
  if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // Token expired / invalid → wipe it & (optional) redirect to login
      clearAuthToken();
      // window.location.assign("/login"); // enable if you want auto‑redirect
    }
    return Promise.reject(err);
  }
);

/* ─────────────────────────────
   4. API helpers
   ───────────────────────────── */
// Blogs
export const getBlogs    = ()           => api.get("/blogs");                 // public
export const createBlog  = (body)       => api.post("/blogs/add-blog", body);          // protected
export const updateBlog  = (id, body)   => api.put(`/blogs/${id}`, body);     // protected
export const deleteBlog  = (id)         => api.delete(`/blogs/${id}`);        // protected

// Auth
export const login       = (creds)      => api.post("/auth/login", creds);
export const register    = (creds)      => api.post("/auth/register", creds);

// Cloudinary upload (protected in this example)
export const uploadImage = (file) => {
  const form = new FormData();
  form.append("image", file);
  return api.post("/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default api;