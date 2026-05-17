export interface User {
  id?: string;
  _id?: string;
  name: string;
  email: string;
}

export interface Task {
  id?: string;
  _id?: string;
  title: string;
  description?: string;
  completed: boolean;
  date: string;
  user?: string;
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}