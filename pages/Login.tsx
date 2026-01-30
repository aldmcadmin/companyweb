
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Lock, ArrowLeft, Loader2, Mail } from 'lucide-react';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default to admin dashboard or the page they tried to access
  const from = location.state?.from?.pathname || '/admin';

  // If already authenticated, redirect to admin immediately
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Strict Email Validation to prevent legacy IDs (like "dmcadmin")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('올바른 이메일 형식을 입력해주세요. (예: admin@aldmc.co.kr)');
      return;
    }

    setIsLoading(true);

    const success = await login(email, pw);
    
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative z-[100]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-[#071D49] p-8 text-center relative">
          <button 
            onClick={() => navigate('/')} 
            className="absolute top-6 left-6 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex justify-center mb-4">
             <div className="bg-white/10 p-4 rounded-full">
               <Lock className="w-8 h-8 text-white" />
             </div>
          </div>
          <h2 className="text-2xl font-bold text-white">관리자 로그인</h2>
          <p className="text-blue-200 text-sm mt-2">Firebase 계정으로 접속합니다.</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">이메일 계정</label>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="admin@aldmc.co.kr"
                  required
                />
                <Mail className="w-5 h-5 text-gray-400 absolute top-1/2 left-4 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">비밀번호</label>
              <input 
                type="password" 
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm font-medium text-center bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              fullWidth 
              className="rounded-xl h-14 font-bold text-lg shadow-lg shadow-blue-900/10"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                   <Loader2 className="w-5 h-5 animate-spin" /> 접속 중...
                </span>
              ) : (
                '로그인'
              )}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
             <Logo className="h-6 mx-auto opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
