import React from 'react';
import { useSite } from '../contexts/SiteContext';
import { ShieldCheck, Ruler, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const MEASUREMENT_TOOLS = [
  { name: '3차원 측정기', spec: 'Mitutoyo CRYSTA-Apex S 574', image: 'https://images.unsplash.com/photo-1581092334245-d4fb30c5e7b2?auto=format&fit=crop&w=600&q=80', description: '제품의 복잡한 3차원 형상을 정밀하게 측정 및 검증합니다.' },
  { name: '비전 측정기', spec: 'OVP-SERIES', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80', description: '고해상도 카메라를 이용한 비접촉식 정밀 치수 측정 장비입니다.' },
  { name: '투영기', spec: 'Mitutoyo PJ-A3000', image: 'https://images.unsplash.com/photo-1616198642750-f8d2cc1f087e?auto=format&fit=crop&w=600&q=80', description: '제품의 미세한 곡선과 윤곽을 확대하여 검사합니다.' },
  { name: '형상 측정기', spec: 'Mitutoyo CV-2100', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&w=600&q=80', description: '표면 조도와 미세한 윤곽 단면을 분석합니다.' },
  { name: '만능 재료 시험기', spec: 'UTM 50Ton', image: 'https://images.unsplash.com/photo-1574676104764-ae327c6f0ee4?auto=format&fit=crop&w=600&q=80', description: '완제품 및 시편의 인장, 압축, 굽힘 강도를 테스트합니다.' },
  { name: '경도계', spec: 'Rockwell / Vickers', image: 'https://images.unsplash.com/photo-1612803856372-8805ffce1a64?auto=format&fit=crop&w=600&q=80', description: '소재 및 피막 표면의 체계적인 경도 측정을 수행합니다.' }
];

const QualityPage: React.FC = () => {
  const { equipments, t } = useSite();

  return (
    <div className="pt-24 pb-24 min-h-screen bg-brand-gray">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
             <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-sm">
                품질검사
             </h1>
             <p className="text-base md:text-lg font-light tracking-[0.1em] text-blue-100 font-sans">
                QUALITY ASSURANCE & INSPECTION
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Intro */}
        <section>
           <ScrollReveal>
             <div className="max-w-4xl mx-auto text-center">
                <ShieldCheck className="w-16 h-16 text-brand-blue mx-auto mb-6" />
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                  타협 없는 품질의 기준
                </h2>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed break-keep" style={{ wordBreak: 'keep-all' }}>
                  대우경금속은 고객에게 무결점 제품을 제공하기 위해 최첨단 측정 설비와 철저한 다중 검사 시스템을 구축하고 있습니다. 원소재 입고부터 최종 출하까지 모든 공정을 철저히 감독합니다.
                </p>
             </div>
           </ScrollReveal>
        </section>

        {/* Feature Grid - Equipment */}
        <section>
          <ScrollReveal>
             <div className="flex items-center gap-3 mb-10 border-b border-gray-200 pb-4">
                <Ruler className="w-8 h-8 text-brand-blue" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">측정설비 보유현황</h2>
             </div>
          </ScrollReveal>

          {/* Table Overview */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-4 px-6 font-bold text-gray-700 text-sm md:text-base border-r border-gray-200 w-1/4">설비명</th>
                        <th className="py-4 px-6 font-bold text-gray-700 text-sm md:text-base border-r border-gray-200 w-1/4">제조사 / 모델명</th>
                        <th className="py-4 px-6 font-bold text-gray-700 text-sm md:text-base">측정 목적 및 주요 기능</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {equipments.map((tool, idx) => (
                        <tr key={tool.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-6 text-sm font-semibold text-gray-900 border-r border-gray-100">{tool.name}</td>
                          <td className="py-4 px-6 text-sm text-gray-600 font-medium border-r border-gray-100">{tool.spec}</td>
                          <td className="py-4 px-6 text-sm text-gray-500 break-keep">{tool.description}</td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
               </div>
            </div>
          </ScrollReveal>

          {/* Grid Layout for Modern Look */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipments.map((tool, index) => (
              <ScrollReveal key={tool.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col h-full">
                   <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                     <img 
                       src={tool.imageUrl} 
                       alt={tool.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 text-xs font-bold tracking-wider text-gray-700 uppercase">
                       {tool.spec}
                     </div>
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed flex-grow">{tool.description}</p>
                     <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-brand-blue font-semibold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>정밀 검교정 완료</span>
                     </div>
                   </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Certification Link */}
        <section>
           <ScrollReveal>
             <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">국제적으로 입증된 품질 관리</h3>
                  <p className="text-gray-500 text-lg break-keep" style={{ wordBreak: 'keep-all' }}>IATF 16949, ISO 9001 등 대우경금속의 품질 경영 인프라를 증명하는 인증 내역을 확인하세요.</p>
                </div>
                <Link to="/about/cert" className="shrink-0 flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-black text-white font-semibold rounded-full transition-all group">
                   인증현황 바로가기
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
           </ScrollReveal>
        </section>

      </div>
    </div>
  );
};

export default QualityPage;
