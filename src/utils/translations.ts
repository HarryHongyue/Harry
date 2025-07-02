// 多语言翻译系统
export interface Translations {
  // Header Navigation
  home: string;
  about: string;
  projects: string;
  skills: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  viewMyWork: string;
  contactMe: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  aboutEducation: string;
  aboutLocation: string;
  aboutExperience: string;
  
  // Projects Section
  projectsTitle: string;
  projectsDescription: string;
  projectsAll: string;
  projectsWeb: string;
  projectsMobile: string;
  projectsOther: string;
  viewDetails: string;
  
  // Skills Section
  skillsTitle: string;
  skillsDescription: string;
  skillsProgramming: string;
  skillsFrameworks: string;
  skillsTools: string;
  
  // Contact Section
  contactTitle: string;
  contactDescription: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  contactSocial: string;
  contactName: string;
  contactSubject: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactSuccess: string;
  
  // Footer
  footerTagline: string;
  footerNavigation: string;
  footerConnect: string;
  footerLocation: string;
  footerEmail: string;
  footerCopyright: string;
}

export const translations: Record<string, Translations> = {
  en: {
    // Header Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: "Hello, I'm Harry Ji",
    heroSubtitle: 'Software Developer & Tech Enthusiast',
    heroDescription: 'I create innovative solutions and bring ideas to life through code.',
    viewMyWork: 'View My Work',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription1: 'I am a passionate software developer with expertise in creating user-friendly applications and websites. My journey in technology began with a curiosity about how things work, which evolved into a career building digital solutions.',
    aboutDescription2: 'I enjoy tackling complex problems and turning them into simple, beautiful, and intuitive designs. When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.',
    aboutEducation: 'Education: Computer Science',
    aboutLocation: 'Location: Available for Remote Work',
    aboutExperience: 'Experience: Full-Stack Development',
    
    // Projects Section
    projectsTitle: 'My Projects',
    projectsDescription: 'Here are some of the projects I\'ve worked on, showcasing my skills and creativity.',
    projectsAll: 'All',
    projectsWeb: 'Web',
    projectsMobile: 'Mobile',
    projectsOther: 'Other',
    viewDetails: 'View Details',
    
    // Skills Section
    skillsTitle: 'My Skills',
    skillsDescription: 'Technologies and tools I use to bring ideas to life.',
    skillsProgramming: 'Programming Languages',
    skillsFrameworks: 'Frameworks & Libraries',
    skillsTools: 'Tools & Technologies',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactDescription: 'Let\'s work together to create something amazing.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    contactSocial: 'Social Media',
    contactName: 'Name',
    contactSubject: 'Subject',
    contactMessage: 'Message',
    contactSend: 'Send Message',
    contactSending: 'Sending...',
    contactSuccess: 'Thank you! Your message has been sent successfully.',
    
    // Footer
    footerTagline: 'Building the future with code.\nFull-stack developer creating innovative\ndigital experiences and solutions.',
    footerNavigation: 'Navigation',
    footerConnect: 'Connect',
    footerLocation: 'Maastricht, NL',
    footerEmail: 'contact@harryji.dev',
    footerCopyright: '© 2024 Harry Ji. All rights reserved.'
  },
  
  zh: {
    // Header Navigation
    home: '首页',
    about: '关于我',
    projects: '项目',
    skills: '技能',
    contact: '联系',
    
    // Hero Section
    heroTitle: '你好，我是 Harry Ji',
    heroSubtitle: '软件开发者 & 技术爱好者',
    heroDescription: '我用代码创造创新解决方案，将想法变为现实。',
    viewMyWork: '查看我的作品',
    contactMe: '联系我',
    
    // About Section
    aboutTitle: '关于我',
    aboutDescription1: '我是一名充满激情的软件开发者，专注于创建用户友好的应用程序和网站。我的技术之旅始于对事物运作原理的好奇心，这种好奇心演变成了构建数字解决方案的职业生涯。',
    aboutDescription2: '我喜欢解决复杂问题，并将它们转化为简单、美观和直观的设计。当我不编程时，你可以发现我在探索新技术、为开源项目做贡献，或与社区分享知识。',
    aboutEducation: '教育背景：计算机科学',
    aboutLocation: '地点：可远程工作',
    aboutExperience: '经验：全栈开发',
    
    // Projects Section
    projectsTitle: '我的项目',
    projectsDescription: '这里展示了我参与的一些项目，体现了我的技能和创造力。',
    projectsAll: '全部',
    projectsWeb: '网页',
    projectsMobile: '移动端',
    projectsOther: '其他',
    viewDetails: '查看详情',
    
    // Skills Section
    skillsTitle: '我的技能',
    skillsDescription: '我用来实现想法的技术和工具。',
    skillsProgramming: '编程语言',
    skillsFrameworks: '框架和库',
    skillsTools: '工具和技术',
    
    // Contact Section
    contactTitle: '联系我',
    contactDescription: '让我们一起合作，创造令人惊叹的作品。',
    contactEmail: '邮箱',
    contactPhone: '电话',
    contactLocation: '地址',
    contactSocial: '社交媒体',
    contactName: '姓名',
    contactSubject: '主题',
    contactMessage: '消息',
    contactSend: '发送消息',
    contactSending: '发送中...',
    contactSuccess: '谢谢您！您的消息已成功发送。',
    
    // Footer
    footerTagline: '用代码构建未来。\n全栈开发者，创造创新的\n数字体验和解决方案。',
    footerNavigation: '导航',
    footerConnect: '联系方式',
    footerLocation: '荷兰 马斯特里赫特',
    footerEmail: 'contact@harryji.dev',
    footerCopyright: '© 2024 Harry Ji. 保留所有权利。'
  },
  
  nl: {
    // Header Navigation
    home: 'Home',
    about: 'Over Mij',
    projects: 'Projecten',
    skills: 'Vaardigheden',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Hallo, ik ben Harry Ji',
    heroSubtitle: 'Software Ontwikkelaar & Tech Enthousiast',
    heroDescription: 'Ik creëer innovatieve oplossingen en breng ideeën tot leven met code.',
    viewMyWork: 'Bekijk Mijn Werk',
    contactMe: 'Neem Contact Op',
    
    // About Section
    aboutTitle: 'Over Mij',
    aboutDescription1: 'Ik ben een gepassioneerde software ontwikkelaar met expertise in het creëren van gebruiksvriendelijke applicaties en websites. Mijn reis in technologie begon met nieuwsgierigheid naar hoe dingen werken, wat evolueerde naar een carrière in het bouwen van digitale oplossingen.',
    aboutDescription2: 'Ik geniet van het aanpakken van complexe problemen en het omzetten ervan in eenvoudige, mooie en intuïtieve ontwerpen. Wanneer ik niet aan het programmeren ben, kun je me vinden terwijl ik nieuwe technologieën verken, bijdraag aan open-source projecten, of kennis deel met de gemeenschap.',
    aboutEducation: 'Opleiding: Informatica',
    aboutLocation: 'Locatie: Beschikbaar voor Remote Werk',
    aboutExperience: 'Ervaring: Full-Stack Development',
    
    // Projects Section
    projectsTitle: 'Mijn Projecten',
    projectsDescription: 'Hier zijn enkele projecten waar ik aan heb gewerkt, die mijn vaardigheden en creativiteit tonen.',
    projectsAll: 'Alle',
    projectsWeb: 'Web',
    projectsMobile: 'Mobiel',
    projectsOther: 'Overig',
    viewDetails: 'Bekijk Details',
    
    // Skills Section
    skillsTitle: 'Mijn Vaardigheden',
    skillsDescription: 'Technologieën en tools die ik gebruik om ideeën tot leven te brengen.',
    skillsProgramming: 'Programmeertalen',
    skillsFrameworks: 'Frameworks & Libraries',
    skillsTools: 'Tools & Technologieën',
    
    // Contact Section
    contactTitle: 'Neem Contact Op',
    contactDescription: 'Laten we samenwerken om iets geweldigs te creëren.',
    contactEmail: 'E-mail',
    contactPhone: 'Telefoon',
    contactLocation: 'Locatie',
    contactSocial: 'Social Media',
    contactName: 'Naam',
    contactSubject: 'Onderwerp',
    contactMessage: 'Bericht',
    contactSend: 'Verstuur Bericht',
    contactSending: 'Verzenden...',
    contactSuccess: 'Dank je wel! Je bericht is succesvol verzonden.',
    
    // Footer
    footerTagline: 'De toekomst bouwen met code.\nFull-stack ontwikkelaar die innovatieve\ndigitale ervaringen en oplossingen creëert.',
    footerNavigation: 'Navigatie',
    footerConnect: 'Verbinden',
    footerLocation: 'Maastricht, NL',
    footerEmail: 'contact@harryji.dev',
    footerCopyright: '© 2024 Harry Ji. Alle rechten voorbehouden.'
  }
};

// 语言管理钩子
export const useLanguage = () => {
  const getCurrentLanguage = (): string => {
    if (typeof window !== 'undefined') {
      // 从自定义事件或默认值获取当前语言
      return (window as any).currentLanguage || 'en';
    }
    return 'en';
  };

  const getTranslation = (key: keyof Translations): string => {
    const currentLang = getCurrentLanguage();
    return translations[currentLang]?.[key] || translations['en'][key];
  };

  return { getTranslation, getCurrentLanguage };
};