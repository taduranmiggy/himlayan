import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import '../styles/MemberDashboard.css';

const MemberSearchPage = () => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setSearched(true);
    try {
      const response = await api.get(`/public/search?q=${encodeURIComponent(searchQuery)}`);
      if (response.data.success) {
        setSearchResults(response.data.data || []);
      }
    } catch (err) {
      console.error('Search error:', err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

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
            <Link to="/member/search" className="nav-link" style={{ color: '#ffd700' }}>Maghanap ng Puntod</Link>
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
          <h2>🔍 Maghanap ng Mahal sa Buhay</h2>
          <p>Ilagay ang pangalan ng iyong hinahanap para makita ang lokasyon ng kanilang puntod</p>
        </section>

        <section className="search-section" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Ilagay ang pangalan (hal. Juan Dela Cruz)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{ fontSize: '1.1rem' }}
            />
            <button type="submit" className="search-btn" disabled={loading}>
              {loading ? 'Naghahanap...' : 'Hanapin'}
            </button>
          </form>

          {/* Search Results */}
          {searched && (
            <div className="search-results" style={{ marginTop: '30px' }}>
              {searchResults.length > 0 ? (
                <>
                  <h4>Natagpuan: {searchResults.length} resulta</h4>
                  {searchResults.map((result) => (
                    <div key={result.id} className="result-card" style={{ padding: '20px' }}>
                      <div className="result-info">
                        <strong style={{ fontSize: '1.2rem' }}>{result.deceased_name}</strong>
                        <span>📍 Plot: {result.plot?.plot_number || 'N/A'}</span>
                        <span>📦 Section: {result.plot?.section || 'N/A'}, Block: {result.plot?.block || 'N/A'}</span>
                        {result.birth_date && result.death_date && (
                          <span>📅 {result.birth_date} - {result.death_date}</span>
                        )}
                      </div>
                      <Link to={`/grave/${result.plot?.unique_code}`} className="view-btn" style={{ padding: '12px 24px' }}>
                        Tingnan ang Detalye
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                <div className="empty-state" style={{ padding: '40px' }}>
                  <p style={{ fontSize: '1.1rem' }}>😔 Walang natagpuang resulta para sa "{searchQuery}"</p>
                  <p style={{ color: '#999' }}>Subukan ang ibang pangalan o makipag-ugnayan sa aming staff</p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Search Tips */}
        <section style={{ 
          background: '#fff9e6', 
          borderRadius: '15px', 
          padding: '25px', 
          maxWidth: '800px', 
          margin: '30px auto',
          borderLeft: '4px solid #ffc107'
        }}>
          <h3 style={{ color: '#1a472a', marginBottom: '15px' }}>💡 Mga Tip sa Paghahanap</h3>
          <ul style={{ color: '#555', lineHeight: '1.8' }}>
            <li>Gamitin ang buong pangalan para sa mas tiyak na resulta</li>
            <li>Kung hindi mo alam ang buong pangalan, subukan ang apelyido lamang</li>
            <li>Para sa tulong, makipag-ugnayan sa aming staff sa (02) 8921-6947</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="member-footer">
        <p>© 2025 Himlayang Pilipino Memorial Park. Lahat ng Karapatan ay Nakalaan.</p>
      </footer>
    </div>
  );
};

export default MemberSearchPage;
