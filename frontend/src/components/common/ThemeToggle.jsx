import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-track">
        <span className="theme-toggle-icon sun">☀️</span>
        <span className="theme-toggle-icon moon">🌙</span>
        <div className={`theme-toggle-thumb ${theme}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
