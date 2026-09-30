import React, { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

// Neon Lime 3D Torus/Donut Ring
const LimeTorus3D = ({ size = 85, className = '', style = {} }) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 100 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="limeTorusGradLogin" x1="15" y1="5" x2="85" y2="70">
        <stop offset="0%" stopColor="#EAFF4D" />
        <stop offset="50%" stopColor="#CBFC01" />
        <stop offset="100%" stopColor="#9BD800" />
      </linearGradient>
      <radialGradient id="limeTorusHoleLogin" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stopColor="#0045DC" />
        <stop offset="100%" stopColor="#0052FF" />
      </radialGradient>
      <filter id="limeTorusShadowLogin" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="5" floodColor="#002D9C" floodOpacity="0.4" />
      </filter>
    </defs>
    <ellipse cx="50" cy="38" rx="44" ry="32" fill="url(#limeTorusGradLogin)" filter="url(#limeTorusShadowLogin)" transform="rotate(-15 50 38)" />
    <ellipse cx="50" cy="38" rx="20" ry="14" fill="url(#limeTorusHoleLogin)" transform="rotate(-15 50 38)" />
    <path d="M25 24 C 35 15, 65 15, 75 24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
  </svg>
);

// Neon Lime 3D Pyramid / Tetrahedron
const LimePyramid3D = ({ size = 95, className = '', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="pyrFaceLeftLogin" x1="30" y1="20" x2="10" y2="85">
        <stop offset="0%" stopColor="#EAFF4D" />
        <stop offset="100%" stopColor="#CBFC01" />
      </linearGradient>
      <linearGradient id="pyrFaceRightLogin" x1="40" y1="20" x2="85" y2="80">
        <stop offset="0%" stopColor="#B5EC00" />
        <stop offset="100%" stopColor="#8AC600" />
      </linearGradient>
      <filter id="pyrShadowLogin" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="-4" dy="10" stdDeviation="6" floodColor="#002D9C" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#pyrShadowLogin)">
      <polygon points="50,15 12,85 55,92" fill="url(#pyrFaceLeftLogin)" />
      <polygon points="50,15 55,92 90,75" fill="url(#pyrFaceRightLogin)" />
      <line x1="50" y1="15" x2="55" y2="92" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
    </g>
  </svg>
);

export const LoginPage = ({ onNavigateHome, onNavigateRegister, onAuthSuccess, onOpen404 }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalEmail = email.trim() || 'designer@example.com';
    const derivedName = finalEmail.split('@')[0] || 'User';
    const capitalizedName = derivedName.charAt(0).toUpperCase() + derivedName.slice(1);

    setToastMessage(`Welcome back, ${capitalizedName}! 🚀`);

    if (onAuthSuccess) {
      onAuthSuccess({ name: capitalizedName, email: finalEmail, mode: 'signin' });
    }

    setTimeout(() => {
      if (onNavigateHome) onNavigateHome();
    }, 1400);
  };

  const handleSocialLogin = (provider) => {
    setToastMessage(`Signing in with ${provider}...`);
    if (onAuthSuccess) {
      onAuthSuccess({ name: `${provider} User`, email: `user@${provider.toLowerCase()}.com`, mode: 'signin' });
    }
    setTimeout(() => {
      if (onNavigateHome) onNavigateHome();
    }, 1400);
  };

  return (
    <div className="register-page-wrapper bg-grid-pattern">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} color="#ccff00" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Left ByteSpace Logo Mark */}
      <header className="register-header">
        <a
          href="#home"
          className="register-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
          }}
          title="Back to ByteSpace Home"
        >
          <img
            src="/images/bytespace-logo@2x.png"
            srcSet="/images/bytespace-logo.png 1x, /images/bytespace-logo@2x.png 2x, /images/bytespace-logo@4x.png 4x"
            alt="ByteSpace"
            className="register-logo-img"
          />
        </a>
      </header>

      {/* Main Login Layout */}
      <main className="register-main-container">
        <div className="register-layout-grid">

          {/* Left Column: Heading + Decorative Collage */}
          <div className="register-left-col">
            {/* Top Text Block */}
            <div className="register-intro-block">
              <h1 className="register-hero-title">Sign in with ease</h1>
              <p className="register-hero-desc">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
              </p>
            </div>

            {/* Visual Collage Area */}
            <div className="register-collage-wrapper" aria-hidden="true">
              {/* Floating Lime 3D Ring */}
              <div className="register-decor-ring animate-float">
                <LimeTorus3D size={95} />
              </div>

              {/* Background Card: Build Digital Asset */}
              <div className="register-bg-card">
                <div className="register-card-img-box">
                  <img
                    src="/images/courses/course-card-2.jpg"
                    alt="Build Digital Asset"
                    className="register-card-img"
                  />
                  <div className="register-strip-badges">
                    <span className="register-mini-badge">17 Lessons</span>
                  </div>
                </div>
                <div className="register-card-body-mini">
                  <h4 className="register-card-title-mini">Build Digit...</h4>
                  <div className="register-author-mini">by purepearl studio</div>
                  <div className="register-meta-mini">
                    <span className="register-level-mini">
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="1" y="9" width="3" height="6" rx="1" />
                        <rect x="6.5" y="5" width="3" height="10" rx="1" />
                        <rect x="12" y="1" width="3" height="14" rx="1" />
                      </svg>
                      Beginner
                    </span>
                    <div className="avatar-stack avatar-stack--sm">
                      <img src="/images/avatar-1.png" alt="Student" className="avatar-stack-img" />
                      <img src="/images/avatar-2.png" alt="Student" className="avatar-stack-img" />
                      <img src="/images/avatar-3.png" alt="Student" className="avatar-stack-img" />
                      <img src="/images/avatar-4.png" alt="Student" className="avatar-stack-img" />
                      <span className="avatar-stack-count">26+</span>
                    </div>
                  </div>
                  <div className="register-price-mini">
                    <strong>$25</strong><span>/life...</span>
                  </div>
                </div>
              </div>

              {/* Foreground Card: the Power of Big Data */}
              <div className="register-fg-card">
                <div className="register-card-img-box">
                  <img
                    src="/images/courses/course-card-3.jpg"
                    alt="the Power of Big Data"
                    className="register-card-img"
                  />
                  <div className="register-strip-badges">
                    <span className="register-mini-badge">17 Lessons</span>
                    <span className="register-mini-badge">2 hours 16 mins</span>
                    <span className="register-mini-badge">59 Comments</span>
                  </div>
                </div>
                <div className="register-card-body-full">
                  <div className="register-fg-title-row">
                    <h3 className="register-fg-title">the Power of Big Data</h3>
                    <div className="register-fg-rating">
                      <span>4.5</span>
                      <Star size={14} fill="#EAB308" color="#EAB308" />
                    </div>
                  </div>
                  <div className="register-author-mini">by purepearl studio</div>
                  <div className="register-meta-mini">
                    <span className="register-level-mini">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="1" y="9" width="3" height="6" rx="1" />
                        <rect x="6.5" y="5" width="3" height="10" rx="1" />
                        <rect x="12" y="1" width="3" height="14" rx="1" />
                      </svg>
                      Beginner
                    </span>
                    <div className="avatar-stack avatar-stack--sm">
                      <img src="/images/avatar-1.png" alt="Student" className="avatar-stack-img" />
                      <img src="/images/avatar-2.png" alt="Student" className="avatar-stack-img" />
                      <img src="/images/avatar-3.png" alt="Student" className="avatar-stack-img" />
                      <img src="/images/avatar-4.png" alt="Student" className="avatar-stack-img" />
                      <span className="avatar-stack-count">26+</span>
                    </div>
                  </div>
                  <div className="register-price-full">
                    <span className="price-val">$25</span>
                    <span className="price-term">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Bottom Left Lime Pyramid */}
              <div className="register-decor-pyramid animate-float-reverse">
                <LimePyramid3D size={100} />
              </div>

              {/* Happy Students Neon Lime Badge */}
              <div className="register-happy-students-card">
                <div className="happy-students-title">Happy Students</div>
                <div className="happy-students-rating-row">
                  <span className="score-val">4.5</span>
                  <span className="score-reviews">(240)</span>
                  <span className="star-icon">★</span>
                </div>
                <div className="happy-students-avatars-wrap">
                  <div className="happy-students-stack">
                    <img src="/images/happy-avatar-1.png" alt="Student" className="happy-students-avatar-img" />
                    <img src="/images/avatar-1.png" alt="Student" className="happy-students-avatar-img" />
                    <img src="/images/happy-avatar-3.png" alt="Student" className="happy-students-avatar-img" />
                    <img src="/images/happy-avatar-4.png" alt="Student" className="happy-students-avatar-img" />
                    <img src="/images/happy-avatar-5.png" alt="Student" className="happy-students-avatar-img" />
                    <img src="/images/happy-avatar-6.png" alt="Student" className="happy-students-avatar-img" />
                    <img src="/images/happy-avatar-7.png" alt="Student" className="happy-students-avatar-img" />
                    <span className="happy-students-count">2K+</span>
                  </div>
                </div>
              </div>

              {/* Floating White 3D Coil on Right */}
              <div className="register-decor-coil">
                <img
                  src="/images/decorations/white_coil_bottom_right.png"
                  alt=""
                  className="white-coil-img"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Login Card */}
          <div className="register-right-col">
            <div className="register-form-card">
              <span className="register-card-kicker">Sign In</span>
              <h2 className="login-card-heading">
                Welcome Back
              </h2>

              <form className="register-auth-form" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="register-field-group">
                  <label htmlFor="login-email" className="register-label">
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    className="register-input"
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                {/* Password */}
                <div className="register-field-group">
                  <div className="login-password-label-row">
                    <label htmlFor="login-password" className="register-label">
                      Password
                    </label>
                    <a
                      href="#404"
                      className="login-forgot-link"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onOpen404) onOpen404();
                        else if (typeof window !== 'undefined') window.location.hash = '#404';
                      }}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="login-password"
                    type="password"
                    className="register-input"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>

                {/* Submit Action: Sign In Button (Right Aligned) */}
                <div className="register-action-row">
                  <button type="submit" className="register-continue-btn">
                    Sign In
                  </button>
                </div>

                {/* 'or' Divider */}
                <div className="login-divider-row">
                  <div className="login-divider-line" />
                  <span className="login-divider-text">or</span>
                  <div className="login-divider-line" />
                </div>

                {/* Social Login Buttons: Facebook & Google */}
                <div className="login-social-row">
                  {/* Facebook Button */}
                  <button
                    type="button"
                    className="login-social-btn"
                    onClick={() => handleSocialLogin('Facebook')}
                    title="Sign in with Facebook"
                    aria-label="Sign in with Facebook"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F172A">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  {/* Google Button */}
                  <button
                    type="button"
                    className="login-social-btn"
                    onClick={() => handleSocialLogin('Google')}
                    title="Sign in with Google"
                    aria-label="Sign in with Google"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F172A">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </button>
                </div>

                {/* Bottom New user? Create an account */}
                <div className="login-register-prompt">
                  New user?{' '}
                  <button
                    type="button"
                    className="register-login-link"
                    onClick={() => {
                      if (onNavigateRegister) onNavigateRegister();
                    }}
                  >
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LoginPage;
