import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';
import { NeonSquiggle, Torus3D } from './DecorativeElements';

export const AuthModal = ({ isOpen, onClose, initialMode = 'signin', onAuthSuccess }) => {
  const [mode, setMode] = useState(initialMode); // 'signin' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAuthSuccess) {
      onAuthSuccess({ email, name: name || 'Learner', mode });
    }
    onClose();
  };

  return (
    <div className="auth-backdrop" onClick={onClose}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="auth-grid">
          {/* Left Decorative Blue Panel */}
          <div className="auth-brand-panel bg-grid-pattern">
            <div className="auth-panel-content">
              <div className="brand-logo-mark mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="9" height="9" rx="2.5" fill="#ccff00" />
                  <rect x="13" y="2" width="9" height="9" rx="2.5" fill="#ffffff" />
                  <rect x="2" y="13" width="9" height="9" rx="2.5" fill="#ffffff" />
                  <rect x="13" y="13" width="9" height="9" rx="2.5" fill="#ccff00" />
                </svg>
              </div>
              <h3 className="auth-panel-title">
                Welcome to <br />
                ByteSpace
              </h3>
              <p className="auth-panel-sub">
                Join over 50,000+ creators and students learning future-proof tech and design skills.
              </p>

              <div className="auth-panel-features">
                <div className="auth-feat-item">
                  <Check size={16} color="#ccff00" />
                  <span>Unlimited access to 1,000+ courses</span>
                </div>
                <div className="auth-feat-item">
                  <Check size={16} color="#ccff00" />
                  <span>Personalized mentor reviews</span>
                </div>
                <div className="auth-feat-item">
                  <Check size={16} color="#ccff00" />
                  <span>Official certificates of completion</span>
                </div>
              </div>
            </div>

            {/* Doodles */}
            <div className="auth-doodle-1 animate-float">
              <NeonSquiggle width={80} height={80} />
            </div>
            <div className="auth-doodle-2 animate-float-reverse">
              <Torus3D size={60} />
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="auth-form-panel">
            {/* Tabs */}
            <div className="auth-tabs">
              <button 
                type="button"
                className={`auth-tab ${mode === 'signin' ? 'active' : ''}`}
                onClick={() => setMode('signin')}
              >
                Sign In
              </button>
              <button 
                type="button"
                className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
                onClick={() => setMode('signup')}
              >
                Create Account
              </button>
            </div>

            <h2 className="auth-heading">
              {mode === 'signin' ? 'Sign in to your account' : 'Start your free learning journey'}
            </h2>
            <p className="auth-subheading">
              {mode === 'signin' 
                ? 'Enter your credentials to continue your lessons.' 
                : 'Create your account in seconds. No credit card required.'}
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>
              {mode === 'signup' && (
                <div className="auth-field">
                  <label>Full Name</label>
                  <div className="auth-input-wrapper">
                    <User size={18} className="field-icon" />
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="auth-field">
                <label>Email Address</label>
                <div className="auth-input-wrapper">
                  <Mail size={18} className="field-icon" />
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-field">
                <div className="label-with-link">
                  <label>Password</label>
                  {mode === 'signin' && (
                    <a href="#" className="forgot-pass-link" onClick={(e) => e.preventDefault()}>
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="auth-input-wrapper">
                  <Lock size={18} className="field-icon" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="auth-submit-btn">
                <span>{mode === 'signin' ? 'Sign In' : 'Create Free Account'}</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-divider">
              <span>or continue with</span>
            </div>

            {/* Social Logins */}
            <div className="social-auth-grid">
              <button 
                type="button" 
                className="social-auth-btn"
                onClick={() => {
                  if (onAuthSuccess) onAuthSuccess({ email: 'google.user@example.com', name: 'Google User', mode });
                  onClose();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google</span>
              </button>

              <button 
                type="button" 
                className="social-auth-btn"
                onClick={() => {
                  if (onAuthSuccess) onAuthSuccess({ email: 'apple.user@example.com', name: 'Apple User', mode });
                  onClose();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.79 1.06-1.88.94-2.97-.93.04-2.08.63-2.73 1.4-.58.67-.99 1.76-.87 2.82 1.05.08 2.03-.46 2.66-1.25z"/>
                </svg>
                <span>Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
