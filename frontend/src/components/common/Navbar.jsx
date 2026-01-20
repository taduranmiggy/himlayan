import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🏛️</span>
        <h1>Himlayan</h1>
      </div>
      <div className="navbar-actions">
        <LanguageSwitcher variant="toggle" />
        <ThemeToggle />
        <div className="navbar-user">
          <span className="user-name">{user?.name}</span>
          <span className="user-role">({user?.role})</span>
          <button className="logout-btn" onClick={handleLogout}>
            {t('nav.logout')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
