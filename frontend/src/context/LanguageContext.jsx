import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Translation files
import en from '../translations/en';
import fil from '../translations/fil';

const translations = { en, fil };

const LanguageContext = createContext(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en',
      t: (key) => key,
      setLanguage: () => {},
      toggleLanguage: () => {},
    };
  }
  return context;
};

// Translation helper hook
export const useTranslation = () => {
  const { t, language } = useLanguage();
  return { t, language };
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('himlayan-language');
    return saved || 'en';
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem('himlayan-language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  // Translation function
  const t = useCallback((key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations['en'];
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    // If still not found, return the key
    if (value === undefined) {
      return key;
    }
    
    // Replace parameters like {name} with actual values
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{(\w+)\}/g, (_, param) => params[param] || `{${param}}`);
    }
    
    return value;
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => prev === 'en' ? 'fil' : 'en');
  }, []);

  const value = {
    language,
    t,
    setLanguage,
    toggleLanguage,
    isEnglish: language === 'en',
    isFilipino: language === 'fil',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
