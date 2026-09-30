import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = ({ cartCount = 1, onOpenCart, onOpenAuth, onNavigateHome, onNavigateCourses, onNavigateCreators, onNavigateRegister, onNavigateLogin, currentView = 'home', currentUser = null }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'courses' && onNavigateCourses) {
      onNavigateCourses();
      return;
    }
    if (targetId === 'creators' && onNavigateCreators) {
      onNavigateCreators();
      return;
    }
    if (currentView !== 'home') {
      if (onNavigateHome) onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container navbar-container">
        {/* Brand Logo matching Figma: width: 171px; height: 37px; top: 35px; left: 122px */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
          }}
        >
          <img
            src="/images/bytespace-logo@2x.png"
            srcSet="/images/bytespace-logo.png 1x, /images/bytespace-logo@2x.png 2x, /images/bytespace-logo@4x.png 4x"
            alt="ByteSpace Logo"
            className="navbar-logo-icon"
          />
          <span className="brand-name">
            ByteSpace
          </span>
        </a>

        {/* Desktop Navigation Links matching Figma: width: 210px; height: 26px; top: 47px; left: 614.5px; gap: 24px */}
        <nav className="desktop-nav">
          <a
            href="#home"
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <a
            href="#courses"
            className={`nav-link ${currentView === 'courses' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateCourses) {
                onNavigateCourses();
              } else {
                handleNavClick(e, 'courses');
              }
            }}
          >
            Courses
          </a>
          <a
            href="#creator-profile"
            className={`nav-link ${currentView === 'creator-profile' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateCreators) {
                onNavigateCreators();
              } else {
                handleNavClick(e, 'creators');
              }
            }}
          >
            Creators
          </a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {currentUser ? (
            <span className="nav-user-greeting">Hi, {currentUser}</span>
          ) : (
            <>
              <button
                type="button"
                className="nav-auth-link"
                onClick={() => {
                  if (onNavigateLogin) onNavigateLogin();
                  else if (onOpenAuth) onOpenAuth('signin');
                }}
              >
                Sign In
              </button>

              <button
                type="button"
                className="nav-auth-link"
                onClick={() => {
                  if (onNavigateRegister) onNavigateRegister();
                  else if (onOpenAuth) onOpenAuth('signup');
                }}
              >
                Join Us
              </button>
            </>
          )}

          {/* Clean Vector Bag Icon */}
          <button
            type="button"
            className="cart-btn"
            onClick={onOpenCart}
            title="Shopping Cart"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag size={21} color="#ffffff" strokeWidth={1.8} />
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#home" onClick={(e) => { if (onNavigateHome) onNavigateHome(); else handleNavClick(e, 'home'); setMobileMenuOpen(false); }}>Home</a>
          <a href="#courses" onClick={(e) => { if (onNavigateCourses) onNavigateCourses(); else handleNavClick(e, 'courses'); setMobileMenuOpen(false); }}>Courses</a>
          <a href="#creator-profile" onClick={(e) => { if (onNavigateCreators) onNavigateCreators(); else handleNavClick(e, 'creators'); setMobileMenuOpen(false); }}>Creators</a>
          <div className="mobile-drawer-auth">
            <button className="sign-in-btn-mobile" onClick={() => { if (onNavigateLogin) onNavigateLogin(); else onOpenAuth('signin'); setMobileMenuOpen(false); }}>Sign In</button>
            <button className="sign-up-btn-mobile" onClick={() => { if (onNavigateRegister) onNavigateRegister(); else onOpenAuth('signup'); setMobileMenuOpen(false); }}>Join Us</button>
          </div>
        </div>
      )}
    </header>
  );
};
