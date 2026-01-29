
import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../contexts/SiteContext';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useSite();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        // Calculate mouse position relative to center of screen (-1 to 1)
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        
        requestAnimationFrame(() => {
          setMousePos({ x, y });
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#111111]">
      {/* 
        Background Image Layer 
        - Replaced with new image from user request
        - Applied grayscale and brightness filters to create 'Charcoal' tone
        - Mouse parallax (translate X/Y) + Scroll parallax (translate Y)
      */}
      <div 
        className="absolute inset-[-5%] w-[110%] h-[120%] will-change-transform"
        style={{ 
          transform: `
            translate3d(${mousePos.x * -20}px, ${scrollY * 0.5 + mousePos.y * -20}px, 0) 
            scale(1.05)
          `,
          transition: 'transform 0.1s ease-out' 
        }}
      >
        <div className="w-full h-full">
            <img 
            src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Geometric Metal Texture" 
            className="w-full h-full object-cover filter grayscale brightness-[0.4] contrast-125" 
            />
        </div>
        
        {/* 
           Gradient Overlay
           - Deep Charcoal at bottom/top fading to transparent
           - Slight hint of Brand Blue (30% opacity) to maintain identity while keeping it mostly neutral
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#071D49]/30 to-[#050505]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div 
          className="max-w-4xl space-y-10 will-change-transform"
          style={{ 
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 500) 
          }}
        >
          {/* Badge */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/90 text-sm font-medium backdrop-blur-md bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              {t.hero.badge}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.title_prefix} <br/>
            {/* Metallic Text Effect */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 drop-shadow-lg">
              {t.hero.title_highlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/about">
              <Button size="lg" className="group bg-white !text-[#071D49] hover:bg-gray-200 border-none px-8 py-4 text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                {t.hero.btn_main} 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300">
                {t.hero.btn_sub}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 text-white/30 transition-all duration-500 hover:text-white cursor-pointer z-10"
        style={{ 
            opacity: scrollY > 100 ? 0 : 1,
            transform: `translate3d(-50%, ${scrollY * 0.5}px, 0)`
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest font-medium">{t.common.scroll_down}</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
