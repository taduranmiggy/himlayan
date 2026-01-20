import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ variant = 'default' }) => {
  const { language, setLanguage, isEnglish, isFilipino } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'fil', label: 'Filipino', flag: '🇵🇭', short: 'FIL' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  if (variant === 'toggle') {
    return (
      <button 
        className="language-toggle"
        onClick={() => setLanguage(isEnglish ? 'fil' : 'en')}
        title={isEnglish ? 'Switch to Filipino' : 'Switch to English'}
      >
        <span className="toggle-flag">{isEnglish ? '🇺🇸' : '🇵🇭'}</span>
        <span className="toggle-label">{isEnglish ? 'EN' : 'FIL'}</span>
      </button>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="language-switcher minimal" ref={dropdownRef}>
        <button 
          className="lang-btn minimal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentLang.flag}
        </button>
        
        {isOpen && (
          <div className="lang-dropdown">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`lang-option ${lang.code === language ? 'active' : ''}`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-label">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="lang-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-label">{currentLang.label}</span>
        <span className="lang-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown" role="listbox">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-option ${lang.code === language ? 'active' : ''}`}
              onClick={() => handleSelect(lang.code)}
              role="option"
              aria-selected={lang.code === language}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-label">{lang.label}</span>
              {lang.code === language && <span className="lang-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
