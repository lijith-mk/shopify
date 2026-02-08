import {apiClient} from './client';
import {API_ENDPOINTS} from '../../constants';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    phone?: string;
  };
}

export const authService = {
  // Login
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.LOGIN, data);
  },

  // Register
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.REGISTER, data);
  },

  // Logout
  logout: async (): Promise<void> => {
    return apiClient.post<void>(API_ENDPOINTS.LOGOUT);
  },

  // Refresh token
  refreshToken: async (): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.REFRESH_TOKEN);
  },
};
