import React from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  NeonSquiggle, 
  Torus3D, 
  Pyramid3D, 
  Cylinder3D, 
  ZigzagWhite, 
  SparkleWhite 
} from './DecorativeElements';

export const CtaBanner = ({ onJoinClick }) => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-banner-card bg-grid-pattern">
          {/* Floating 3D and doodle shapes matching the photo */}
          <div className="cta-decorations" aria-hidden="true">
            {/* Top-Left Lime Squiggle */}
            <div className="cta-decor cta-decor-left animate-float">
              <NeonSquiggle width={105} height={105} />
            </div>

            {/* Bottom-Left White Zigzag */}
            <div className="cta-decor cta-decor-zigzag animate-float-reverse">
              <ZigzagWhite width={85} height={45} />
            </div>

            {/* Top-Right Neon Cylinder */}
            <div className="cta-decor cta-decor-cylinder animate-float">
              <Cylinder3D width={70} height={95} />
            </div>

            {/* Mid-Right White 3D Pyramid */}
            <div className="cta-decor cta-decor-pyramid animate-float-reverse">
              <Pyramid3D size={75} />
            </div>

            {/* Bottom-Right White Torus */}
            <div className="cta-decor cta-decor-torus animate-float">
              <Torus3D size={95} />
            </div>

            {/* Bottom-Right Lime Squiggle */}
            <div className="cta-decor cta-decor-bottom-right animate-float">
              <NeonSquiggle width={90} height={90} />
            </div>

            {/* Sparkles */}
            <div className="cta-decor cta-sparkle-1">
              <SparkleWhite size={22} />
            </div>
          </div>

          {/* Central CTA Content */}
          <div className="cta-content-wrapper">
            <h2 className="cta-headline">
              Unlock Your Potential as a<br />
              Creator with ByteSpace
            </h2>
            <p className="cta-subheadline">
              Share your expertise with eager students across the globe. Our platform gives you the audience, analytics, and marketing support to build a rewarding teaching business.
            </p>
            <div className="cta-button-wrap">
              <button 
                className="cta-join-btn"
                onClick={onJoinClick}
              >
                <span>Join as Tutor</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
