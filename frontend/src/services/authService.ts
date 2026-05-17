import { api } from './api';
import type { LoginResponse, RegisterResponse } from '../types/auth';

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', { email, password });
    return response.data;
  },

  async register(name: string, email: string, password: string): Promise<RegisterResponse> {
    const response = await api.post<RegisterResponse>('/auth/register', { name, email, password });
    return response.data;
  }
};