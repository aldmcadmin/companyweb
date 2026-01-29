
import { Language } from './types';

export const TRANSLATIONS = {
  KOR: {
    nav: {
      about: '회사소개',
      products: '제품소개',
      process: '생산공정',
      rnd: '연구소',
      support: '고객지원',
      contact: '견적문의'
    },
    hero: {
      badge: 'Total Aluminum Solutions',
      title_prefix: 'The Future of',
      title_highlight: 'Aluminum Technology',
      desc: '차별화된 기술력과 서비스로 알루미늄 산업을 선도합니다. 고객 맞춤형 설계부터 완벽한 납기까지, 우리는 기준을 만듭니다.',
      btn_main: '경영이념 살펴보기',
      btn_sub: '제품 소개'
    },
    common: {
      read_more: '자세히 보기',
      contact_us: '문의하기',
      scroll_down: 'Scroll Down'
    }
  },
  ENG: {
    nav: {
      about: 'About Us',
      products: 'Products',
      process: 'Process',
      rnd: 'R&D',
      support: 'Support',
      contact: 'Contact Us'
    },
    hero: {
      badge: 'Total Aluminum Solutions',
      title_prefix: 'The Future of',
      title_highlight: 'Aluminum Technology',
      desc: 'Leading the aluminum industry with differentiated technology and service. From custom design to perfect delivery, we set the standard.',
      btn_main: 'Our Philosophy',
      btn_sub: 'View Products'
    },
    common: {
      read_more: 'Read More',
      contact_us: 'Contact Us',
      scroll_down: 'Scroll Down'
    }
  },
  JPN: {
    nav: {
      about: '会社案内',
      products: '製品紹介',
      process: '生産工程',
      rnd: '研究所',
      support: '顧客サポート',
      contact: 'お問い合わせ'
    },
    hero: {
      badge: 'Total Aluminum Solutions',
      title_prefix: 'The Future of',
      title_highlight: 'Aluminum Technology',
      desc: '差別化された技術力とサービスでアルミニウム産業をリードします。顧客に合わせた設計から完璧な納期まで、私たちが基準を作ります。',
      btn_main: '経営理念を見る',
      btn_sub: '製品紹介'
    },
    common: {
      read_more: '詳しく見る',
      contact_us: 'お問い合わせ',
      scroll_down: 'Scroll Down'
    }
  }
};

export const getTranslation = (lang: Language) => TRANSLATIONS[lang];
