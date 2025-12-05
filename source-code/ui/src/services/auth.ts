import apiClient from "./api";

interface UserData {
  username: string;
  password: string;
}

interface Credentials {
  username: string;
  password: string;
}

export const authService = {
  signup: async (userData: UserData): Promise<any> => {
    try {
      const response = await apiClient.post("/api/auth/register/", userData);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error.message;
      }
      throw "An unknown error occurred during signup.";
    }
  },

  login: async (credentials: Credentials): Promise<any> => {
    try {
      const response = await apiClient.post("/api/auth/login/", credentials);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error.message;
      }
      throw "An unknown error occurred during login.";
    }
  },

  logout: async (): Promise<any> => {
    try {
      const response = await apiClient.post("/api/auth/logout/");
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error.message;
      }
      throw "An unknown error occurred during logout.";
    }
  },

  getCurrentUser: async (): Promise<any | null> => {
    try {
      const response = await apiClient.get("/api/auth/user/");
      return response.data;
    } catch (error: unknown) {
      return null;
    }
  },
};
