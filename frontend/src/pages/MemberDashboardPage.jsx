import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import '../styles/MemberDashboard.css';

const MemberDashboardPage = () => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myPlots, setMyPlots] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Load member's reserved/owned plots
    loadMyPlots();
    // Load announcements
    loadAnnouncements();
  }, []);

  const loadMyPlots = async () => {
    try {
      const response = await api.get('/member/my-plots');
      if (response.data.success) {
        setMyPlots(response.data.data || []);
      }
    } catch (err) {
      console.log('No plots found or API not ready');
      setMyPlots([]);
    }
  };

  const loadAnnouncements = async () => {
    try {
      const response = await api.get('/announcements');
      if (response.data.success) {
        setAnnouncements(response.data.data || []);
      }
    } catch (err) {
      // Default announcements if API not ready
      setAnnouncements([
        {
          id: 1,
          title: 'Bukas ang Sementeryo ng Undas',
          content: 'Oct 31 - Nov 2: 24 hours open para sa pagdalaw sa mga mahal sa buhay.',
          date: '2025-10-25'
        },
        {
          id: 2,
          title: 'Bagong Memorial Garden',
          content: 'Bagong section ng memorial garden ay bukas na para sa reservation.',
          date: '2025-10-01'
        }
      ]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
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
            <h1>Himlayan</h1>
          </div>
          <nav className="member-nav">
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
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Maligayang Pagdating, {user?.name}!</h2>
          <p>Ito ang iyong Member Dashboard sa Himlayang Pilipino Memorial Park</p>
        </section>

        {/* Quick Search */}
        <section className="search-section">
          <h3>🔍 Maghanap ng Mahal sa Buhay</h3>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Ilagay ang pangalan ng hinahanap..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn" disabled={loading}>
              {loading ? 'Naghahanap...' : 'Hanapin'}
            </button>
          </form>

          {searchResults.length > 0 && (
            <div className="search-results">
              <h4>Mga Resulta:</h4>
              {searchResults.map((result) => (
                <div key={result.id} className="result-card">
                  <div className="result-info">
                    <strong>{result.deceased_name}</strong>
                    <span>Plot: {result.plot?.plot_number || 'N/A'}</span>
                    <span>Section: {result.plot?.section || 'N/A'}</span>
                  </div>
                  <Link to={`/grave/${result.plot?.unique_code}`} className="view-btn">
                    Tingnan
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Actions Grid */}
        <section className="quick-actions">
          <h3>Mga Mabilisang Aksyon</h3>
          <div className="actions-grid">
            <Link to="/member/search" className="action-card">
              <span className="action-icon">🔍</span>
              <span className="action-label">Maghanap ng Puntod</span>
            </Link>
            <Link to="/member/map" className="action-card">
              <span className="action-icon">🗺️</span>
              <span className="action-label">Tingnan ang Mapa</span>
            </Link>
            <Link to="/member/services" className="action-card">
              <span className="action-icon">📋</span>
              <span className="action-label">Mga Serbisyo</span>
            </Link>
            <Link to="/member/contact" className="action-card">
              <span className="action-icon">📞</span>
              <span className="action-label">Makipag-ugnayan</span>
            </Link>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="dashboard-grid">
          {/* My Plots Section */}
          <section className="my-plots-section">
            <h3>📍 Mga Plot Ko</h3>
            {myPlots.length > 0 ? (
              <div className="plots-list">
                {myPlots.map((plot) => (
                  <div key={plot.id} className="plot-card">
                    <div className="plot-header">
                      <strong>{plot.plot_number}</strong>
                      <span className={`status-badge ${plot.status}`}>{plot.status}</span>
                    </div>
                    <div className="plot-details">
                      <span>Section: {plot.section}</span>
                      <span>Block: {plot.block}</span>
                    </div>
                    <Link to={`/grave/${plot.unique_code}`} className="plot-link">
                      Tingnan ang Detalye →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Wala ka pang naka-reserve o pag-aari na plot.</p>
                <Link to="/member/services" className="cta-btn">
                  Mag-inquire Ngayon
                </Link>
              </div>
            )}
          </section>

          {/* Announcements Section */}
          <section className="announcements-section">
            <h3>📢 Mga Anunsyo</h3>
            <div className="announcements-list">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="announcement-card">
                  <h4>{announcement.title}</h4>
                  <p>{announcement.content}</p>
                  <span className="announcement-date">{announcement.date}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Information */}
        <section className="contact-section">
          <h3>📞 Kailangan ng Tulong?</h3>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <strong>Address</strong>
              <p>240 Tandang Sora Ave, Quezon City, Metro Manila</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <strong>Telepono</strong>
              <p>(02) 8921-6947</p>
              <p>(02) 8453-4057</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">🕐</span>
              <strong>Oras ng Opisina</strong>
              <p>Lunes - Linggo: 6:00 AM - 6:00 PM</p>
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

export default MemberDashboardPage;
