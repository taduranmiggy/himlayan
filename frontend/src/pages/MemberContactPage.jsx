import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/MemberDashboard.css';

const MemberContactPage = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ subject: '', message: '' });
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
            <Link to="/member/map" className="nav-link">Mapa</Link>
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
          <h2>📞 Makipag-ugnayan</h2>
          <p>Kami ay handang tumulong sa inyong mga katanungan</p>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {/* Contact Information */}
          <section style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: '#1a472a', marginBottom: '25px' }}>📍 Impormasyon sa Pakikipag-ugnayan</h3>
            
            <div style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <div>
                  <strong style={{ color: '#1a472a', display: 'block', marginBottom: '5px' }}>Address</strong>
                  <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                    240 Tandang Sora Avenue<br />
                    Barangay Culiat<br />
                    Quezon City, Metro Manila 1128
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                <div>
                  <strong style={{ color: '#1a472a', display: 'block', marginBottom: '5px' }}>Telephone</strong>
                  <p style={{ color: '#666', margin: 0 }}>
                    <a href="tel:+6328921-6947" style={{ color: '#1a472a' }}>(02) 8921-6947</a><br />
                    <a href="tel:+6328453-4057" style={{ color: '#1a472a' }}>(02) 8453-4057</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.5rem' }}>📧</span>
                <div>
                  <strong style={{ color: '#1a472a', display: 'block', marginBottom: '5px' }}>Email</strong>
                  <p style={{ color: '#666', margin: 0 }}>
                    <a href="mailto:info@himlayan.ph" style={{ color: '#1a472a' }}>info@himlayan.ph</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <span style={{ fontSize: '1.5rem' }}>🕐</span>
                <div>
                  <strong style={{ color: '#1a472a', display: 'block', marginBottom: '5px' }}>Oras ng Opisina</strong>
                  <p style={{ color: '#666', margin: 0 }}>
                    Lunes - Linggo: 6:00 AM - 6:00 PM<br />
                    <em style={{ fontSize: '0.9rem' }}>Undas: 24 hours (Oct 31 - Nov 2)</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Call Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="tel:+6328921-6947" style={{
                background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                📞 Tumawag
              </a>
              <a href="https://maps.google.com/?q=Himlayang+Pilipino+Memorial+Park+Quezon+City" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: '#f0f0f0',
                  color: '#1a472a',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                🗺️ Buksan sa Maps
              </a>
            </div>
          </section>

          {/* Contact Form */}
          <section style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: '#1a472a', marginBottom: '25px' }}>✉️ Mag-send ng Mensahe</h3>
            
            {submitted ? (
              <div style={{
                background: '#d4edda',
                border: '1px solid #c3e6cb',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                color: '#155724'
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>✅</span>
                <strong>Naipadala na ang iyong mensahe!</strong>
                <p style={{ margin: '10px 0 0' }}>Makakatanggap ka ng sagot sa loob ng 24-48 oras.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                    Iyong Pangalan
                  </label>
                  <input
                    type="text"
                    value={user?.name || ''}
                    disabled
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      background: '#f5f5f5',
                      color: '#666'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                    Iyong Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      background: '#f5f5f5',
                      color: '#666'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                    Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      background: 'white'
                    }}
                  >
                    <option value="">Piliin ang paksa...</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="reservation">Lot Reservation</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="visitation">Visitation Assistance</option>
                    <option value="maintenance">Maintenance Concern</option>
                    <option value="other">Iba pa</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>
                    Mensahe *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Isulat dito ang iyong mensahe..."
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  📤 Ipadala ang Mensahe
                </button>
              </form>
            )}
          </section>
        </div>

        {/* Emergency Contact */}
        <section style={{
          background: '#fff3cd',
          borderRadius: '15px',
          padding: '25px',
          marginTop: '30px',
          borderLeft: '4px solid #ffc107'
        }}>
          <h3 style={{ color: '#856404', marginBottom: '15px' }}>🚨 Emergency o Urgent na Concern?</h3>
          <p style={{ color: '#856404', marginBottom: '15px' }}>
            Para sa mabilisang tulong, tumawag direkta sa aming hotline:
          </p>
          <a href="tel:+6328921-6947" style={{
            background: '#ffc107',
            color: '#856404',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            📞 (02) 8921-6947
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="member-footer">
        <p>© 2025 Himlayang Pilipino Memorial Park. Lahat ng Karapatan ay Nakalaan.</p>
      </footer>
    </div>
  );
};

export default MemberContactPage;
