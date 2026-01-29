
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post, SiteConfig, Language, Certification, ContentMap } from '../types';
import { TRANSLATIONS } from '../translations';

interface SiteContextType {
  config: SiteConfig;
  posts: Post[];
  certifications: Certification[];
  content: ContentMap;
  language: Language;
  t: typeof TRANSLATIONS['KOR'];
  setLanguage: (lang: Language) => void;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  addPost: (post: Omit<Post, 'id' | 'date' | 'views'>) => void;
  deletePost: (id: string) => void;
  addCertification: (cert: Omit<Certification, 'id'>) => void;
  deleteCertification: (id: string) => void;
  updateContent: (key: string, value: string) => void;
}

const DEFAULT_CONFIG: SiteConfig = {
  siteName: '대우경금속',
  siteDescription: '차별화된 기술력과 서비스로 알루미늄 산업을 선도하겠습니다.',
  primaryColor: '#071D49',
  borderRadius: 'rounded-full', 
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

const DEFAULT_CERTIFICATIONS: Certification[] = [
    { id: 'c1', title: "ISO 14001", imageUrl: "https://file.notion.so/f/f/c7dae5a5-48c6-4450-a729-3ac476c1b5bf/66d8c4ba-557d-4474-99e1-1fdcb5e3b341/%EC%9D%B8%EC%A6%9D%EC%84%9C_ISO_14001_KOR.jpg?table=block&id=2f7c2f22-549c-8023-8c3e-d83be4f40481&spaceId=c7dae5a5-48c6-4450-a729-3ac476c1b5bf&expirationTimestamp=1769731200000&signature=_GF85xHtmem9PFnqeJ4ijquTGWVOlLlwLXik6dkXWso&downloadName=%5B%EC%9D%B8%EC%A6%9D%EC%84%9C%5D+ISO+14001_KOR.jpg" },
    { id: 'c2', title: "ISO 9001", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer02_z.gif" },
    { id: 'c3', title: "벤처기업확인서", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer03_z.gif" },
    { id: 'c4', title: "KS 제품인증서", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer04_z.gif" },
    { id: 'c5', title: "기업부설연구소 인정서", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer05_z.gif" },
    { id: 'c6', title: "기술혁신형 중소기업", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer06_z.gif" },
    { id: 'c7', title: "IATF 16949", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer07_z.gif" },
    { id: 'c8', title: "상표등록증", imageUrl: "http://www.aldmc.co.kr/kor/images/about/cer/cer08_z.gif" },
];

const DEFAULT_CONTENT: ContentMap = {
  // Home Hero
  'home_hero_title_prefix': 'The Future of',
  'home_hero_title_highlight': 'Aluminum Technology',
  'home_hero_desc': '차별화된 기술력과 서비스로 알루미늄 산업을 선도합니다. 고객 맞춤형 설계부터 완벽한 납기까지, 우리는 기준을 만듭니다.',
  'home_hero_bg': 'https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'home_hero_badge': 'Total Aluminum Solutions',
  
  // Intro Page
  'intro_main_title_1': 'Global Leader in',
  'intro_main_title_2': 'Aluminum Extrusion',
  'intro_desc': '대우경금속은 고객 맞춤형 설계, 생산, 피막, 기계가공 및 적기적소의 납기까지 Total 서비스를 제공합니다. 최첨단 설비와 축적된 기술력을 바탕으로 다양한 산업 분야의 핵심 소재를 공급하고 있습니다.',
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '7 29 73'; // fallback
};

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('siteConfig');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('sitePosts');
    return saved ? JSON.parse(saved) : DEFAULT_POSTS;
  });

  const [certifications, setCertifications] = useState<Certification[]>(() => {
    const saved = localStorage.getItem('siteCertifications');
    return saved ? JSON.parse(saved) : DEFAULT_CERTIFICATIONS;
  });

  const [content, setContent] = useState<ContentMap>(() => {
    const saved = localStorage.getItem('siteContent');
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
  });

  const [language, setLanguage] = useState<Language>('KOR');

  useEffect(() => {
    const rgb = hexToRgb(config.primaryColor);
    document.documentElement.style.setProperty('--brand-blue', rgb);
    document.title = `${config.siteName} | ${language === 'KOR' ? '알루미늄 전문기업' : 'Aluminum Specialist'}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.siteDescription);
  }, [config, language]);

  useEffect(() => { localStorage.setItem('siteConfig', JSON.stringify(config)); }, [config]);
  useEffect(() => { localStorage.setItem('sitePosts', JSON.stringify(posts)); }, [posts]);
  useEffect(() => { localStorage.setItem('siteCertifications', JSON.stringify(certifications)); }, [certifications]);
  useEffect(() => { localStorage.setItem('siteContent', JSON.stringify(content)); }, [content]);

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

  const addCertification = (cert: Omit<Certification, 'id'>) => {
    const newCert = { ...cert, id: Date.now().toString() };
    setCertifications([...certifications, newCert]);
  };

  const deleteCertification = (id: string) => {
    setCertifications(certifications.filter(c => c.id !== id));
  };

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SiteContext.Provider value={{ 
      config, 
      posts, 
      certifications,
      content,
      language,
      t: TRANSLATIONS[language],
      setLanguage,
      updateConfig, 
      addPost, 
      deletePost,
      addCertification,
      deleteCertification,
      updateContent
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
