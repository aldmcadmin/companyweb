import React from 'react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ProductSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">Our Products</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                자동차, 전자, 건축 등 다양한 산업 분야에 적용되는 <br className="hidden md:block"/>
                대우경금속만의 최고 품질 알루미늄 제품을 만나보세요.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link to="/products" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 shadow-sm group">
              전체 제품 보기 <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <Link to={`/products`} className="group block h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-spring h-full flex flex-col border border-gray-100/50 relative z-0 hover:z-10">
                  
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                    
                    {/* Category Tag - Slides in on hover */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider shadow-sm translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-spring">
                      {product.category}
                    </div>

                     {/* Overlay Icon */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-spring">
                        <Plus className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 flex-1 flex flex-col relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-brand-blue">
                      <span>자세히 보기</span>
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500 ease-spring" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center md:hidden">
             <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-bold shadow-sm active:scale-95 transition-transform">
              전체 제품 보기 <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductSection;