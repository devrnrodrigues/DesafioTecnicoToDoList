export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface ValidationErrorDetail {
  campo: string;
  mensagem: string;
}

export interface LoginResponse {
  sucesso: boolean;
  mensagem: string;
  token: string;
  usuario: User;
}

export interface RegisterResponse {
  sucesso: boolean;
  mensagem: string;
}