import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/MemberDashboard.css';

const MemberMapPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="member-dashboard">
      {/* Header */}
      <header className="member-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🕊️</span>
            <Link to="/member/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
              <h1>Himlayan</h1>
            </Link>
          </div>
          <nav className="member-nav">
            <Link to="/member/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/member/search" className="nav-link">Maghanap ng Puntod</Link>
            <Link to="/member/map" className="nav-link" style={{ color: '#ffd700' }}>Mapa</Link>
            <Link to="/member/services" className="nav-link">Mga Serbisyo</Link>
          </nav>
          <div className="user-menu">
            <span className="user-name">👤 {user?.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="member-main">
        <section className="welcome-section">
          <h2>🗺️ Mapa ng Sementeryo</h2>
          <p>Tingnan ang layout ng Himlayang Pilipino Memorial Park</p>
        </section>

        {/* Map Container */}
        <section style={{ 
          background: 'white', 
          borderRadius: '15px', 
          padding: '25px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
            borderRadius: '10px',
            padding: '40px',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🗺️</div>
            <h3 style={{ color: '#1a472a', marginBottom: '15px' }}>Interactive Map - Coming Soon</h3>
            <p style={{ color: '#666', maxWidth: '500px' }}>
              Ang interactive na mapa ay malapit nang maging available. 
              Pansamantala, maaari kang tumawag sa aming office para sa directions.
            </p>
          </div>
        </section>

        {/* Cemetery Sections */}
        <section style={{ 
          background: 'white', 
          borderRadius: '15px', 
          padding: '25px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ color: '#1a472a', marginBottom: '20px' }}>📍 Mga Section ng Sementeryo</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { name: 'Lawn Section', icon: '🌿', desc: 'Tradisyunal na lawn lots' },
              { name: 'Garden Section', icon: '🌸', desc: 'Mga lot sa garden area' },
              { name: 'Columbarium', icon: '🏛️', desc: 'Mga nicho para sa cremated remains' },
              { name: 'Mausoleum', icon: '🏰', desc: 'Pribadong family tombs' },
              { name: 'Memorial Terrace', icon: '🌅', desc: 'Elevated memorial area' },
              { name: 'Heritage Section', icon: '📜', desc: 'Historical monuments area' }
            ].map((section, index) => (
              <div key={index} style={{
                background: '#f9f9f9',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                <h4 style={{ color: '#1a472a', margin: '10px 0 5px' }}>{section.name}</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{section.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Directions */}
        <section className="contact-section" style={{ marginTop: '30px' }}>
          <h3>📍 Paano Pumunta</h3>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">🚗</span>
              <strong>Via Sasakyan</strong>
              <p>Mula EDSA, lumiko sa Tandang Sora Ave. Ang entrance ay nasa kaliwa, malapit sa kanto.</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🚌</span>
              <strong>Via Commute</strong>
              <p>Sakay ng jeep papuntang Tandang Sora. Bumaba sa Himlayang Pilipino.</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <strong>May Tanong?</strong>
              <p>Tawagan kami: (02) 8921-6947</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="member-footer">
        <p>© 2025 Himlayang Pilipino Memorial Park. Lahat ng Karapatan ay Nakalaan.</p>
      </footer>
    </div>
  );
};

export default MemberMapPage;
