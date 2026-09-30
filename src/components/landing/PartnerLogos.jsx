import React from 'react';

export const PartnerLogos = () => {
  const partners = [
    {
      id: 1,
      name: 'Logoipsum',
      logo: '/images/partners/partner-logo-1.png'
    },
    {
      id: 2,
      name: 'Logoipsum',
      logo: '/images/partners/partner-logo-5.png'
    },
    {
      id: 3,
      name: 'Logoipsum',
      logo: '/images/partners/partner-logo-2.png'
    },
    {
      id: 4,
      name: 'Logoipsum',
      logo: '/images/partners/partner-logo-3.png'
    },
    {
      id: 5,
      name: 'Logoipsum',
      logo: '/images/partners/partner-logo-4.png'
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">
              <span className="partner-icon">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="partner-logo-img"
                  width="40"
                  height="40"
                />
              </span>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
