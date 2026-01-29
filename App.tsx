
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProductSection from './components/ProductSection';
import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';
import PageLayout from './components/PageLayout';
import ScrollReveal from './components/ScrollReveal'; 
import { SiteProvider, useSite } from './contexts/SiteContext';
import { AdminDashboard, AdminPosts, AdminSettings, AdminContent } from './pages/Admin';
import { Phone, Mail, MapPin, Clock, TrendingUp, ThumbsUp, Lightbulb, UserCheck, Sparkles, Award } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Public Layout Component ---
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen font-sans antialiased text-brand-text bg-brand-gray selection:bg-brand-blue selection:text-white">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

// --- Page Components ---

const HomePage = () => (
  <PublicLayout>
    <Hero />
    <Philosophy />
    <ProductSection />
    <ContactBanner />
  </PublicLayout>
);

// About Section
const AboutIntroPage = () => {
  const { content } = useSite();
  return (
    <PublicLayout>
      <PageLayout title="회사개요" subtitle="대우경금속은 끊임없는 혁신으로 알루미늄 산업의 미래를 창조합니다.">
        <div className="space-y-16">
          
          {/* Intro Text & Vision */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {content['intro_main_title_1']} <br/>
                <span className="text-brand-blue">{content['intro_main_title_2']}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg break-keep">
                {content['intro_desc']}
              </p>
            </div>
          </ScrollReveal>

          {/* Factory Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
                  <img 
                    src="http://www.aldmc.co.kr/kor/images/about/introduction01.jpg" 
                    alt="대구공장 전경" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                      <div className="text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h4 className="text-2xl font-bold mb-2">대구공장 (본사)</h4>
                        <p className="text-white/80 text-sm font-medium">최첨단 압출 설비 및 본사 운영<br/>IATF 16949 인증 사업장</p>
                      </div>
                  </div>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <div className="group relative rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
                  <img 
                    src="http://www.aldmc.co.kr/kor/images/about/introduction02.jpg" 
                    alt="창녕공장 전경" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                      <div className="text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h4 className="text-2xl font-bold mb-2">창녕공장</h4>
                        <p className="text-white/80 text-sm font-medium">대규모 물류 센터 및 제2 생산 거점<br/>스마트 팩토리 시스템 구축</p>
                      </div>
                  </div>
                </div>
            </ScrollReveal>
          </div>

          {/* Company Detail Table */}
          <ScrollReveal delay={0.3}>
            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100/50 shadow-inner">
                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-brand-blue rounded-full"></span>
                  기업 상세 정보
                </h3>
                
                <div className="space-y-6">
                  {/* Row Item */}
                  <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-200 pb-6">
                      <div className="w-40 font-bold text-gray-500 shrink-0 mb-2 md:mb-0">회사명</div>
                      <div className="font-bold text-lg text-gray-900">(주)대우경금속</div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-200 pb-6">
                      <div className="w-40 font-bold text-gray-500 shrink-0 mb-2 md:mb-0">대표이사</div>
                      <div className="font-bold text-lg text-gray-900">김도연</div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-200 pb-6">
                      <div className="w-40 font-bold text-gray-500 shrink-0 mb-2 md:mb-0">주요사업</div>
                      <div className="text-gray-800 leading-relaxed">알루미늄 압출 제조 및 판매 (자동차, 전자, 건축, 산업용 소재)</div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start border-b border-gray-200 pb-6">
                      <div className="w-40 font-bold text-gray-500 shrink-0 mb-4 md:mb-0 pt-1">사업장 안내</div>
                      <div className="flex-1 space-y-6">
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="font-bold block text-brand-blue mb-2 text-lg">본사 / 1공장 (대구)</span>
                            <p className="text-gray-700 mb-3">대구광역시 달성군 구지면 달성2차동3로 46 (달성2차 산업단지내)</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                              <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> T. 053-611-6061</span>
                              <span className="hidden sm:inline text-gray-300">|</span>
                              <span>F. 053-611-6066</span>
                            </div>
                        </div>
                        
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="font-bold block text-brand-blue mb-2 text-lg">2공장 (창녕)</span>
                            <p className="text-gray-700 mb-3">경남 창녕군 대합면 대합산업단지로 22-44</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                              <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> T. 055-533-0013</span>
                              <span className="hidden sm:inline text-gray-300">|</span>
                              <span>F. 055-533-0225</span>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="font-bold block text-brand-blue mb-2 text-lg">일본 판매 법인</span>
                            <p className="text-gray-700 mb-3">Daewoo Metal Japan Co., Ltd. 591-1, Miyata, Miyawaka-city, Fukuoka-ken Japan</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                              <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> T. +81-949-28-8028</span>
                              <span className="hidden sm:inline text-gray-300">|</span>
                              <span>F. +81-949-28-8028</span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </PageLayout>
    </PublicLayout>
  );
};

const AboutHistoryPage = () => {
  const historyData = [
    {
      year: '2016',
      events: [
        { date: '2016.09', desc: 'DNV·GL 인증' },
        { date: '2016.08', desc: '2,000톤 압출라인 2호기 도입' },
        { date: '2016.07', desc: '창녕공장 준공' },
        { date: '2016.06', desc: '특허 2건 등록' },
        { date: '2016.04', desc: '이노비즈 인증(중소기업청)' },
        { date: '2016.03', desc: '"알루미" 상표등록' },
      ]
    },
    {
      year: '2014',
      events: [
        { date: '2014.05', desc: '기술연구소 분원 개설' },
        { date: '2014.03', desc: 'KS D 6759 인증' },
        { date: '2014.01', desc: '한국생산기술연구원 파트너기업 지정' },
      ]
    },
    {
      year: '2013',
      events: [
        { date: '2013.12', desc: '기업부설연구소 설립' },
        { date: '2013.07', desc: '벤처기업 인증(중소기업진흥공단)' },
        { date: '2013.06', desc: '으뜸기업 선정(중소기업진흥공단)' },
        { date: '2013.05', desc: '양산개시 ISO 9001 / 14001 인증' },
        { date: '2013.04', desc: '2,000톤 압출설비 도입 설치' },
        { date: '2013.01', desc: '(주)대우경금속 설립' },
      ]
    }
  ];

  return (
    <PublicLayout>
      <PageLayout title="회사연혁" subtitle="대우경금속이 걸어온 도전과 성장의 역사입니다.">
        <div className="max-w-4xl mx-auto py-8">
             {/* Section Circle Header */}
             <div className="flex justify-center mb-20">
                <ScrollReveal mode="scale">
                  <div className="w-40 h-40 rounded-full bg-brand-blue text-white flex flex-col items-center justify-center shadow-xl shadow-blue-900/20 border-8 border-white ring-1 ring-gray-100">
                       <span className="text-xl font-medium opacity-90">Present</span>
                       <span className="text-lg opacity-80 my-0.5">~</span>
                       <span className="text-3xl font-bold">2013</span>
                  </div>
                </ScrollReveal>
             </div>

             <div className="space-y-20 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 -translate-x-1/2"></div>

                {historyData.map((group, gIdx) => {
                    const isLeft = gIdx % 2 !== 0; // Alternate sides on desktop
                    
                    return (
                      <div key={group.year} className="relative">
                          {/* Year Marker */}
                          <ScrollReveal>
                              <div className="flex items-center mb-8 relative">
                                  {/* Center Dot */}
                                  <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-[5px] border-brand-blue z-10 shadow-sm"></div>
                                  
                                  {/* Year Label - Updated for cleaner overlap & color */}
                                  <div className="pl-14 md:pl-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-14 z-10">
                                      <span className="text-4xl font-bold text-brand-blue bg-white px-4 inline-block">{group.year}</span>
                                  </div>
                              </div>
                          </ScrollReveal>

                          {/* Events Content */}
                          <div className={`pl-14 md:pl-0 md:flex ${isLeft ? 'md:flex-row-reverse' : ''} md:gap-0`}>
                              {/* Spacer for desktop alignment */}
                              <div className="hidden md:block md:w-1/2"></div>

                              <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} space-y-5 pb-6`}>
                                  {group.events.map((event, idx) => (
                                      <ScrollReveal key={idx} delay={idx * 0.05}>
                                          <div className={`group flex flex-col md:block hover:bg-white hover:shadow-sm hover:rounded-xl p-2 -m-2 transition-all duration-300`}>
                                              <span className={`inline-block text-gray-400 font-bold text-sm mb-1 ${isLeft ? 'md:ml-2' : 'md:mr-2'}`}>
                                                {event.date}
                                              </span>
                                              <span className="text-gray-800 font-medium text-lg leading-snug group-hover:text-brand-blue transition-colors">
                                                {event.desc}
                                              </span>
                                          </div>
                                      </ScrollReveal>
                                  ))}
                              </div>
                          </div>
                      </div>
                    );
                })}
             </div>
             
             {/* End Dot */}
             <div className="relative h-10">
                <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-blue-200"></div>
             </div>
        </div>
      </PageLayout>
    </PublicLayout>
  );
};

// Updated Philosophy Page with "Nonstop Jump" Concept
const AboutPhilosophyPage = () => {
  const coreValues = [
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "고객감동",
      subtitle: "Customer Satisfaction",
      desc: "단순한 만족을 넘어 감동을 선사합니다.\n고객의 성공이 곧 우리의 성공입니다.",
      bg: "bg-blue-50"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "혁신",
      subtitle: "Innovation",
      desc: "현실에 안주하지 않는 도전정신으로\n새로운 가치를 창출하는 혁신경영을 실천합니다.",
      bg: "bg-blue-50"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "인재제일주의",
      subtitle: "Talent First",
      desc: "사람이 미래입니다. 인재양성으로\n기업과 개인이 함께 성장합니다.",
      bg: "bg-blue-50"
    }
  ];

  return (
    <PublicLayout>
      <PageLayout title="경영이념" subtitle="대우경금속이 추구하는 핵심 가치와 비전입니다.">
        <div className="py-8 space-y-24">
          
          {/* Section 1: Nonstop Jump (Reinterpreted) */}
          <ScrollReveal>
             <div className="relative bg-brand-blue rounded-[3rem] p-10 md:p-20 overflow-hidden text-center text-white shadow-2xl shadow-blue-900/20">
                {/* Background Decor - Abstract Growth Lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,100 C30,80 50,50 100,0" stroke="white" strokeWidth="2" fill="none" />
                      <path d="M0,100 C40,90 60,60 100,10" stroke="white" strokeWidth="1" fill="none" />
                   </svg>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 animate-float">
                      <TrendingUp className="w-10 h-10 text-blue-200" />
                   </div>
                   
                   <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                     Nonstop <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Jump</span>
                   </h2>
                   
                   <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                     "무한점프"라는 뜻으로 <br className="hidden md:block"/>
                     <span className="font-bold text-white">미래에 대한 도전과 도약</span>, 당사가 추구하는 핵심 가치입니다.
                   </p>
                </div>
             </div>
          </ScrollReveal>

          {/* Section 2: Core Values (Cards instead of Hexagons) */}
          <div>
            <ScrollReveal>
               <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                     <Sparkles className="w-5 h-5 text-brand-blue" />
                     Core Values
                  </h3>
                  <div className="w-12 h-1 bg-gray-200 mx-auto mt-4 rounded-full"></div>
               </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
               {coreValues.map((val, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                     <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-spring h-full flex flex-col items-center text-center">
                        <div className={`w-20 h-20 ${val.bg} rounded-2xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform duration-300`}>
                           {val.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">{val.title}</h4>
                        <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6 opacity-60">{val.subtitle}</p>
                        <p className="text-gray-500 leading-relaxed whitespace-pre-line break-keep">
                           {val.desc}
                        </p>
                     </div>
                  </ScrollReveal>
               ))}
            </div>
            
            {/* Visual Connector - Plus Signs */}
            <div className="hidden md:flex justify-center -mt-[140px] mb-[140px] pointer-events-none relative z-0 opacity-0">
               {/* Just for layout spacing if needed, but flex grid handles gap better */}
            </div>
          </div>

        </div>
      </PageLayout>
    </PublicLayout>
  );
};

// New Certification Page - Consumes Dynamic Content
const AboutCertificationPage = () => {
  const { certifications } = useSite();

  return (
    <PublicLayout>
      <PageLayout title="인증현황" subtitle="대우경금속의 품질과 기술력을 입증하는 각종 인증 현황입니다.">
         <ScrollReveal>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                 {certifications.map((cer, idx) => (
                     <div key={cer.id} className="group flex flex-col items-center">
                         <div className="w-full bg-white border border-gray-100 p-2 md:p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 ease-spring cursor-pointer">
                             <div className="aspect-[3/4] overflow-hidden rounded-lg bg-white relative flex items-center justify-center">
                                 {/* Fallback styling in case image fails */}
                                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50 text-xs">
                                     <Award className="w-12 h-12 opacity-20" />
                                 </div>
                                 <img 
                                   src={cer.imageUrl} 
                                   alt={cer.title} 
                                   className="relative z-10 w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                                   onError={(e) => {
                                      e.currentTarget.style.opacity = '0.3';
                                   }}
                                 />
                             </div>
                         </div>
                         <p className="mt-4 text-center font-bold text-gray-800 text-sm md:text-base group-hover:text-brand-blue transition-colors">
                             {cer.title}
                         </p>
                     </div>
                 ))}
             </div>
         </ScrollReveal>
      </PageLayout>
    </PublicLayout>
  );
};

const AboutLocationPage = () => (
  <PublicLayout>
    <PageLayout title="오시는 길" subtitle="대우경금속의 위치를 안내해 드립니다.">
        <div className="space-y-8">
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                <span className="text-gray-400 font-medium">지도 API 영역 (Google Maps / Naver Maps)</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">대구 본사/공장</h4>
                    <p className="text-gray-600">대구광역시 달성군 구지면 달성2차동3로 46</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">창녕 공장</h4>
                    <p className="text-gray-600">경남 창녕군 대합면 대합산업단지로 22-44</p>
                </div>
            </div>
        </div>
    </PageLayout>
  </PublicLayout>
);

// Products Section
const ProductsListPage = () => (
    <PublicLayout>
      <div className="pt-32 pb-24 min-h-screen bg-brand-gray">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Products</h1>
             <p className="text-xl text-gray-500 mb-12">최고의 기술력으로 완성된 제품 라인업을 소개합니다.</p>
             <ProductSection />
         </div>
      </div>
    </PublicLayout>
);

const ProductDetailPage = ({ category }: { category: string }) => (
    <PublicLayout>
      <PageLayout title={`${category}`} subtitle={`대우경금속의 고품질 ${category} 제품군입니다.`}>
          <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="group cursor-pointer">
                      <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                           <img src={`https://picsum.photos/seed/${category}${i}/400/400`} alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      </div>
                      <h4 className="font-bold text-lg group-hover:text-brand-blue transition-colors">제품 모델명 {String(i).padStart(2, '0')}</h4>
                      <p className="text-sm text-gray-500">규격 및 상세 스펙 설명</p>
                  </div>
              ))}
          </div>
      </PageLayout>
    </PublicLayout>
);

// Other Sections
const ProcessPage = () => (
    <PublicLayout>
      <PageLayout title="생산공정" subtitle="원자재 입고부터 출하까지, 완벽을 기하는 공정 시스템">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['용해/주조', '압출', '열처리', '교정', '절단', '피막', '가공', '검사/포장'].map((step, idx) => (
                  <div key={step} className="p-6 bg-gray-50 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                      <div className="text-3xl font-bold text-brand-blue/20 mb-2">0{idx + 1}</div>
                      <h3 className="font-bold text-gray-900">{step}</h3>
                  </div>
              ))}
          </div>
      </PageLayout>
    </PublicLayout>
);

const RndPage = () => (
    <PublicLayout>
      <PageLayout title="연구소" subtitle="미래 소재 기술을 선도하는 R&D 센터">
          <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold">Innovation for Future</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                  기업부설연구소에서는 고강도/경량화 신소재 개발 및 차세대 친환경 공정 기술 연구에 매진하고 있습니다.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                   <div className="p-8 bg-gray-50 rounded-2xl">
                       <h4 className="font-bold text-lg mb-2">신소재 개발</h4>
                   </div>
                   <div className="p-8 bg-gray-50 rounded-2xl">
                       <h4 className="font-bold text-lg mb-2">공정 최적화</h4>
                   </div>
                   <div className="p-8 bg-gray-50 rounded-2xl">
                       <h4 className="font-bold text-lg mb-2">품질 보증</h4>
                   </div>
              </div>
          </div>
      </PageLayout>
    </PublicLayout>
);

// Improved Contact/Support Page
const ContactPage = () => {
  const { config } = useSite();
  
  return (
    <PublicLayout>
      <PageLayout title="고객지원" subtitle="궁금하신 점이나 견적 문의를 남겨주세요.">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
             {/* Left Info Column */}
             <div className="lg:col-span-2 space-y-8">
                <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl">
                   <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-5 h-5" /></div>
                         <div>
                            <p className="text-xs text-blue-200 mb-1">전화번호</p>
                            <p className="font-bold text-lg">053-611-6061</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><Mail className="w-5 h-5" /></div>
                         <div>
                            <p className="text-xs text-blue-200 mb-1">이메일</p>
                            <p className="font-bold">{config.contactEmail}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /></div>
                         <div>
                            <p className="text-xs text-blue-200 mb-1">운영시간</p>
                            <p className="font-bold">평일 09:00 - 18:00</p>
                            <p className="text-sm text-blue-200">주말 및 공휴일 휴무</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                   <h3 className="text-lg font-bold text-gray-900 mb-4">본사 위치</h3>
                   <div className="flex items-start gap-3 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 shrink-0 mt-1 text-brand-blue" />
                      <p>대구광역시 달성군 구지면 달성2차동3로 46</p>
                   </div>
                   <a href="/about/location" className="text-sm font-bold text-brand-blue hover:underline block text-center bg-blue-50 py-3 rounded-xl">
                      지도 자세히 보기
                   </a>
                </div>
             </div>

             {/* Right Form Column */}
             <div className="lg:col-span-3">
                <ContactForm />
             </div>
          </div>
      </PageLayout>
    </PublicLayout>
  );
};

const NotFound = () => (
    <PublicLayout>
      <div className="pt-32 min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다.</h1>
          <p className="text-gray-500 mb-8">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
          <a href="/" className="text-brand-blue hover:underline">홈으로 돌아가기</a>
      </div>
    </PublicLayout>
)

const App: React.FC = () => {
  return (
    <SiteProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes (No Header/Footer) */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/content" element={<AdminContent />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Routes */}
          <Route path="/about" element={<AboutPhilosophyPage />} />
          <Route path="/about/intro" element={<AboutIntroPage />} />
          <Route path="/about/history" element={<AboutHistoryPage />} />
          <Route path="/about/cer" element={<AboutCertificationPage />} /> 
          <Route path="/about/location" element={<AboutLocationPage />} />
          
          {/* Product Routes */}
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/products/light" element={<ProductDetailPage category="경량소재" />} />
          <Route path="/products/industry" element={<ProductDetailPage category="산업용소재" />} />
          <Route path="/products/processing" element={<ProductDetailPage category="가공소재" />} />
          <Route path="/products/construction" element={<ProductDetailPage category="건축소재" />} />
          
          {/* Other Routes */}
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/rnd" element={<RndPage />} />
          
          {/* Replaced SupportPage with ContactPage */}
          <Route path="/support" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SiteProvider>
  );
};

export default App;
