import React from 'react';

export const CtaBanner = ({ onJoinClick }) => {
  return (
    <section id="cta" className="cta-section bg-grid-pattern">
      {/* Left Side 3D Decorations (Figma exact: width: 386.79px, height: 386.79px, left: -3.58px) */}
      <img
        src="/images/decorations/cta_decor_left_clean.png"
        alt=""
        className="cta-decor-group cta-decor-left-group"
        aria-hidden="true"
      />

      {/* Right Side 3D Decorations (Figma exact: width: 386.79px, height: 386.79px, right: -3.58px) */}
      <img
        src="/images/decorations/cta_decor_right_clean.png"
        alt=""
        className="cta-decor-group cta-decor-right-group"
        aria-hidden="true"
      />

      {/* Central CTA Content */}
      <div className="container cta-container">
        <div className="cta-content-wrapper">
          <h2 className="cta-headline">
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </h2>
          <p className="cta-subheadline">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <div className="cta-button-wrap">
            <button 
              type="button"
              className="cta-join-btn"
              onClick={onJoinClick}
            >
              Join as Creator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
