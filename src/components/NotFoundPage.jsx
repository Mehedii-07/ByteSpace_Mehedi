import React from 'react';
import { Home } from 'lucide-react';
import { NeonSquiggle, Torus3D, Cylinder3D, Pyramid3D } from './DecorativeElements';

export const NotFoundPage = ({ onGoHome }) => {
  return (
    <div className="not-found-page bg-grid-pattern">
      <div className="not-found-decorations" aria-hidden="true">
        <div className="nf-decor nf-top-left animate-float">
          <NeonSquiggle width={120} height={120} />
        </div>
        <div className="nf-decor nf-top-right animate-float-reverse">
          <Cylinder3D width={75} height={100} />
        </div>
        <div className="nf-decor nf-bottom-left animate-float">
          <Torus3D size={100} />
        </div>
        <div className="nf-decor nf-bottom-right animate-float-reverse">
          <Pyramid3D size={80} />
        </div>
      </div>

      <div className="container not-found-container">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">The page you are looking for doesn't exist!</h2>
        <p className="not-found-desc">
          The link you followed may be broken, or the page may have been moved or removed.
        </p>

        <div className="not-found-actions">
          <button className="nf-home-btn" onClick={onGoHome}>
            <Home size={18} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
