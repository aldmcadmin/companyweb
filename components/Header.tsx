
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants'; // Kept for structure, labels overridden by translation
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useSite } from '../contexts/SiteContext';
import { Language } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { config, language, setLanguage, t } = useSite();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Helper to determine if a main nav item is active
  const isPathActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  const logoColor = isTransparent ? 'white' : config.primaryColor;

  // Map translations to nav structure
  // This simplistic mapping assumes the structure in constants matches translation keys
  // For a real app, structure might be dynamic.
  const getNavLabel = (key: string) => {
    switch(key) {
      case '회사소개': return t.nav.about;
      case '제품소개': return t.nav.products;
      case '생산공정': return t.nav.process;
      case '연구소': return t.nav.rnd;
      case '고객지원': return t.nav.support;
      default: return key;
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          !isTransparent 
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 z-50 group shrink-0">
               <Logo 
                 color={logoColor} 
                 className="h-10 w-auto md:h-12 transition-colors duration-300"
               />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.path} className="relative group px-3 py-2">
                  <Link 
                    to={item.path}
                    className={`text-sm font-medium transition-all duration-200 flex items-center gap-1
                      ${!isTransparent 
                        ? (isPathActive(item.path) ? `text-[${config.primaryColor}]` : 'text-gray-600 hover:text-brand-blue') 
                        : (isPathActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white')
                      }`}
                  >
                    {getNavLabel(item.label)}
                    {item.subItems && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-50`} />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-52 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                      <div className="bg-black/60 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/5 overflow-hidden p-2 ring-1 ring-black/5">
                        <div className="flex flex-col space-y-1">
                          {item.subItems.map((sub) => (
                            <Link 
                              key={sub.path} 
                              to={sub.path}
                              className="px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors font-medium text-left"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {isPathActive(item.path) && (
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${!isTransparent ? 'bg-brand-blue' : 'bg-white'}`} />
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions: Lang Switcher & CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative group">
                 <button className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded transition-colors ${!isTransparent ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                    <Globe className="w-3 h-3" />
                    <span>{language}</span>
                 </button>
                 <div className="absolute top-full right-0 pt-2 w-24 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-1">
                       {['KOR', 'ENG', 'JPN'].map((lang) => (
                          <button 
                            key={lang}
                            onClick={() => setLanguage(lang as Language)}
                            className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 ${language === lang ? 'text-brand-blue bg-blue-50' : 'text-gray-600'}`}
                          >
                             {lang}
                          </button>
                       ))}
                    </div>
                 </div>
              </div>

              <Link to="/contact">
                <button className={`text-sm font-medium px-5 py-2 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${config.borderRadius} ${
                  !isTransparent 
                    ? 'bg-brand-blue text-white hover:bg-black' 
                    : 'bg-white text-brand-blue hover:bg-gray-100'
                }`}>
                  {t.nav.contact}
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50 focus:outline-none p-2"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className={`h-6 w-6 ${!isTransparent ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-28 px-6 h-full overflow-y-auto pb-10">
          <div className="flex justify-end mb-6">
             <div className="flex bg-gray-100 rounded-lg p-1">
               {['KOR', 'ENG', 'JPN'].map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => setLanguage(lang as Language)}
                    className={`px-3 py-1 text-xs font-bold rounded ${language === lang ? 'bg-white shadow-sm text-brand-blue' : 'text-gray-500'}`}
                  >
                     {lang}
                  </button>
               ))}
             </div>
          </div>
          <nav className="flex flex-col space-y-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-6 last:border-0">
                <Link 
                  to={item.path} 
                  className="text-2xl font-bold text-gray-900 block mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getNavLabel(item.label)}
                </Link>
                {item.subItems && (
                  <div className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100">
                    {item.subItems.map((sub) => (
                      <Link 
                        key={sub.path} 
                        to={sub.path}
                        className="text-gray-500 hover:text-brand-blue text-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 mb-8">
            <Link 
              to="/contact" 
              className={`block w-full bg-brand-blue text-white text-center py-4 font-bold text-lg shadow-lg active:scale-95 transition-transform ${config.borderRadius}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
