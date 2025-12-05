import { createContext, useState, useEffect, ReactNode } from "react";
import { authService } from "../services/auth";

interface User {
  username: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
        if (userData) {
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
