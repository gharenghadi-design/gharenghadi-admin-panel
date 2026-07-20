import { createContext, useContext, useState, useCallback } from "react";

interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>({
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "administrator",
  });

  const login = useCallback(async (email: string, _password: string) => {
    if (email) {
      setUser({ id: 1, name: "Admin User", email, role: "administrator" });
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

// token refresh

// improvement 18-2

// improvement 20-5
