import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const ContactBanner: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            프로젝트를 시작할 <br/> 준비가 되셨나요?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-medium">
            대우경금속의 전문가들이 귀사의 비즈니스에 최적화된<br className="hidden sm:block"/> 
            알루미늄 솔루션을 제안해 드립니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-blue hover:bg-black text-white px-10 py-5 text-lg rounded-full shadow-2xl shadow-blue-900/20 hover:shadow-xl transition-all duration-300">
                견적 문의하기
              </Button>
            </Link>
            <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold">평일 09:00 - 18:00 상담 가능</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactBanner;