import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/common/LanguageSwitcher';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="landing-nav-container">
          <Link to="/" className="landing-logo">
            <span className="logo-icon">🏔️</span>
            <span className="logo-text">Himlayan</span>
          </Link>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <ul className={`landing-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#arts">Arts & Landmarks</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>

          <div className="landing-nav-actions">
            <LanguageSwitcher variant="toggle" />
            <Link to="/login" className="btn-nav-login">{t('auth.login')}</Link>
            <Link to="/register" className="btn-nav-register">{t('landing.cta')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="landing-hero">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">🌿 Premier Memorial Park in Quezon City</span>
            <h1>Himlayang Pilipino<br /><span className="text-gradient">Memorial Park</span></h1>
            <p>
              A premier memorial park located in Barangay Pasong Tamo, Tandang Sora, Quezon City, 
              Philippines. We offer a comprehensive range of burial products including columbaries, 
              lawn lots, mausoleums, and memorial terraces — allowing families to choose a meaningful 
              final resting place for their loved ones.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn btn-hero-primary">
                Get Started
                <span>→</span>
              </Link>
              <a href="#services" className="btn btn-hero-secondary">
                <span className="play-icon">▶</span>
                Explore Services
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">37+</span>
                <span className="stat-label">Hectares</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">1971</span>
                <span className="stat-label">Established</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Years of Service</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              <div className="card-header-demo">
                <span className="card-dot"></span>
                <span className="card-dot"></span>
                <span className="card-dot"></span>
              </div>
              <div className="card-content-demo">
                <div className="demo-map">
                  <div className="map-marker marker-1">📍</div>
                  <div className="map-marker marker-2">📍</div>
                  <div className="map-marker marker-3">📍</div>
                </div>
                <div className="demo-stats">
                  <div className="demo-stat-item">
                    <span className="demo-stat-icon">📊</span>
                    <div>
                      <span className="demo-stat-value">1,234</span>
                      <span className="demo-stat-label">Total Plots</span>
                    </div>
                  </div>
                  <div className="demo-stat-item">
                    <span className="demo-stat-icon">✅</span>
                    <div>
                      <span className="demo-stat-value">456</span>
                      <span className="demo-stat-label">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-card hero-card-float hero-card-qr">
              <span className="float-icon">📱</span>
              <span className="float-text">QR Scan</span>
            </div>
            
            <div className="hero-card hero-card-float hero-card-location">
              <span className="float-icon">🗺️</span>
              <span className="float-text">GPS Navigate</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="landing-section landing-about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">About Us</span>
            <h2>History and<br />Mission</h2>
            <p>
              Himlayang Pilipino, Inc. was established in 1971 when the Aguirre Group acquired 
              a 5-hectare memorial park in Quezon City, which has since expanded to over 37 hectares. 
              The park was developed to reflect Filipino culture and values, offering a respectful 
              and serene environment for remembrance.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🏛️</div>
              <h3>Our Heritage</h3>
              <p>
                The park honors historical figures such as Melchora "Tandang Sora" Aquino and 
                Emilio Jacinto, whose remains were once interred here, and showcases artwork 
                and memorials that celebrate Filipino heritage.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">💫</div>
              <h3>Our Mission</h3>
              <p>
                Himlayang Pilipino is committed to providing compassionate care for the bereaved 
                with the utmost respect and dignity, reflecting strong Filipino family ties 
                and cultural values.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be the preferred final resting place in the country by offering quality 
                services and spaces while preserving Filipino traditions and honoring the 
                memory of loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="landing-section landing-services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>Memorial Products & Services</h2>
            <p>Comprehensive options designed to assist families during times of loss</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Lawn Lots</h3>
              <p>Beautifully maintained burial plots in serene garden settings</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>Columbaries</h3>
              <p>Elegant niches for urns in peaceful, well-kept structures</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏰</div>
              <h3>Mausoleums</h3>
              <p>Stately family crypts and private memorial structures</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⛰️</div>
              <h3>Memorial Terraces</h3>
              <p>Customized memorial spaces with scenic views</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💜</div>
              <h3>Bereavement Support</h3>
              <p>Compassionate support services for grieving families</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📰</div>
              <h3>Obituary Services</h3>
              <p>Obituary postings and news/events updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arts & Landmarks Section */}
      <section id="arts" className="landing-section landing-features">
        <div className="section-container">
          <div className="features-content">
            <div className="features-text">
              <span className="section-badge">Arts & Landmarks</span>
              <h2>Cultural Heritage</h2>
              <p>
                The park includes various sculptural artworks and shrines that reflect 
                Filipino history and artistic heritage, offering visitors a meaningful 
                cultural experience.
              </p>
              
              <ul className="features-list">
                <li>
                  <span className="feature-check">🏛️</span>
                  <div>
                    <strong>Emilio Jacinto Shrine</strong>
                    <p>Honoring the "Brains of the Katipunan"</p>
                  </div>
                </li>
                <li>
                  <span className="feature-check">🏛️</span>
                  <div>
                    <strong>Tandang Sora Shrine</strong>
                    <p>Tribute to the "Mother of the Philippine Revolution"</p>
                  </div>
                </li>
                <li>
                  <span className="feature-check">🎨</span>
                  <div>
                    <strong>Malakas and Maganda</strong>
                    <p>Sculptures of Filipino mythological figures</p>
                  </div>
                </li>
                <li>
                  <span className="feature-check">🌄</span>
                  <div>
                    <strong>Panooran Viewpoints</strong>
                    <p>Culturally significant installations and scenic overlooks</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/register" className="btn btn-primary">
                Plan Your Visit
              </Link>
            </div>
            
            <div className="features-visual">
              <div className="feature-phone">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span>🏔️ Himlayan</span>
                  </div>
                  <div className="phone-content">
                    <div className="phone-search">
                      <span>🔍</span>
                      <span>Search plots...</span>
                    </div>
                    <div className="phone-map-preview"></div>
                    <div className="phone-result">
                      <div className="result-avatar">HP</div>
                      <div className="result-info">
                        <span className="result-name">Himlayang Pilipino</span>
                        <span className="result-location">Quezon City, PH</span>
                      </div>
                      <span className="result-arrow">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="landing-section landing-contact">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-badge">Contact Us</span>
              <h2>Visit Us</h2>
              <p>
                The memorial park maintains active communication channels for inquiries 
                about services, plot availability, and visiting hours. Feel free to reach 
                out to our dedicated staff for assistance.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>Himlayan Road, Barangay Pasong Tamo,<br />Tandang Sora, Quezon City, Philippines 1107</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone Numbers</strong>
                    <p>0917-130-6930 • 0968-896-4850 • 0917-713-5034</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <div>
                    <strong>Social Media</strong>
                    <p>Follow us on Facebook and YouTube for updates</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-notice">
                <span className="notice-icon">ℹ️</span>
                <p>
                  For inquiries related to plot reservations, interment schedules, or 
                  memorial services, please contact our office during business hours.
                </p>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="Juan" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Dela Cruz" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="juan@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="4" placeholder="Your inquiry..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta">
        <div className="cta-background">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="section-container">
          <div className="cta-content">
            <h2>A Meaningful Final Resting Place for Your Loved Ones</h2>
            <p>Serving Filipino families with compassion and dignity since 1971</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-cta-primary">
                Inquire Now
              </Link>
              <Link to="/login" className="btn btn-cta-secondary">
                Access Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="landing-logo">
                <span className="logo-icon">🏔️</span>
                <span className="logo-text">Himlayan</span>
              </Link>
              <p>Himlayang Pilipino Memorial Park — A premier memorial park reflecting Filipino culture and values.</p>
              <div className="footer-social">
                <a href="#" className="social-link" title="Facebook">📘</a>
                <a href="#" className="social-link" title="YouTube">▶️</a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#arts">Arts & Landmarks</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Lawn Lots</a></li>
                <li><a href="#services">Columbaries</a></li>
                <li><a href="#services">Mausoleums</a></li>
                <li><a href="#services">Memorial Terraces</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li><a href="#contact">0917-130-6930</a></li>
                <li><a href="#contact">0968-896-4850</a></li>
                <li><a href="#contact">0917-713-5034</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Himlayang Pilipino Memorial Park. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
