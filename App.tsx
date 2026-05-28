
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import PromoVideo from './components/PromoVideo';
import ProductSection from './components/ProductSection';
import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';
import PageLayout from './components/PageLayout';
import ScrollReveal from './components/ScrollReveal'; 
import { SiteProvider, useSite } from './contexts/SiteContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { AdminDashboard, AdminPosts, AdminSettings, AdminContent } from './pages/Admin';
import Login from './pages/Login';
import ProcessPage from './pages/Process';
import QualityPage from './pages/Quality';
import RndPage from './pages/RndPage';
import AboutPage from './pages/AboutPage';
import { Phone, Mail, MapPin, Clock, TrendingUp, ThumbsUp, Lightbulb, UserCheck, Sparkles, Award, Printer, Navigation, Feather, Factory, Settings, Cpu, Building2, Leaf, Box, Layers, ChevronRight } from 'lucide-react';
import { TRANSLATIONS } from './translations';

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
    <PromoVideo />
    <ProductSection />
    <ContactBanner />
  </PublicLayout>
);

// Products Section
const ProductsListPage = () => {
    const { t } = useSite();
    return (
        <PublicLayout>
          <div className="pt-32 pb-24 min-h-screen bg-brand-gray">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.products.title}</h1>
                 <p className="text-xl text-gray-500 mb-12">{t.products.desc}</p>
                 <ProductSection hideHeader={true} />
             </div>
          </div>
        </PublicLayout>
    );
};

const ProductDetailPage = ({ categoryKey }: { categoryKey: keyof typeof TRANSLATIONS.KOR.nav }) => {
    const { t } = useSite();
    const categoryName = t.nav[categoryKey];
    
    // Map categoryKey to product ID to get badge info from translations
    const keyToIdObj: Record<string, string> = {
      light: 'p1',
      industry: 'p2',
      processing: 'p3',
      electronic: 'p4',
      construction: 'p5',
      environmental: 'p6',
      exterior: 'p7',
      substitute: 'p8'
    };
    
    const productId = keyToIdObj[categoryKey] as string;
    const translatedItems = (t.products as any).items;
    const translation = translatedItems ? translatedItems[productId] : null;
    const badgeText = translation ? translation.badge : categoryName;
    
    let icon = null;
    if (categoryKey === 'light') icon = <Feather className="w-3.5 h-3.5" />;
    else if (categoryKey === 'industry') icon = <Factory className="w-3.5 h-3.5" />;
    else if (categoryKey === 'processing') icon = <Settings className="w-3.5 h-3.5" />;
    else if (categoryKey === 'electronic') icon = <Cpu className="w-3.5 h-3.5" />;
    else if (categoryKey === 'construction') icon = <Building2 className="w-3.5 h-3.5" />;
    else if (categoryKey === 'environmental') icon = <Leaf className="w-3.5 h-3.5" />;
    else if (categoryKey === 'exterior') icon = <Box className="w-3.5 h-3.5" />;
    else if (categoryKey === 'substitute') icon = <Layers className="w-3.5 h-3.5" />;

    const badge = (
      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-brand-blue text-xs font-bold rounded-full w-fit tracking-wider shadow-sm">
        {icon}
        {badgeText}
      </span>
    );
    
    return (
        <PublicLayout>
          {/* Trendy floating back button */}
          <div className="fixed right-4 md:right-6 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
            <Link 
                to="/products" 
                className="flex items-center gap-2 p-1.5 pr-4 bg-white/90 backdrop-blur-md text-brand-blue font-medium text-xs rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-blue-50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-300 group"
            >
              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </div>
              <span className="whitespace-nowrap tracking-tight">{t.products.back_to}</span>
            </Link>
          </div>

          <PageLayout 
            title={categoryName} 
            subtitle={translation ? translation.desc : t.products.desc}
            badge={badge}
          >
              <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="group cursor-pointer">
                          <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                               <img src={`https://picsum.photos/seed/${categoryKey}${i}/400/400`} alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                          </div>
                          <h4 className="font-bold text-lg group-hover:text-brand-blue transition-colors">{t.products.detail_page.model_name} {String(i).padStart(2, '0')}</h4>
                          <p className="text-sm text-gray-500">{t.products.detail_page.spec_desc}</p>
                      </div>
                  ))}
              </div>
          </PageLayout>
        </PublicLayout>
    );
};

// Other Sections

// Improved Contact/Support Page
const ContactPage = () => {
  const { config, t } = useSite();
  
  return (
    <PublicLayout>
      <PageLayout title={t.pages.support.title} subtitle={t.pages.support.subtitle}>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
             {/* Left Info Column */}
             <div className="lg:col-span-2 space-y-8">
                <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl">
                   <h3 className="text-xl font-bold mb-6">{t.contact.info.title}</h3>
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-5 h-5" /></div>
                         <div>
                            <p className="text-xs text-blue-200 mb-1">{t.contact.info.phone}</p>
                            <p className="font-bold text-lg">053-611-6061</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><Mail className="w-5 h-5" /></div>
                         <div>
                            <p className="text-xs text-blue-200 mb-1">{t.contact.info.email}</p>
                            <p className="font-bold">{config.contactEmail}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="p-2 bg-white/10 rounded-lg"><Clock className="w-5 h-5" /></div>
                         <div>
                            <p className="text-xs text-blue-200 mb-1">{t.contact.info.hours}</p>
                            <p className="font-bold">{t.contact.info.hours_desc}</p>
                            <p className="text-sm text-blue-200">{t.contact.info.closed}</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                   <h3 className="text-lg font-bold text-gray-900 mb-4">{t.footer.daegu}</h3>
                   <div className="flex items-start gap-3 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 shrink-0 mt-1 text-brand-blue" />
                      <p>{t.footer.address_daegu}</p>
                   </div>
                   <a href="/about/location" className="text-sm font-bold text-brand-blue hover:underline block text-center bg-blue-50 py-3 rounded-xl">
                      {t.contact.info.view_map}
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
    <AuthProvider>
      <SiteProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Admin Routes (Protected) */}
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/content" element={<ProtectedRoute><AdminContent /></ProtectedRoute>} />
            <Route path="/admin/posts" element={<ProtectedRoute><AdminPosts /></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />

            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            
            {/* About Routes */}
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/about/:section" element={<PublicLayout><AboutPage /></PublicLayout>} />
            
            {/* Product Routes */}
            <Route path="/products" element={<ProductsListPage />} />
            {/* Map product detail pages to use translations */}
            <Route path="/products/light" element={<ProductDetailPage categoryKey="light" />} />
            <Route path="/products/industry" element={<ProductDetailPage categoryKey="industry" />} />
            <Route path="/products/processing" element={<ProductDetailPage categoryKey="processing" />} />
            <Route path="/products/electronic" element={<ProductDetailPage categoryKey="electronic" />} />
            <Route path="/products/construction" element={<ProductDetailPage categoryKey="construction" />} />
            <Route path="/products/environmental" element={<ProductDetailPage categoryKey="environmental" />} />
            <Route path="/products/exterior" element={<ProductDetailPage categoryKey="exterior" />} />
            <Route path="/products/substitute" element={<ProductDetailPage categoryKey="substitute" />} />
            
            {/* Other Routes */}
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/quality" element={<PublicLayout><QualityPage /></PublicLayout>} />
            <Route path="/rnd" element={<PublicLayout><RndPage /></PublicLayout>} />
            
            {/* Replaced SupportPage with ContactPage */}
            <Route path="/support" element={<ContactPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SiteProvider>
    </AuthProvider>
  );
};

export default App;
