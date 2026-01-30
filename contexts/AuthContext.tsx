
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '../utils/firebase';
import { Loader2 } from 'lucide-react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, pw: string) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  // Monitor Firebase Auth State
  useEffect(() => {
    // onAuthStateChanged는 브라우저 저장소(IndexedDB/LocalStorage)에 저장된 세션을 복구합니다.
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        console.log("User session restored:", user.email);
        setIsAuthenticated(true);
      } else {
        console.log("No active session");
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, pw: string): Promise<boolean> => {
    try {
      // 기본적으로 Firebase는 브라우저를 닫아도 로그인을 유지합니다 (LOCAL persistence)
      await signInWithEmailAndPassword(auth, email, pw);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // 인증 상태를 확인하는 동안 흰 화면 대신 로딩 화면 표시
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-500">
        <Loader2 className="w-10 h-10 animate-spin text-brand-blue mb-4" />
        <p className="text-sm font-medium">보안 접속 확인 중...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
