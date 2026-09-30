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
      <linearGradient id="limeTorusGrad" x1="15" y1="5" x2="85" y2="70">
        <stop offset="0%" stopColor="#EAFF4D" />
        <stop offset="50%" stopColor="#CBFC01" />
        <stop offset="100%" stopColor="#9BD800" />
      </linearGradient>
      <radialGradient id="limeTorusHole" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stopColor="#0045DC" />
        <stop offset="100%" stopColor="#0052FF" />
      </radialGradient>
      <filter id="limeTorusShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="5" floodColor="#002D9C" floodOpacity="0.4" />
      </filter>
    </defs>
    <ellipse cx="50" cy="38" rx="44" ry="32" fill="url(#limeTorusGrad)" filter="url(#limeTorusShadow)" transform="rotate(-15 50 38)" />
    <ellipse cx="50" cy="38" rx="20" ry="14" fill="url(#limeTorusHole)" transform="rotate(-15 50 38)" />
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
      <linearGradient id="pyrFaceLeft" x1="30" y1="20" x2="10" y2="85">
        <stop offset="0%" stopColor="#EAFF4D" />
        <stop offset="100%" stopColor="#CBFC01" />
      </linearGradient>
      <linearGradient id="pyrFaceRight" x1="40" y1="20" x2="85" y2="80">
        <stop offset="0%" stopColor="#B5EC00" />
        <stop offset="100%" stopColor="#8AC600" />
      </linearGradient>
      <filter id="pyrShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="-4" dy="10" stdDeviation="6" floodColor="#002D9C" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#pyrShadow)">
      <polygon points="50,15 12,85 55,92" fill="url(#pyrFaceLeft)" />
      <polygon points="50,15 55,92 90,75" fill="url(#pyrFaceRight)" />
      <line x1="50" y1="15" x2="55" y2="92" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
    </g>
  </svg>
);

export const RegisterPage = ({ onNavigateHome, onNavigateLogin, onAuthSuccess, onOpenLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalName = fullName.trim() || 'Jamie Davis';
    const finalEmail = email.trim() || 'designer@example.com';

    setToastMessage(`Welcome to ByteSpace, ${finalName}! 🚀`);

    if (onAuthSuccess) {
      onAuthSuccess({ name: finalName, email: finalEmail, mode: 'signup' });
    }

    setTimeout(() => {
      if (onNavigateHome) onNavigateHome();
    }, 1500);
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

      {/* Main Registration Layout */}
      <main className="register-main-container">
        <div className="register-layout-grid">
          
          {/* Left Column: Heading + Decorative Collage */}
          <div className="register-left-col">
            {/* Top Text Block */}
            <div className="register-intro-block">
              <h1 className="register-hero-title">Sign up and come in</h1>
              <p className="register-hero-desc">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
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

          {/* Right Column: Register Card */}
          <div className="register-right-col">
            <div className="register-form-card">
              <span className="register-card-kicker">Create an Account</span>
              <h2 className="register-card-heading">
                Welcome to<br />
                ByteSpace
              </h2>

              <form className="register-auth-form" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="register-field-group">
                  <label htmlFor="register-fullname" className="register-label">
                    Full Name
                  </label>
                  <input 
                    id="register-fullname"
                    type="text" 
                    className="register-input"
                    placeholder="Jamie Davis"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div className="register-field-group">
                  <label htmlFor="register-email" className="register-label">
                    Email
                  </label>
                  <input 
                    id="register-email"
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
                  <label htmlFor="register-password" className="register-label">
                    Password
                  </label>
                  <input 
                    id="register-password"
                    type="password" 
                    className="register-input"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>

                {/* Submit Action (Right Aligned) */}
                <div className="register-action-row">
                  <button type="submit" className="register-continue-btn">
                    Continue
                  </button>
                </div>

                {/* Bottom Already have an account? Login */}
                <div className="register-login-prompt">
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="register-login-link"
                    onClick={() => {
                      if (onNavigateLogin) onNavigateLogin();
                      else if (onOpenLogin) onOpenLogin();
                      else if (onNavigateHome) onNavigateHome();
                    }}
                  >
                    Login
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

export default RegisterPage;
