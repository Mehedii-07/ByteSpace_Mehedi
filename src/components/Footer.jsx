import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Footer = ({ onOpen404 }) => {
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

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Main Grid */}
        <div className="footer-top-grid">
          {/* Brand & Newsletter Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-logo">
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
              Get access to hundreds courses available anytime & anywhere.
            </p>

            {/* Newsletter Subscription Box */}
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-wrap">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn">
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>
            <p className="newsletter-disclaimer">
              * By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our team.
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
              <li><a href="#home">Featured Courses</a></li>
              <li><a href="#courses">Featured Categories</a></li>
              <li><a href="#learning-paths">Business</a></li>
              <li><a href="#growth">IT</a></li>
              <li><a href="#growth">Design</a></li>
              <li><a href="#404" onClick={(e) => { e.preventDefault(); if (onOpen404) onOpen404(); }}>FAQs</a></li>
            </ul>
          </div>

          {/* Links Column 2: Categories */}
          <div className="footer-nav-col">
            
            <ul className="footer-links-list">
              <li><a href="#courses">Development</a></li>
              <li><a href="#courses">Marketing</a></li>
              <li><a href="#courses">Photography</a></li>
              <li><a href="#courses">Finance</a></li>
              <li><a href="#courses">Sport</a></li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div className="footer-nav-col">
            
            <ul className="footer-links-list">
              <li><a href="#growth">Become a Creator</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            Copyright © ByteSpace 2026. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Use</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
