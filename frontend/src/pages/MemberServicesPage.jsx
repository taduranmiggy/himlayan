import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/MemberDashboard.css';

const MemberServicesPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const services = [
    {
      icon: '🌿',
      title: 'Lawn Lots',
      description: 'Tradisyunal na burial lots sa maayos na lawn area. May iba\'t ibang laki depende sa pangangailangan.',
      features: ['Single o Family lots', 'Perpetual care included', 'Maayos na landscaping']
    },
    {
      icon: '🏛️',
      title: 'Columbarium Niches',
      description: 'Modernong mga nicho para sa cremated remains. Available sa iba\'t ibang floor at section.',
      features: ['Climate-controlled', 'Secured 24/7', 'Multiple sizes available']
    },
    {
      icon: '🏰',
      title: 'Mausoleum',
      description: 'Pribadong family tombs na may sariling structure. Perpekto para sa malalaking pamilya.',
      features: ['Custom designs', 'Multiple vault capacity', 'Exclusive area']
    },
    {
      icon: '🌅',
      title: 'Memorial Terrace',
      description: 'Elevated memorial area na may magandang view. Perpekto para sa mga nais ng peaceful na lugar.',
      features: ['Scenic views', 'Peaceful atmosphere', 'Well-maintained']
    },
    {
      icon: '⛪',
      title: 'Chapel Services',
      description: 'Ang chapel ay available para sa memorial masses at services.',
      features: ['Air-conditioned', 'Seating capacity: 100+', 'Audio-visual equipment']
    },
    {
      icon: '🚐',
      title: 'Burial Services',
      description: 'Kumpleto at maayos na burial assistance mula umpisa hanggang katapusan.',
      features: ['Coordination with funeral homes', 'Equipment rental', 'Staff assistance']
    }
  ];

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
            <Link to="/member/services" className="nav-link" style={{ color: '#ffd700' }}>Mga Serbisyo</Link>
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
          <h2>📋 Mga Serbisyo</h2>
          <p>Alamin ang iba't ibang serbisyo na inaalok ng Himlayang Pilipino Memorial Park</p>
        </section>

        {/* Services Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '25px',
          marginBottom: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <span style={{ fontSize: '2.5rem' }}>{service.icon}</span>
                <h3 style={{ color: '#1a472a', margin: 0 }}>{service.title}</h3>
              </div>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
                {service.description}
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                borderTop: '1px solid #eee',
                paddingTop: '15px'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    color: '#555', 
                    padding: '5px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: '#1a472a' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <section style={{
          background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginBottom: '15px' }}>💰 Mag-inquire ng Presyo</h3>
          <p style={{ opacity: 0.9, marginBottom: '20px' }}>
            Para sa presyo at available na lots, makipag-ugnayan sa aming sales office.
            May flexible payment plans kami para sa inyong kaginhawaan.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+6328921-6947" style={{
              background: 'white',
              color: '#1a472a',
              padding: '12px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              📞 Tumawag Ngayon
            </a>
            <Link to="/member/contact" style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.5)'
            }}>
              ✉️ Mag-send ng Inquiry
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ color: '#1a472a', marginBottom: '20px' }}>❓ Mga Karaniwang Tanong</h3>
          
          {[
            {
              q: 'Paano mag-reserve ng lot?',
              a: 'Pumunta sa aming office o tumawag sa (02) 8921-6947. Kailangan lang ng valid ID at initial payment.'
            },
            {
              q: 'May installment ba?',
              a: 'Oo, may flexible payment plans kami. Pwede monthly, quarterly, o yearly ang pagbayad.'
            },
            {
              q: 'Ano ang kasama sa perpetual care?',
              a: 'Kasama ang maintenance ng lawn, landscaping, at security ng buong memorial park.'
            },
            {
              q: 'Pwede bang bisitahin kahit kailan?',
              a: 'Ang park ay bukas araw-araw mula 6:00 AM hanggang 6:00 PM. Sa Undas, 24 hours kami bukas.'
            }
          ].map((faq, index) => (
            <div key={index} style={{
              borderBottom: index < 3 ? '1px solid #eee' : 'none',
              paddingBottom: '15px',
              marginBottom: '15px'
            }}>
              <h4 style={{ color: '#1a472a', marginBottom: '8px' }}>{faq.q}</h4>
              <p style={{ color: '#666', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="member-footer">
        <p>© 2025 Himlayang Pilipino Memorial Park. Lahat ng Karapatan ay Nakalaan.</p>
      </footer>
    </div>
  );
};

export default MemberServicesPage;
