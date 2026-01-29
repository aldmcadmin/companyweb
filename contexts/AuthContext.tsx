
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (id: string, pw: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state lazily to avoid flicker/redirect issues on refresh
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      // Check if window is defined (safe for SSR environments, though mostly for client-side)
      if (typeof window !== 'undefined') {
        const storedAuth = localStorage.getItem('isAdminAuthenticated');
        return storedAuth === 'true';
      }
      return false;
    } catch (e) {
      console.error("Auth initialization error:", e);
      return false;
    }
  });

  const login = (id: string, pw: string) => {
    // Hardcoded credentials for demonstration
    if (id === 'dmcadmin' && pw === 'dnrehrla*1') {
      setIsAuthenticated(true);
      localStorage.setItem('isAdminAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAdminAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
