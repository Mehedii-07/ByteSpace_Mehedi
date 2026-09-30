import React from 'react';

export const NotFoundPage = ({ onGoHome }) => {
  return (
    <div className="not-found-page-wrapper bg-grid-pattern">
      <div className="not-found-content-box">
        {/* Massive 404 Display with Lime Gradient to transparent */}
        <div className="not-found-big-number" aria-hidden="true">
          404
        </div>

        {/* Poppins Bold Main Headline */}
        <h1 className="not-found-main-headline">
          The page you are looking<br />for doesn’t exist
        </h1>

        {/* Satoshi Small Subtitle */}
        <p className="not-found-subtext">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Lime Pill Button: Back to Home */}
        <div className="not-found-btn-wrapper">
          <button 
            type="button" 
            className="not-found-home-btn"
            onClick={onGoHome}
            aria-label="Back to Home"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
