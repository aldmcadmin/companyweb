import React, { useEffect, useRef, useState } from 'react';
import { useSite } from '../contexts/SiteContext';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProcessPage: React.FC = () => {
  const { t, processSteps } = useSite();
  const sortedSteps = [...processSteps].sort((a, b) => a.order - b.order);
  const numSteps = sortedSteps.length;

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate scroll percentage within the section (0 to 1)
      let scrollPercentage = (scrollY - sectionTop) / (sectionHeight - windowHeight);
      
      if (scrollPercentage < 0) scrollPercentage = 0;
      if (scrollPercentage > 1) scrollPercentage = 1;

      // Track needs to move by exactly (numSteps - 1) screens
      const maxTranslate = (numSteps - 1) * window.innerWidth;
      const translateX = scrollPercentage * maxTranslate;

      trackRef.current.style.transform = `translateX(-${translateX}px)`;

      // Calculate current slide
      const slideWidth = window.innerWidth;
      const index = Math.round(translateX / slideWidth);
      setCurrentSlideIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [numSteps]);

  if (sortedSteps.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pt-32 text-center text-gray-500">
           공정 단계가 등록되지 않았습니다.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />

      {/* Intro Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight break-keep">
          완벽을 향한<br />알루미늄의 여정
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl font-light break-keep">
          수십 년의 노하우와 첨단 기술이 만나는 생산 공정을 한눈에 확인하세요.<br className="hidden md:block" /> 아래로 스크롤하여 여정을 시작합니다.
        </p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce">
          <span className="text-sm tracking-widest mb-2 text-white">SCROLL</span>
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Main Scroll-telling Section */}
      {/* Set the parent container height to allow scrolling based on number of steps */}
      <div 
        ref={sectionRef} 
        className="relative" 
        style={{ height: `${numSteps * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <div 
            ref={trackRef} 
            className="flex h-screen" 
            style={{ width: `${numSteps * 100}vw`, willChange: 'transform' }}
          >
            {sortedSteps.map((step, index) => {
              const isActive = index === currentSlideIndex;

              return (
                <div 
                  key={step.id} 
                  className="relative flex items-center justify-start h-screen pl-[6%] md:pl-[10%] overflow-hidden group shrink-0 w-screen"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-20 transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${step.imageUrl}')` }}
                  />
                  
                  {/* Overlay Gradient for Text Readability */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent sm:from-black/80 sm:via-black/40"
                  />

                  {/* Content */}
                  <div className="max-w-[90%] md:max-w-[600px] z-10 z-10">
                    <span className="inline-block text-xs md:text-xl font-semibold tracking-[0.2em] text-blue-500 mb-3 md:mb-4 border border-blue-500/50 px-3 md:px-4 py-1 rounded-full backdrop-blur-[4px]">
                      STEP {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-[4.5rem] font-extrabold leading-tight mb-4 md:mb-6 tracking-tight text-shadow-lg break-keep drop-shadow-md">
                      {step.title.split(/\n|\\n/).map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br className="hidden sm:block" />
                        </React.Fragment>
                      ))}
                    </h2>
                    <p 
                      className={`text-sm sm:text-base md:text-xl leading-relaxed text-gray-300 font-light break-keep transition-all duration-800 ease-out ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                    >
                      {step.description || '상세 공정 설명이 없습니다.'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Outro Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 border-t border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 break-keep">빈틈없는 품질을 향하여</h2>
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 font-light break-keep flex flex-col items-center gap-2">
          <span>모든 공정은 실시간 데이터로 모니터링되며, 완벽함을 위해 끊임없이 교차 검증됩니다.</span>
          <span>다음 단계인 품질 검사 과정을 확인하세요.</span>
        </p>
        
        <Link 
          to="/quality"
          className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 text-sm md:text-base group"
        >
          품질검사 페이지로 이동
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
