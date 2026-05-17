import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://todolist-5dm7.onrender.com/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@TodoApp:token');
  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});