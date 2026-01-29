
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post, SiteConfig, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface SiteContextType {
  config: SiteConfig;
  posts: Post[];
  language: Language;
  t: typeof TRANSLATIONS['KOR'];
  setLanguage: (lang: Language) => void;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  addPost: (post: Omit<Post, 'id' | 'date' | 'views'>) => void;
  deletePost: (id: string) => void;
}

const DEFAULT_CONFIG: SiteConfig = {
  siteName: '대우경금속',
  siteDescription: '차별화된 기술력과 서비스로 알루미늄 산업을 선도하겠습니다.',
  primaryColor: '#071D49',
  borderRadius: 'rounded-full', // Default to Toss/Apple style
  seoKeywords: '알루미늄, 압출, 경량소재, 자동차부품',
  contactEmail: 'info@aldmc.co.kr',
  logoUrl: null
};

const DEFAULT_POSTS: Post[] = [
  { id: '1', title: '2024년 신년사', author: '관리자', category: '공지사항', date: '2024-01-02', status: 'Published', views: 1250 },
  { id: '2', title: '창녕공장 신규 설비 도입 안내', author: '운영팀', category: '뉴스', date: '2024-02-15', status: 'Published', views: 890 },
  { id: '3', title: 'IATF 16949 인증 갱신 완료', author: '품질팀', category: '인증', date: '2024-03-10', status: 'Published', views: 540 },
  { id: '4', title: '하계 휴가 기간 공지', author: '인사팀', category: '공지사항', date: '2024-06-20', status: 'Draft', views: 0 },
];

const SiteContext = createContext<SiteContextType | undefined>(undefined);

// Helper to convert hex to rgb string "r g b"
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '7 29 73'; // fallback
};

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or defaults
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('siteConfig');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('sitePosts');
    return saved ? JSON.parse(saved) : DEFAULT_POSTS;
  });

  const [language, setLanguage] = useState<Language>('KOR');

  // Update CSS Variable for dynamic coloring
  useEffect(() => {
    const rgb = hexToRgb(config.primaryColor);
    document.documentElement.style.setProperty('--brand-blue', rgb);
    
    // Update global border radius variable if needed, but currently passed via prop/class
    // We could use a CSS variable for radius too, but class mapping is handled in components.
    
    document.title = `${config.siteName} | ${language === 'KOR' ? '알루미늄 전문기업' : 'Aluminum Specialist'}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.siteDescription);
  }, [config, language]);

  // Persist changes
  useEffect(() => {
    localStorage.setItem('siteConfig', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('sitePosts', JSON.stringify(posts));
  }, [posts]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const addPost = (newPostData: Omit<Post, 'id' | 'date' | 'views'>) => {
    const newPost: Post = {
      ...newPostData,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      views: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <SiteContext.Provider value={{ 
      config, 
      posts, 
      language,
      t: TRANSLATIONS[language],
      setLanguage,
      updateConfig, 
      addPost, 
      deletePost 
    }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within a SiteProvider');
  return context;
};
