
import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: '회사소개',
    path: '/about',
    subItems: [
      { label: '회사개요', path: '/about/intro' },
      { label: '회사연혁', path: '/about/history' },
      { label: '경영이념', path: '/about' },
      { label: '인증현황', path: '/about/cer' }, // Added Certifications
      { label: '오시는 길', path: '/about/location' },
    ]
  },
  {
    label: '제품소개',
    path: '/products',
    subItems: [
      { label: '경량소재', path: '/products/light' },
      { label: '산업용소재', path: '/products/industry' },
      { label: '가공소재', path: '/products/processing' },
      { label: '건축소재', path: '/products/construction' },
    ]
  },
  {
    label: '생산공정',
    path: '/process',
  },
  {
    label: '연구소',
    path: '/rnd',
  },
  {
    label: '고객지원',
    path: '/support',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: '경량 소재',
    category: 'Automotive',
    description: '고강도, 경량화 실현을 위한 자동차 부품 소재',
    imageUrl: 'https://picsum.photos/id/20/600/400'
  },
  {
    id: 'p2',
    title: '산업용 소재',
    category: 'Industrial',
    description: '다양한 산업 현장에 적용되는 고품질 알루미늄',
    imageUrl: 'https://picsum.photos/id/1/600/400'
  },
  {
    id: 'p3',
    title: '전자 부품',
    category: 'Electronics',
    description: '정밀한 가공이 요구되는 전기/전자 핵심 부품',
    imageUrl: 'https://picsum.photos/id/3/600/400'
  },
  {
    id: 'p4',
    title: '건축 자재',
    category: 'Construction',
    description: '미려한 외관과 내구성을 갖춘 건축용 프로파일',
    imageUrl: 'https://picsum.photos/id/10/600/400'
  }
];
