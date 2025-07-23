// src/utils/axios.js or src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog-project-backend-geeks-production.up.railway.app/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;