import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations } from '../utils/translations';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    // 从 localStorage 读取保存的语言
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    // 监听语言变化事件
    const handleLanguageChange = (event: CustomEvent) => {
      const lang = event.detail;
      setCurrentLanguage(lang);
      localStorage.setItem('language', lang);
      // 同时设置全局变量供其他组件使用
      (window as any).currentLanguage = lang;
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    // 初始化时设置全局变量
    (window as any).currentLanguage = currentLanguage;

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    (window as any).currentLanguage = lang;
    // 触发语言变化事件
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  const t = (key: keyof Translations): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};