
import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useSite } from '../contexts/SiteContext';

const Philosophy: React.FC = () => {
  const { content, t } = useSite();

  const values = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: t.philosophy.val1_title,
      desc: t.philosophy.val1_desc,
      color: "bg-blue-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: t.philosophy.val2_title,
      desc: t.philosophy.val2_desc,
      color: "bg-indigo-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: t.philosophy.val3_title,
      desc: t.philosophy.val3_desc,
      color: "bg-violet-600"
    }
  ];

  return (
    <section id="philosophy" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-32">
          <ScrollReveal>
             <h2 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
               <span className="w-8 h-[2px] bg-brand-blue inline-block"></span>
               {t.philosophy.label}
             </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-8 whitespace-pre-line">
              {t.philosophy.title}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-2xl text-gray-500 font-medium leading-relaxed whitespace-pre-line">
              {t.philosophy.desc}
            </p>
          </ScrollReveal>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Image Card */}
          <div className="lg:w-1/2 relative">
             <ScrollReveal mode="scale" className="sticky top-32">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group transform transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    src={content['philosophy_img_main']} 
                    alt="Factory Interior" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                     <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20 transform transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="text-brand-blue font-bold tracking-wide text-sm uppercase mb-2 block">Since 1990</span>
                        <p className="text-gray-900 font-bold text-2xl whitespace-pre-line">
                           {t.philosophy.card_title}
                        </p>
                     </div>
                  </div>
                </div>
             </ScrollReveal>
          </div>

          {/* Right: Values List */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-6 py-10">
            {values.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="group flex gap-8 items-start p-8 rounded-3xl transition-all duration-500 ease-spring hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 cursor-default border border-transparent hover:border-gray-100">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shadow-md transform transition-all duration-500 ease-spring group-hover:scale-110 group-hover:rotate-[-5deg]`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium group-hover:text-gray-600 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            
            <ScrollReveal delay={0.5}>
               <div className="mt-8 p-8 bg-brand-gray rounded-3xl border border-gray-200 text-center transform transition-all duration-500 hover:scale-[1.03] hover:shadow-md">
                  <p className="text-brand-blue font-bold text-4xl mb-2 font-mono">50,000+</p>
                  <p className="text-gray-500 font-medium">{t.philosophy.stat_label}</p>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
