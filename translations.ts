
import { Language } from './types';

export const TRANSLATIONS = {
  KOR: {
    nav: {
      about: '회사소개',
      products: '제품소개',
      process: '공정소개',
      rnd: '연구소',
      support: '고객지원',
      contact: '견적문의',
      // Sub-menu items
      intro: '회사개요',
      history: '회사연혁',
      philosophy: '경영이념',
      cert: '인증현황',
      location: '오시는 길',
      light: '경량소재',
      industry: '산업용소재',
      processing: '가공소재',
      electronic: '전기전자부품소재',
      construction: '건축소재',
      environmental: '환경소재',
      exterior: '외장소재',
      substitute: '대체소재',
      production: '생산공정',
      quality: '품질검사'
    },
    hero: {
      badge: 'Total Aluminum Solutions',
      title_prefix: 'The Future of',
      title_highlight: 'Aluminum Technology',
      desc: '차별화된 기술력과 서비스로 알루미늄 압출 산업을 선도합니다.\n고객 맞춤형 설계부터 완벽한 납기까지, 우리는 기준을 만듭니다.',
      btn_main: '제품 살펴보기',
      btn_sub: '제품 소개'
    },
    common: {
      read_more: '자세히 보기',
      contact_us: '문의하기',
      scroll_down: 'Scroll Down'
    },
    footer: {
      lang_select: '언어 설정',
      daegu: '대구공장',
      changnyeong: '창녕공장',
      rights: '© 2024 DAEWOO METAL Co., Ltd. All Rights Reserved.',
      address_daegu: '대구광역시 달성군 구지면 달성2차동3로 46',
      address_changnyeong: '경남 창녕군 대합면 대합산업단지로 22-44',
      email_refusal: '이메일무단수집거부',
      privacy_policy: '개인정보취급방침',
    },
    philosophy: {
      label: '경영이념',
      title: '고객과 함께 성장하는 \n신뢰받는 파트너',
      desc: '대우경금속은 단순한 알루미늄 압출 제조사가 아닙니다.\n고객의 성공 비즈니스를 위한 알루미늄 압출 토탈 솔루션 기업입니다.',
      card_title: '10년 이상의 노하우로\n최고의 품질을 보장합니다.',
      val1_title: '고객 맞춤형 설계',
      val1_desc: '단순한 압출을 넘어, 고객의 요구사항을 정확히 파악하여\n최적의 압출금형 설계를 제안합니다.',
      val2_title: '완벽한 품질 관리',
      val2_desc: '피막, 기계가공 등 전 공정에 걸친\n엄격한 품질 관리 시스템을 운영합니다.',
      val3_title: '적기 적소 납기',
      val3_desc: '효율적인 생산 공정과 물류 시스템으로\n약속된 납기를 준수합니다.',
      stat_label: '연간 생산 능력 (Ton)',
      nonstop_title: '미래에 대한 도전과 도약',
      nonstop_desc: '“무한점프”는 미래를 향한 끊임없는 도전과 도약을 의미하며,\n대우경금속이 추구하는 핵심 가치입니다.',
      core_values_title: 'Core Values',
      cv_1_title: '고객감동',
      cv_1_sub: 'Customer Satisfaction',
      cv_1_desc: '단순한 만족을 넘어 감동을 선사합니다.\n고객의 성공이 곧 우리의 성공입니다.',
      cv_2_title: '혁신',
      cv_2_sub: 'Innovation',
      cv_2_desc: '현실에 안주하지 않는 도전정신으로\n새로운 가치를 창출하는 혁신경영을 실천합니다.',
      cv_3_title: '인재제일주의',
      cv_3_sub: 'Talent First',
      cv_3_desc: '사람이 미래입니다. 인재양성으로\n기업과 개인이 함께 성장합니다.'
    },
    history: {
      groups: [
        {
          year: '2025',
          events: [
            { date: '2025.04', desc: 'SEMES SSQ 자격 인증' }
          ]
        },
        {
          year: '2024',
          events: [
            { date: '2024.03', desc: '특허 1건 등록' }
          ]
        },
        {
          year: '2023',
          events: [
            { date: '2023.07', desc: '뿌리기업 선정' },
            { date: '2023.01', desc: '창립 10주년' }
          ]
        },
        {
          year: '2022',
          events: [
            { date: '2022.07', desc: '특허 1건 등록' },
            { date: '2022.04', desc: '특허 1건 등록' },
            { date: '2022.04', desc: '벤처기업확인기관 벤처기업인증' }
          ]
        },
        {
          year: '2021',
          events: [
            { date: '2021.05', desc: '무인라면조리기 오토분식 1호점 오픈' },
            { date: '2021.01', desc: '창녕공장 청년친화강소기업 선정' }
          ]
        },
        {
          year: '2020',
          events: [
            { date: '2020.12', desc: '중소기업R&D 우수성과 기업 확인' },
            { date: '2020.12', desc: '특허 2건 등록' },
            { date: '2020.09', desc: '특허 1건 등록' },
            { date: '2020.01', desc: '특허 1건 등록' }
          ]
        },
        {
          year: '2019',
          events: [
            { date: '2019.10', desc: 'IATF 16949 인증' },
            { date: '2019.08', desc: 'MES 도입' }
          ]
        },
        {
          year: '2018',
          events: [
            { date: '2018.12', desc: '특허 1건 등록' },
            { date: '2018.06', desc: '대구 스타플러스기업 선정' },
            { date: '2018.06', desc: '기술보증기금 스타벤처기업 선정' },
            { date: '2018.03', desc: '기술보증기금 벤처기업 인증' }
          ]
        },
        {
          year: '2017',
          events: [
            { date: '2017.12', desc: '대구 스타기업 100 선정' },
            { date: '2017.03', desc: '특허 2건 등록' }
          ]
        },
        {
          year: '2016',
          events: [
            { date: '2016.09', desc: 'DNV·GL 인증' },
            { date: '2016.08', desc: '2,000톤 압출라인 2호기 도입' },
            { date: '2016.07', desc: '창녕공장 준공' },
            { date: '2016.06', desc: '특허 2건 등록' },
            { date: '2016.04', desc: '이노비즈 인증(중소기업청)' },
            { date: '2016.03', desc: '"알루미" 상표등록' }
          ]
        },
        {
          year: '2014',
          events: [
            { date: '2014.05', desc: '기술연구소 분원 개설' },
            { date: '2014.03', desc: 'KS D 6759 인증' },
            { date: '2014.01', desc: '한국생산기술연구원 파트너기업 지정' }
          ]
        },
        {
          year: '2013',
          events: [
            { date: '2013.12', desc: '기업부설연구소 설립' },
            { date: '2013.07', desc: '벤처기업 인증(중소기업진흥공단)' },
            { date: '2013.06', desc: '으뜸기업 선정(중소기업진흥공단)' },
            { date: '2013.05', desc: '양산개시 ISO 9001 / 14001 인증' },
            { date: '2013.04', desc: '2,000톤 압출설비 도입 설치' },
            { date: '2013.01', desc: '(주)대우경금속 설립' }
          ]
        }
      ]
    },
    process: {
      steps: ['용해/주조', '압출', '열처리', '교정', '절단', '피막', '가공', '검사/포장']
    },
    rnd: {
      title: 'Innovation for Future',
      desc: '대우경금속은 고객 맞춤형 설계, 생산, 피막, 기계가공 및 적기적소의 납기까지 Total 서비스를 고객여러분께 제공하고 있습니다.',
      overview: {
        title: '개요',
        content: '대우경금속 기술연구소는 2013년에 설립이 되었으며, 우수한 연구인력과 최신 설비를 바탕으로 소재 개발, 신제품 개발, 공정 개선 등 급변하는 시장에 대응하여 끊임없이 노력하고 있습니다. 또한, 우수한 인적 자원 확보를 통해 자체 경쟁력을 확보해 가고 있으며, 산·학·연 협력을 통한 공동개발 프로젝트와 연구개발 외부인프라 구축을 통하여 보다 나은 제품 개발과 서비스로 고객님께 다가가고 있습니다.'
      },
      fields_title: '연구개발분야',
      fields: [
        {
          title: '소재개발',
          items: [
            '내구성 및 내식성 향상을 위한 신규 합금 개발',
            '경량화 신규 복합 소재 개발'
          ]
        },
        {
          title: '신제품개발',
          items: [
            '산업재 및 생활재 기반 제품 개발'
          ]
        },
        {
          title: '공정개선',
          items: [
            '알루미늄 제품 표면 코팅 및 개질 기술 개발',
            '공정개선 기술 개발 외'
          ]
        }
      ]
    },
    products: {
      title: 'Our Products',
      desc: '자동차, 전자, 건축 등 다양한 산업 분야에 적용되는 대우경금속만의 고품질 알루미늄 압출 제품을 만나보세요.',
      view_all: '전체 제품 보기',
      back_to: '제품소개로 돌아가기',
      detail_btn: '자세히 보기',
      modal: {
        feature_title: '제품 특징',
        features: [
          '고객 맞춤형 주문 제작 가능',
          '엄격한 품질 관리 및 테스트 통과',
          '다양한 산업 규격 준수'
        ],
        contact_btn: '더 알아보기',
        note: ''
      },
      items: {
        p1: { title: '경량소재', desc: '자동차 경량화를 위한 고강도 알루미늄 소재', badge: '더 가볍고 단단하게' },
        p2: { title: '산업용소재', desc: '다양한 산업 설비 및 기계 구조용 소재', badge: '산업의 기초를 탄탄하게' },
        p3: { title: '가공소재', desc: '정밀 가공성이 우수한 고품질 소재', badge: '정밀하고 원활한 가공' },
        p4: { title: '전기전자부품소재', desc: '전기 전도성과 방열성이 뛰어난 부품 소재', badge: '안전하고 효율적인 방열' },
        p5: { title: '건축소재', desc: '내구성과 심미성을 갖춘 건축 내외장재', badge: '아름답고 견고한 건축' },
        p6: { title: '환경소재', desc: '친환경 재활용이 가능한 지속 가능한 소재', badge: '지속 가능한 미래' },
        p7: { title: '외장소재', desc: '건물 및 제품의 외관을 돋보이게 하는 외장재', badge: '돋보이는 프리미엄 외관' },
        p8: { title: '대체소재', desc: '기존 금속을 대체하는 고성능 합금 소재', badge: '한계를 뛰어넘는 신소재' }
      },
      detail_page: {
        model_name: '제품 모델명',
        spec_desc: '규격 및 상세 스펙 설명'
      }
    },
    contact: {
      banner: {
        title: '프로젝트를 시작할 \n준비가 되셨나요?',
        desc: '대우경금속의 전문가들이 귀사의 비즈니스에 최적화된\n알루미늄 압출 솔루션을 제안해 드립니다.',
        btn: '견적 문의하기',
        hours: '평일 09:00 - 18:00 상담 가능'
      },
      info: {
        title: 'Contact Info',
        phone: '전화번호',
        email: '이메일',
        hours: '운영시간',
        hours_desc: '평일 09:00 - 18:00',
        closed: '주말 및 공휴일 휴무',
        view_map: '지도 자세히 보기',
        japan_branch: '일본 판매 법인'
      },
      form: {
        title: '견적 및 상담 문의',
        subtitle: '상세한 내용을 남겨주시면 정확한 상담이 가능합니다.',
        labels: {
          company: '회사명',
          name: '담당자 성함',
          phone: '연락처',
          email: '이메일',
          type: '문의 유형',
          message: '문의 내용',
          agreement: '[필수] 개인정보 수집 및 이용에 동의합니다.'
        },
        options: {
          inquiry: '견적 문의',
          tech: '기술 상담',
          recruit: '채용 문의',
          etc: '기타'
        },
        placeholders: {
          company: '(주)대우경금속',
          name: '홍길동',
          phone: '010-1234-5678',
          email: 'example@company.com',
          message: '제품 규격, 수량, 납기일 등 상세 내용을 입력해주시면 정확한 견적이 가능합니다.'
        },
        submit: '문의하기',
        submitting: '전송 중...',
        success_title: '문의가 접수되었습니다.',
        success_desc: '담당자가 내용 확인 후 기재해주신 연락처로\n빠른 시일 내에 답변 드리겠습니다.',
        retry: '추가 문의하기',
        error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.'
      }
    },
    pages: {
      intro: { title: '회사개요', subtitle: '대우경금속은 끊임없는 혁신으로 알루미늄 산업의 미래를 창조합니다.' },
      history: { title: '회사연혁', subtitle: '대우경금속이 걸어온 도전과 성장의 역사입니다.' },
      philosophy: { title: '경영이념', subtitle: '대우경금속이 추구하는 핵심 가치와 비전입니다.' },
      cert: { title: '인증현황', subtitle: '대우경금속의 품질과 기술력을 입증하는 각종 인증 현황입니다.' },
      location: { title: '오시는 길', subtitle: '대우경금속의 사업장 위치를 안내해 드립니다.' },
      process: { title: '공정소개', subtitle: '원자재 입고부터 출하까지 완벽을 추구하는 공정 시스템을 기반으로,\n대우경금속은 고객 맞춤형 설계, 생산, 피막, 기계가공, 적기 납기까지 전 과정을 아우르는 올인원 솔루션을 제공합니다.' },
      rnd: { title: '연구소', subtitle: '미래 소재 기술을 선도하는 R&D 센터' },
      support: { title: '고객지원', subtitle: '궁금하신 점이나 견적 문의를 남겨주세요.' }
    }
  },
  ENG: {
    nav: {
      about: 'About Us',
      products: 'Products',
      process: 'Process',
      rnd: 'R&D',
      support: 'Support',
      contact: 'Contact Us',
      intro: 'Overview',
      history: 'History',
      philosophy: 'Philosophy',
      cert: 'Certifications',
      location: 'Location',
      light: 'Lightweight',
      industry: 'Industrial',
      processing: 'Processing',
      electronic: 'Electronics',
      construction: 'Construction',
      environmental: 'Environmental',
      exterior: 'Exterior',
      substitute: 'Substitute',
      production: 'Production',
      quality: 'Quality'
    },
    hero: {
      badge: 'Total Aluminum Solutions',
      title_prefix: 'The Future of',
      title_highlight: 'Aluminum Technology',
      desc: 'Leading the aluminum industry with differentiated technology and service. From custom design to perfect delivery, we set the standard.',
      btn_main: 'View Products',
      btn_sub: 'View Products'
    },
    common: {
      read_more: 'Read More',
      contact_us: 'Contact Us',
      scroll_down: 'Scroll Down'
    },
    footer: {
      lang_select: 'Language',
      daegu: 'Daegu HQ',
      changnyeong: 'Changnyeong Factory',
      rights: '© 2024 DAEWOO METAL Co., Ltd. All Rights Reserved.',
      address_daegu: '46, Dalseong2chadong 3-ro, Guji-myeon, Dalseong-gun, Daegu',
      address_changnyeong: '22-44, Daehapsan-eopdanji-ro, Daehap-myeon, Changnyeong-gun, Gyeongnam',
      email_refusal: 'No Unauthorized Email Collection',
      privacy_policy: 'Privacy Policy',
    },
    philosophy: {
      label: 'Management Philosophy',
      title: 'A Trusted Partner \nGrowing with Customers',
      desc: 'Daewoo Light Metal is not just a manufacturer. \nWe are a Total Service Provider for your business success.',
      card_title: 'Over 30 Years of Know-how\nGuarantees Best Quality',
      val1_title: 'Customized Design',
      val1_desc: 'Beyond simple manufacturing, we analyze customer needs to propose optimal designs.',
      val2_title: 'Perfect Quality Control',
      val2_desc: 'We operate a strict quality control system across all processes including anodizing and machining.',
      val3_title: 'On-time Delivery',
      val3_desc: 'We strictly observe delivery deadlines with efficient production and logistics systems.',
      stat_label: 'Annual Capacity (Ton)',
      nonstop_title: 'Challenge & Leap for the Future',
      nonstop_desc: 'Meaning "Nonstop Jump", it represents our core value of constant challenge and leap towards the future.',
      core_values_title: 'Core Values',
      cv_1_title: 'Customer Satisfaction',
      cv_1_sub: 'Customer Satisfaction',
      cv_1_desc: 'We provide emotion beyond satisfaction. \nCustomer success is our success.',
      cv_2_title: 'Innovation',
      cv_2_sub: 'Innovation',
      cv_2_desc: 'We practice innovative management creating new value \nwith a challenging spirit that never settles.',
      cv_3_title: 'Talent First',
      cv_3_sub: 'Talent First',
      cv_3_desc: 'People are the future. Through talent development, \nthe company and individuals grow together.'
    },
    history: {
       groups: [
        {
          year: '2025',
          events: [
            { date: '2025.04', desc: 'SEMES SSQ Certification' }
          ]
        },
        {
          year: '2024',
          events: [
            { date: '2024.03', desc: 'Registered 1 Patent' }
          ]
        },
        {
          year: '2023',
          events: [
            { date: '2023.07', desc: 'Selected as Root Enterprise (Ppuri Enterprise)' },
            { date: '2023.01', desc: '10th Anniversary of Foundation' }
          ]
        },
        {
          year: '2022',
          events: [
            { date: '2022.07', desc: 'Registered 1 Patent' },
            { date: '2022.04', desc: 'Registered 1 Patent' },
            { date: '2022.04', desc: 'Venture Enterprise Certification (KOVA)' }
          ]
        },
        {
          year: '2021',
          events: [
            { date: '2021.05', desc: 'Opened Auto-Bunsik 1st store (Unmanned Ramen Cooker)' },
            { date: '2021.01', desc: 'Changnyeong Factory selected as Youth-Friendly Strong SME' }
          ]
        },
        {
          year: '2020',
          events: [
            { date: '2020.12', desc: 'Recognized as SME R&D Excellent Performance Company' },
            { date: '2020.12', desc: 'Registered 2 Patents' },
            { date: '2020.09', desc: 'Registered 1 Patent' },
            { date: '2020.01', desc: 'Registered 1 Patent' }
          ]
        },
        {
          year: '2019',
          events: [
            { date: '2019.10', desc: 'IATF 16949 Certification' },
            { date: '2019.08', desc: 'Introduced MES' }
          ]
        },
        {
          year: '2018',
          events: [
            { date: '2018.12', desc: 'Registered 1 Patent' },
            { date: '2018.06', desc: 'Selected as Daegu Star Plus Enterprise' },
            { date: '2018.06', desc: 'Selected as KIBO Star Venture Enterprise' },
            { date: '2018.03', desc: 'KIBO Venture Enterprise Certification' }
          ]
        },
        {
          year: '2017',
          events: [
            { date: '2017.12', desc: 'Selected as Daegu Star Enterprise 100' },
            { date: '2017.03', desc: 'Registered 2 Patents' }
          ]
        },
        {
          year: '2016',
          events: [
            { date: '2016.09', desc: 'DNV·GL Certification' },
            { date: '2016.08', desc: 'Introduced 2nd 2,000-ton Extrusion Line' },
            { date: '2016.07', desc: 'Completed Changnyeong Factory' },
            { date: '2016.06', desc: 'Registered 2 Patents' },
            { date: '2016.04', desc: 'Inno-Biz Certification' },
            { date: '2016.03', desc: 'Registered "ALUMI" Trademark' }
          ]
        },
        {
          year: '2014',
          events: [
            { date: '2014.05', desc: 'Opened R&D Center Branch' },
            { date: '2014.03', desc: 'KS D 6759 Certification' },
            { date: '2014.01', desc: 'Designated as KITECH Partner Company' }
          ]
        },
        {
          year: '2013',
          events: [
            { date: '2013.12', desc: 'Established Corporate R&D Center' },
            { date: '2013.07', desc: 'Venture Enterprise Certification' },
            { date: '2013.06', desc: 'Selected as Best Company (SBC)' },
            { date: '2013.05', desc: 'Mass Production ISO 9001/14001' },
            { date: '2013.04', desc: 'Installed 2,000-ton Extrusion Facility' },
            { date: '2013.01', desc: 'Established Daewoo Light Metal Co., Ltd.' }
          ]
        }
      ]
    },
    process: {
      steps: ['Melting/Casting', 'Extrusion', 'Heat Treatment', 'Straightening', 'Cutting', 'Anodizing', 'Machining', 'Inspection/Packing']
    },
    rnd: {
      title: 'Innovation for Future',
      desc: 'Daewoo Light Metal provides Total Services to our customers, from customized design and production to anodizing, machining, and timely delivery.',
      overview: {
        title: 'Overview',
        content: 'Established in 2013, the Daewoo Light Metal R&D Center is continuously striving to respond to the rapidly changing market based on excellent research personnel and the latest equipment, including material development, new product development, and process improvement. In addition, we are securing our own competitiveness by acquiring excellent human resources and approaching customers with better product development and services through joint development projects via industry-academia-research cooperation and the establishment of external R&D infrastructure.'
      },
      fields_title: 'R&D Fields',
      fields: [
        {
          title: 'Material Development',
          items: [
            'Development of new alloys for durability and corrosion resistance',
            'Development of new lightweight composite materials'
          ]
        },
        {
          title: 'New Product Dev',
          items: [
            'Development of products based on industrial and consumer goods'
          ]
        },
        {
          title: 'Process Improvement',
          items: [
            'Development of surface coating and modification technology',
            'Other process improvement technologies'
          ]
        }
      ]
    },
    products: {
      title: 'Our Products',
      desc: 'Discover Daewoo Light Metal\'s highest quality aluminum products \napplied to various industries including automotive, electronics, and construction.',
      view_all: 'View All',
      back_to: 'Back to products',
      detail_btn: 'Read More',
      modal: {
        feature_title: 'Product Features',
        features: [
          'Custom order manufacturing available',
          'Strict quality control and testing passed',
          'Compliant with various industrial standards'
        ],
        contact_btn: 'Learn more',
        note: ''
      },
      items: {
        p1: { title: 'Lightweight Materials', desc: 'High-strength aluminum for automotive weight reduction', badge: 'Light & Strong' },
        p2: { title: 'Industrial Materials', desc: 'Materials for various industrial equipment and structures', badge: 'Industrial Foundation' },
        p3: { title: 'Processed Materials', desc: 'High-quality materials with excellent machinability', badge: 'Precision Processing' },
        p4: { title: 'Electronic Parts', desc: 'Components with excellent conductivity and heat dissipation', badge: 'Efficient Heat Dissipation' },
        p5: { title: 'Construction Materials', desc: 'Durable and aesthetic architectural materials', badge: 'Durable Construction' },
        p6: { title: 'Eco Materials', desc: 'Eco-friendly, sustainable recyclable materials', badge: 'Sustainable Future' },
        p7: { title: 'Exterior Materials', desc: 'Exterior materials that enhance building appearance', badge: 'Premium Exterior' },
        p8: { title: 'Substitute Materials', desc: 'High-performance alloys replacing existing metals', badge: 'Advanced Substitute' }
      },
      detail_page: {
        model_name: 'Product Model',
        spec_desc: 'Specs and detailed description'
      }
    },
    contact: {
      banner: {
        title: 'Ready to Start \nYour Project?',
        desc: 'Our experts will propose the optimized aluminum extrusion solution \nfor your business.',
        btn: 'Get a Quote',
        hours: 'Mon-Fri 09:00 - 18:00'
      },
      info: {
        title: 'Contact Info',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
        hours_desc: 'Mon-Fri 09:00 - 18:00',
        closed: 'Closed on Weekends & Holidays',
        view_map: 'View Map',
        japan_branch: 'Japan Branch'
      },
      form: {
        title: 'Inquiry & Consultation',
        subtitle: 'Please leave details for an accurate consultation.',
        labels: {
          company: 'Company Name',
          name: 'Contact Person',
          phone: 'Phone Number',
          email: 'Email',
          type: 'Inquiry Type',
          message: 'Message',
          agreement: '[Required] I agree to the collection and use of personal information.'
        },
        options: {
          inquiry: 'Quotation',
          tech: 'Technical Consult',
          recruit: 'Recruitment',
          etc: 'Others'
        },
        placeholders: {
          company: 'Daewoo Light Metal Co., Ltd.',
          name: 'John Doe',
          phone: '+82 10-1234-5678',
          email: 'example@company.com',
          message: 'Please provide details such as product specs, quantity, and delivery date.'
        },
        submit: 'Submit',
        submitting: 'Sending...',
        success_title: 'Inquiry Submitted',
        success_desc: 'We will check the details and respond to you shortly.',
        retry: 'Send Another',
        error: 'Failed to send. Please try again later.'
      }
    },
    pages: {
      intro: { title: 'Company Overview', subtitle: 'Daewoo Light Metal creates the future of the aluminum industry with constant innovation.' },
      history: { title: 'History', subtitle: 'The history of challenge and growth of Daewoo Light Metal.' },
      philosophy: { title: 'Philosophy', subtitle: 'Core values and vision pursued by Daewoo Light Metal.' },
      cert: { title: 'Certifications', subtitle: 'Various certifications proving our quality and technology.' },
      location: { title: 'Location', subtitle: 'Guide to our business locations.' },
      process: { title: 'Process', subtitle: 'Perfect process system from raw material to shipment' },
      rnd: { title: 'R&D', subtitle: 'R&D Center leading future material technology' },
      support: { title: 'Support', subtitle: 'Please leave any questions or quote inquiries.' }
    }
  },
  JPN: {
    nav: {
      about: '会社案内',
      products: '製品紹介',
      process: '生産工程',
      rnd: '研究所',
      support: '顧客サポート',
      contact: 'お問い合わせ',
      intro: '会社概要',
      history: '会社沿革',
      philosophy: '経営理念',
      cert: '認証現況',
      location: 'アクセス',
      light: '軽量素材',
      industry: '産業用素材',
      processing: '加工素材',
      electronic: '電気電子部品素材',
      construction: '建築素材',
      environmental: '環境素材',
      exterior: '外装素材',
      substitute: '代替素材',
      production: '生産工程',
      quality: '品質検査'
    },
    hero: {
      badge: 'Total Aluminum Solutions',
      title_prefix: 'The Future of',
      title_highlight: 'Aluminum Technology',
      desc: '差別化された技術力とサービスでアルミニウム産業をリードします。顧客に合わせた設計から完璧な納期まで、私たちが基準を作ります。',
      btn_main: '製品を見る',
      btn_sub: '製品紹介'
    },
    common: {
      read_more: '詳しく見る',
      contact_us: 'お問い合わせ',
      scroll_down: 'Scroll Down'
    },
    footer: {
      lang_select: '言語設定',
      daegu: '大邱本社/第1工場',
      changnyeong: '昌寧第2工場',
      rights: '© 2024 DAEWOO METAL Co., Ltd. All Rights Reserved.',
      address_daegu: '大邱広域市 達城郡 求智面 達城2次東3路 46',
      address_changnyeong: '慶南 昌寧郡 大合面 大合産業団地路 22-44',
      email_refusal: 'メールアドレス無断収集拒否',
      privacy_policy: '個人情報処理方針',
    },
    philosophy: {
      label: 'Management Philosophy',
      title: '顧客と共に成長する\n信頼されるパートナー',
      desc: '大宇軽金属は単なるアルミニウムメーカーではありません。\n顧客のビジネス成功のためのTotal Service Providerです。',
      card_title: '30年以上のノウハウで\n最高の品質を保証します。',
      val1_title: '顧客カスタマイズ設計',
      val1_desc: '単なる製造を超え、顧客の要求事項を正確に把握し、最適な設計を提案します。',
      val2_title: '完璧な品質管理',
      val2_desc: '皮膜、機械加工など全工程にわたる厳格な品質管理システムを運営しています。',
      val3_title: '適期適所の納期',
      val3_desc: '効率的な生産工程と物流システムで約束された納期を遵守します。',
      stat_label: '年間生産能力 (Ton)',
      nonstop_title: '未来への挑戦と飛躍',
      nonstop_desc: '「無限ジャンプ」という意味で、未来への挑戦と飛躍、当社が追求する核心価値です。',
      core_values_title: 'Core Values',
      cv_1_title: '顧客感動',
      cv_1_sub: 'Customer Satisfaction',
      cv_1_desc: '単純な満足を超えて感動をお届けします。\n顧客の成功がすなわち私たちの成功です。',
      cv_2_title: '革新',
      cv_2_sub: 'Innovation',
      cv_2_desc: '現実に安住しない挑戦精神で\n新しい価値を創出する革新経営を実践します。',
      cv_3_title: '人材第一主義',
      cv_3_sub: 'Talent First',
      cv_3_desc: '人が未来です。人材育成により\n企業と個人が共に成長します。'
    },
    history: {
       groups: [
        {
          year: '2025',
          events: [
            { date: '2025.04', desc: 'SEMES SSQ 資格認証' }
          ]
        },
        {
          year: '2024',
          events: [
            { date: '2024.03', desc: '特許1件登録' }
          ]
        },
        {
          year: '2023',
          events: [
            { date: '2023.07', desc: '根幹(ププリ)企業選定' },
            { date: '2023.01', desc: '創立10周年' }
          ]
        },
        {
          year: '2022',
          events: [
            { date: '2022.07', desc: '特許1件登録' },
            { date: '2022.04', desc: '特許1件登録' },
            { date: '2022.04', desc: 'ベンチャー企業確認機関 ベンチャー企業認証' }
          ]
        },
        {
          year: '2021',
          events: [
            { date: '2021.05', desc: '無人ラーメン調理器 オート粉食 1号店オープン' },
            { date: '2021.01', desc: '昌寧工場 青年親和強小企業選定' }
          ]
        },
        {
          year: '2020',
          events: [
            { date: '2020.12', desc: '中小企業R&D優秀成果企業確認' },
            { date: '2020.12', desc: '特許2件登録' },
            { date: '2020.09', desc: '特許1件登録' },
            { date: '2020.01', desc: '特許1件登録' }
          ]
        },
        {
          year: '2019',
          events: [
            { date: '2019.10', desc: 'IATF 16949 認証' },
            { date: '2019.08', desc: 'MES導入' }
          ]
        },
        {
          year: '2018',
          events: [
            { date: '2018.12', desc: '特許1件登録' },
            { date: '2018.06', desc: '大邱スタンプラス企業選定' },
            { date: '2018.06', desc: '技術保証基金 スターベンチャー企業選定' },
            { date: '2018.03', desc: '技術保証基金 ベンチャー企業認証' }
          ]
        },
        {
          year: '2017',
          events: [
            { date: '2017.12', desc: '大邱スター企業100選定' },
            { date: '2017.03', desc: '特許2件登録' }
          ]
        },
        {
          year: '2016',
          events: [
            { date: '2016.09', desc: 'DNV·GL 認証' },
            { date: '2016.08', desc: '2,000トン押出ライン2号機導入' },
            { date: '2016.07', desc: '昌寧工場 竣工' },
            { date: '2016.06', desc: '特許2件登録' },
            { date: '2016.04', desc: 'イノビズ認証(中小企業庁)' },
            { date: '2016.03', desc: '「アル美」商標登録' }
          ]
        },
        {
          year: '2014',
          events: [
            { date: '2014.05', desc: '技術研究所分院 開設' },
            { date: '2014.03', desc: 'KS D 6759 認証' },
            { date: '2014.01', desc: '韓国生産技術研究院パートナー企業指定' }
          ]
        },
        {
          year: '2013',
          events: [
            { date: '2013.12', desc: '企業付設研究所 設立' },
            { date: '2013.07', desc: 'ベンチャー企業認証(中小企業振興公団)' },
            { date: '2013.06', desc: '優秀企業選定(中小企業振興公団)' },
            { date: '2013.05', desc: '量産開始 ISO 9001 / 14001 認証' },
            { date: '2013.04', desc: '2,000トン押出設備導入・設置' },
            { date: '2013.01', desc: '(株)大宇軽金属 設立' }
          ]
        }
      ]
    },
    process: {
      steps: ['溶解/鋳造', '押出', '熱処理', '矯正', '切断', '皮膜', '加工', '検査/梱包']
    },
    rnd: {
      title: 'Innovation for Future',
      desc: '大宇軽金属は、顧客適合型の設計、生産、被膜、機械加工からタイムリーな納期まで、お客様にトータルサービスを提供しています。',
      overview: {
        title: '概要',
        content: '大宇軽金属の技術研究所は2013年に設立され、優秀な研究人員と最新の設備をもとに、素材開発、新製品開発、工程改善など、急変する市場に対応するために絶えず努力しています。また、優秀な人的資源の確保を通じて自社競争力を確保しており、産・学・研の協力を通じた共同開発プロジェクトや研究開発の外部インフラ構築を通じて、より良い製品開発とサービスでお客様のニーズにお応えしています。'
      },
      fields_title: '研究開発分野',
      fields: [
        {
          title: '素材開発',
          items: [
            '耐久性および耐食性向上のための新規合金開発',
            '軽量化新規複合素材開発'
          ]
        },
        {
          title: '新製品開発',
          items: [
            '産業材および生活材基盤の製品開発'
          ]
        },
        {
          title: '工程改善',
          items: [
            'アルミニウム製品の表面コーティングおよび改質技術開発',
            '工程改善技術開発 ほか'
          ]
        }
      ]
    },
    products: {
      title: 'Our Products',
      desc: '自動車、電子、建築など様々な産業分野に適用される\n大宇軽金属だけの最高品質のアルミニウム製品をご覧ください。',
      view_all: '全製品を見る',
      back_to: '製品紹介に戻る',
      detail_btn: '詳しく見る',
      modal: {
        feature_title: '製品の特徴',
        features: [
          '顧客カスタマイズ注文製作可能',
          '厳格な品質管理およびテスト通過',
          '様々な産業規格を遵守'
        ],
        contact_btn: '詳細を見る',
        note: ''
      },
      items: {
        p1: { title: '軽量素材', desc: '自動車軽量化のための高強度アルミニウム素材', badge: 'より軽く頑丈に' },
        p2: { title: '産業用素材', desc: '様々な産業設備および機械構造用素材', badge: '産業の基盤を強固に' },
        p3: { title: '加工素材', desc: '精密加工性に優れた高品質素材', badge: '精密で完璧な加工' },
        p4: { title: '電気電子部品素材', desc: '電気伝導性と放熱性に優れた部品素材', badge: '安全で効率的な放熱' },
        p5: { title: '建築素材', desc: '耐久性と審美性を備えた建築内外装材', badge: '美しく堅牢な建築' },
        p6: { title: '環境素材', desc: '環境に優しいリサイクル可能な持続可能な素材', badge: '持続可能な未来' },
        p7: { title: '外装素材', desc: '建物や製品の外観を引き立てる外装材', badge: '際立つプレミアム外観' },
        p8: { title: '代替素材', desc: '既存の金属に代わる高性能合金素材', badge: '限界を超える新素材' }
      },
      detail_page: {
        model_name: '製品モデル名',
        spec_desc: '規格および詳細スペック説明'
      }
    },
    contact: {
      banner: {
        title: 'プロジェクトを始める\n準備はできましたか？',
        desc: '大宇軽金属の専門家が御社のビジネスに最適化された\nアルミニウム押出ソリューションを提案します。',
        btn: '見積もりのお問い合わせ',
        hours: '平日 09:00 - 18:00 相談可能'
      },
      info: {
        title: 'Contact Info',
        phone: '電話番号',
        email: 'メールアドレス',
        hours: '営業時間',
        hours_desc: '平日 09:00 - 18:00',
        closed: '週末および祝日は休業',
        view_map: '地図を詳しく見る',
        japan_branch: '日本販売法人'
      },
      form: {
        title: '見積もりおよび相談のお問い合わせ',
        subtitle: '詳細な内容を残していただければ、正確な相談が可能です。',
        labels: {
          company: '会社名',
          name: '担当者名',
          phone: '連絡先',
          email: 'メールアドレス',
          type: 'お問い合わせタイプ',
          message: 'お問い合わせ内容',
          agreement: '[必須] 個人情報の収集および利用に同意します。'
        },
        options: {
          inquiry: '見積もりのお問い合わせ',
          tech: '技術相談',
          recruit: '採用のお問い合わせ',
          etc: 'その他'
        },
        placeholders: {
          company: '(株)大宇軽金属',
          name: '山田 太郎',
          phone: '010-1234-5678',
          email: 'example@company.com',
          message: '製品規格、数量、納期など詳細内容を入力していただければ、正確な見積もりが可能です。'
        },
        submit: 'お問い合わせ',
        submitting: '送信中...',
        success_title: 'お問い合わせを受け付けました。',
        success_desc: '担当者が内容を確認後、記載していただいた連絡先に\n早急に回答いたします。',
        retry: '追加のお問い合わせ',
        error: '送信に失敗しました。しばらくしてからもう一度お試しください。'
      }
    },
    pages: {
      intro: { title: '会社概要', subtitle: '大宇軽金属は絶え間ない革新でアルミニウム産業の未来を創造します。' },
      history: { title: '会社沿革', subtitle: '大宇軽金属が歩んできた挑戦と成長の歴史です。' },
      philosophy: { title: '経営理念', subtitle: '大宇軽金属が追求する核心価値とビジョンです。' },
      cert: { title: '認証現況', subtitle: '大宇軽金属の品質と技術力を証明する各種認証現況です。' },
      location: { title: 'アクセス', subtitle: '大宇軽金属の事業所の位置をご案内します。' },
      process: { title: '生産工程', subtitle: '原材料の入庫から出荷まで、完璧を期す工程システム' },
      rnd: { title: '研究所', subtitle: '未来素材技術をリードするR&Dセンター' },
      support: { title: '顧客サポート', subtitle: 'ご不明な点や見積もりのお問い合わせを残してください。' }
    }
  }
};

export const getTranslation = (lang: Language) => TRANSLATIONS[lang];
