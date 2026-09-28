import React from 'react';

export const PartnerLogos = () => {
  const partners = [
    {
      id: 1,
      name: 'Logoipsum',
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="#64748b" strokeWidth="3" />
          <circle cx="16" cy="16" r="6" fill="#64748b" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Logoipsum',
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="5" y="5" width="22" height="22" rx="6" stroke="#64748b" strokeWidth="3" />
          <path d="M11 16H21" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Logoipsum',
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="#64748b" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="4" fill="#64748b" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'Logoipsum',
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3" fill="#64748b" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'Logoipsum',
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="9" height="9" rx="2" fill="#64748b" />
          <rect x="17" y="6" width="9" height="9" rx="2" stroke="#64748b" strokeWidth="2.5" />
          <rect x="6" y="17" width="9" height="9" rx="2" stroke="#64748b" strokeWidth="2.5" />
          <rect x="17" y="17" width="9" height="9" rx="2" fill="#64748b" />
        </svg>
      )
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <span className="partner-icon">{partner.icon}</span>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
