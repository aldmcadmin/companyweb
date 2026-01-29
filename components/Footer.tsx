import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Lock } from 'lucide-react';
import { useSite } from '../contexts/SiteContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { config } = useSite();

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col space-y-3">
              <h3 className="font-semibold text-gray-900">{item.label}</h3>
              <ul className="space-y-2">
                {item.subItems ? (
                  item.subItems.map((sub) => (
                    <li key={sub.path}>
                      <Link to={sub.path} className="text-sm text-gray-500 hover:text-brand-blue transition-colors">
                        {sub.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link to={item.path} className="text-sm text-gray-500 hover:text-brand-blue transition-colors">
                      메인으로
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
             <h3 className="font-semibold text-gray-900 mb-4">언어 설정</h3>
             <div className="flex space-x-2">
                <span className="px-3 py-1 bg-gray-100 rounded text-xs font-medium cursor-pointer">KOR</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-400 cursor-pointer">ENG</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-400 cursor-pointer">JPN</span>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-8"></div>

        {/* Bottom Section: Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          <div className="space-y-4">
            <Link to="/">
               <Logo color="#071D49" className="h-10 mb-2 w-auto" />
            </Link>
            <div className="text-sm text-gray-500 space-y-1">
              <div className="flex items-start md:items-center">
                 <span className="font-medium min-w-[70px]">대구공장</span>
                 <span>대구광역시 달성군 구지면 달성2차동3로 46</span>
              </div>
              <div className="flex items-start md:items-center">
                 <span className="font-medium min-w-[70px]">창녕공장</span>
                 <span>경남 창녕군 대합면 대합산업단지로 22-44</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                 <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" /> 053-611-6061
                 </div>
                 <div className="flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {config.contactEmail}
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>© 2024 DAEWOO METAL Co., Ltd. All Rights Reserved.</span>
            <Link to="/admin" className="opacity-50 hover:opacity-100 hover:text-brand-blue transition-all" title="Admin Login">
               <Lock className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;