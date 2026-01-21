import React, { useState } from 'react';
import PublicLayout from '../components/common/PublicLayout';
import { useToast } from '../context/ToastContext';
import './FeedbackPage.css';

const FeedbackPage = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast?.warning('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast?.success('Thank you for your feedback!');
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'general',
      message: '',
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <PublicLayout>
        <div className="feedback-page">
          <div className="feedback-success">
            <div className="success-icon">✅</div>
            <h2>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
            <p className="success-note">We appreciate your input and will review it shortly.</p>
            <div className="success-actions">
              <button className="btn btn-primary" onClick={handleReset}>
                Submit Another Feedback
              </button>
              <button className="btn btn-secondary" onClick={() => window.history.back()}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="feedback-page">
        <div className="page-header">
          <h1>Feedback & Suggestions</h1>
          <p>We value your feedback. Help us improve our services.</p>
        </div>

        <div className="feedback-card">
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="general">General Feedback</option>
                <option value="services">Services</option>
                <option value="facilities">Facilities</option>
                <option value="website">Website/App</option>
                <option value="complaint">Complaint</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Write your feedback or suggestions here..."
                rows={6}
                required
              />
              <span className="char-count">{formData.message.length} / 1000</span>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={loading}
              >
                {loading ? 'Submitting...' : '📨 Submit Feedback'}
              </button>
              
              <button 
                type="button" 
                className="btn btn-link"
                onClick={() => window.history.back()}
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="feedback-contact">
          <p>
            Need immediate assistance? Contact us directly:
          </p>
          <div className="contact-methods">
            <a href="tel:+6328123456" className="contact-item">
              <span className="contact-icon">📞</span>
              <span>(02) 8123-456</span>
            </a>
            <a href="mailto:info@himlayan.ph" className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@himlayan.ph</span>
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default FeedbackPage;
