import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Footer = ({ onOpen404, onNavigateCreators, onNavigateHome, onNavigateCourses }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const handle404Click = (e) => {
    e.preventDefault();
    if (onOpen404) {
      onOpen404();
    } else if (typeof window !== 'undefined') {
      window.location.hash = '#404';
    }
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Main Grid */}
        <div className="footer-top-grid">
          {/* Brand & Newsletter Column */}
          <div className="footer-brand-col">
            <a 
              href="#home" 
              className="footer-brand-logo"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateHome) onNavigateHome();
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/images/bytespace-logo@2x.png" 
                srcSet="/images/bytespace-logo.png 1x, /images/bytespace-logo@2x.png 2x, /images/bytespace-logo@4x.png 4x"
                alt="ByteSpace Logo" 
                className="footer-logo-icon" 
              />
              <span className="brand-name-dark">
                ByteSpace
              </span>
            </a>

            <p className="footer-bio">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Subscription Box */}
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-wrap">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn">
                  {subscribed ? 'Subscribed!' : 'Search'}
                </button>
              </div>
            </form>
            <p className="newsletter-disclaimer">
              By subscribing, you agree to our <a href="#404" onClick={handle404Click} className="footer-inline-link">Privacy Policy</a> and consent to receive updates from our company.
            </p>
            {subscribed && (
              <div className="newsletter-success">
                <CheckCircle2 size={14} color="#16a34a" />
                <span>Thank you for subscribing to ByteSpace updates!</span>
              </div>
            )}
          </div>

          {/* Links Column 1: Navigation */}
          <div className="footer-nav-col">
            <ul className="footer-links-list">
              <li><a href="#courses" onClick={(e) => handleScrollTo(e, 'courses')}>Featured Courses</a></li>
              <li><a href="#learning-paths" onClick={(e) => handleScrollTo(e, 'learning-paths')}>Featured Categories</a></li>
              <li><a href="#learning-paths" onClick={(e) => handleScrollTo(e, 'learning-paths')}>Business</a></li>
              <li><a href="#growth" onClick={(e) => handleScrollTo(e, 'growth')}>IT</a></li>
              <li><a href="#growth" onClick={(e) => handleScrollTo(e, 'growth')}>Design</a></li>
            </ul>
          </div>

          {/* Links Column 2: Categories */}
          <div className="footer-nav-col">
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#courses" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateCourses) onNavigateCourses();
                    else handleScrollTo(e, 'courses');
                  }}
                >
                  Development
                </a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateCourses) onNavigateCourses();
                    else handleScrollTo(e, 'courses');
                  }}
                >
                  Marketing
                </a>
              </li>
              <li><a href="#404" onClick={handle404Click}>Photography</a></li>
              <li><a href="#404" onClick={handle404Click}>Finance</a></li>
              <li><a href="#404" onClick={handle404Click}>Sport</a></li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div className="footer-nav-col">
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#creator-profile" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (onNavigateCreators) onNavigateCreators(); 
                  }}
                >
                  Become a Creator
                </a>
              </li>
              <li><a href="#404" onClick={handle404Click}>Affiliate Program</a></li>
              <li><a href="#404" onClick={handle404Click}>Contact</a></li>
              <li><a href="#404" onClick={handle404Click}>Help</a></li>
              <li><a href="#404" onClick={handle404Click}>About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links matching Figma */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © 2023 ByteSpace. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#404" onClick={handle404Click}>Privacy Policy</a>
            <a href="#404" onClick={handle404Click}>Terms of Service</a>
            <a href="#404" onClick={handle404Click}>Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
