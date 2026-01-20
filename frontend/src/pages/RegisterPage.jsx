import React, { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { authService } from '../services/authService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const result = await authService.register(formData);
      
      if (result.success) {
        navigate('/login', { state: { message: 'Registration successful! Please login.' } });
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
    
    setLoading(false);
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { level: 0, text: '', color: '' };
    if (password.length < 6) return { level: 1, text: 'Weak', color: '#e74c3c' };
    if (password.length < 10) return { level: 2, text: 'Medium', color: '#f39c12' };
    return { level: 3, text: 'Strong', color: '#27ae60' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="auth-split-container">
      {/* Left Side - Form */}
      <div className="auth-split-left">
        <div className="auth-split-form">
          <Link to="/" className="auth-back-link">
            ← Back to Home
          </Link>
          
          <div className="auth-form-header">
            <h1>Sign Up</h1>
            <p>Create your account and start managing cemeteries.</p>
          </div>
          
          {error && <div className="auth-error">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-with-icon">
                <span className="input-icon-left">👤</span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Daniel Ahmad"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <span className="input-icon-left">✉️</span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="19danielahmadi@gmail.com"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <span className="input-icon-left">🔒</span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bars">
                    <div className={`strength-bar ${passwordStrength.level >= 1 ? 'active' : ''}`} style={{backgroundColor: passwordStrength.level >= 1 ? passwordStrength.color : ''}}></div>
                    <div className={`strength-bar ${passwordStrength.level >= 2 ? 'active' : ''}`} style={{backgroundColor: passwordStrength.level >= 2 ? passwordStrength.color : ''}}></div>
                    <div className={`strength-bar ${passwordStrength.level >= 3 ? 'active' : ''}`} style={{backgroundColor: passwordStrength.level >= 3 ? passwordStrength.color : ''}}></div>
                  </div>
                  <span className="strength-text" style={{color: passwordStrength.color}}>{passwordStrength.text}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-with-icon">
                <span className="input-icon-left">🔒</span>
                <input
                  type="password"
                  name="password_confirmation"
                  className="form-control"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
                {formData.password_confirmation && formData.password === formData.password_confirmation && (
                  <span className="input-icon-right valid">✓</span>
                )}
              </div>
            </div>

            <div className="auth-terms">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block btn-lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="btn-spinner"></span>
                  Creating Account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>

            <div className="auth-divider">
              <span>or sign up with</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="btn-social">
                <span>G</span>
              </button>
              <button type="button" className="btn-social">
                <span>f</span>
              </button>
              <button type="button" className="btn-social">
                <span>🍎</span>
              </button>
            </div>
          </form>

          <div className="auth-footer-text">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="auth-split-right signup-visual">
        <div className="auth-visual-content">
          <div className="visual-shapes">
            <div className="v-shape v-shape-1"></div>
            <div className="v-shape v-shape-2"></div>
            <div className="v-shape v-shape-3"></div>
          </div>
          
          <div className="visual-card visual-card-main">
            <div className="visual-card-header">
              <span className="v-dot"></span>
              <span className="v-dot"></span>
              <span className="v-dot"></span>
            </div>
            <div className="visual-chart">
              <div className="chart-bar" style={{height: '70%'}}></div>
              <div className="chart-bar" style={{height: '50%'}}></div>
              <div className="chart-bar" style={{height: '85%'}}></div>
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '95%'}}></div>
            </div>
            <div className="visual-stats-row">
              <div className="v-stat">
                <span className="v-stat-value">2,456</span>
                <span className="v-stat-label">Records</span>
              </div>
            </div>
          </div>

          <div className="visual-card visual-card-float float-1">
            <span className="float-emoji">🏔️</span>
            <span className="float-label">Himlayan</span>
          </div>

          <div className="visual-card visual-card-float float-2">
            <span className="float-emoji">✨</span>
            <span className="float-label">Modern UI</span>
          </div>

          <div className="visual-card visual-card-float float-3">
            <span className="float-emoji">🔐</span>
            <span className="float-label">Secure</span>
          </div>

          <div className="visual-tagline">
            <div className="tagline-icon">🚀</div>
            <div className="tagline-text">
              <h3>Join thousands of users</h3>
              <p>Start managing cemetery plots with ease today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
