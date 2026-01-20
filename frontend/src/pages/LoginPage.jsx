import React, { useState } from 'react';
import { useNavigate, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const successMessage = location.state?.message;

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message || 'Login failed');
    }
    
    setLoading(false);
  };

  return (
    <div className="auth-split-container">
      {/* Left Side - Form */}
      <div className="auth-split-left">
        <div className="auth-split-form">
          <Link to="/" className="auth-back-link">
            ← Back to Home
          </Link>
          
          <div className="auth-form-header">
            <h1>Sign In</h1>
            <p>Welcome back! Please enter your details.</p>
          </div>
          
          {successMessage && <div className="auth-success">{successMessage}</div>}
          {error && <div className="auth-error">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <span className="input-icon-left">👤</span>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="auth-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block btn-lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="btn-spinner"></span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="auth-divider">
              <span>or continue with</span>
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
            <p>Don't have an account? <Link to="/register">Sign up for free</Link></p>
          </div>

          <div className="demo-box">
            <p className="demo-title">🔑 Demo Credentials</p>
            <div className="demo-creds">
              <div className="demo-cred">
                <span className="demo-badge admin">Admin</span>
                <code>admin@cemetery.com</code>
              </div>
              <div className="demo-cred">
                <span className="demo-badge staff">Staff</span>
                <code>staff@cemetery.com</code>
              </div>
            </div>
            <p className="demo-pass">Password: <code>password123</code></p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="auth-split-right">
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
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '45%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
            </div>
            <div className="visual-stats-row">
              <div className="v-stat">
                <span className="v-stat-value">176.18</span>
                <span className="v-stat-label">Active Plots</span>
              </div>
            </div>
          </div>

          <div className="visual-card visual-card-float float-1">
            <span className="float-emoji">📊</span>
            <span className="float-label">Analytics</span>
          </div>

          <div className="visual-card visual-card-float float-2">
            <span className="float-emoji">🗺️</span>
            <span className="float-label">GIS Maps</span>
          </div>

          <div className="visual-card visual-card-float float-3">
            <span className="float-emoji">📱</span>
            <span className="float-label">QR Codes</span>
          </div>

          <div className="visual-tagline">
            <div className="tagline-icon">🔍</div>
            <div className="tagline-text">
              <h3>Your data, your rules</h3>
              <p>Full control over cemetery management with powerful analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
