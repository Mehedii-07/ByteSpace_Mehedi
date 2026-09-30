import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const Hero = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="hero-section bg-grid-pattern">
      <div className="hero-canvas">
        {/* Figma Rectangle & Rectangle 15 */}
        <div className="hero-rectangle-bg" aria-hidden="true"></div>
        <div className="hero-rectangle-15" aria-hidden="true"></div>

        {/* 3D Decorative Doodles matching Figma assets */}
        <div className="hero-decorations" aria-hidden="true">
          {/* Top-Left Lime Squiggle */}
          <img
            src="/images/decorations/lime_squiggle_top_left.png"
            alt=""
            className="hero-decor decor-top-left"
          />

          {/* Mid-Left White Zigzag */}
          <img
            src="/images/decorations/white_zigzag_mid_left.png"
            alt=""
            className="hero-decor decor-mid-left"
          />

          {/* Lower-Left Large White 3D Torus */}
          <img
            src="/images/decorations/white_torus_bottom_left.png"
            alt=""
            className="hero-decor decor-torus"
          />

          {/* Top-Right Neon Cylinder */}
          <img
            src="/images/decorations/lime_cylinder_top_right.png"
            alt=""
            className="hero-decor decor-cylinder"
          />

          {/* Cone matching Figma */}
          <img
            src="/images/decorations/white_cone.png"
            alt=""
            className="hero-decor decor-cone"
          />

          {/* Bottom-Right White Coil */}
          <img
            src="/images/decorations/white_coil_bottom_right.png"
            alt=""
            className="hero-decor decor-bottom-right"
          />
        </div>

        {/* Hero Headings matching Figma */}
        <div className="hero-content">
          <h1 className="hero-title">
            Get Access to Hundreds <br />
            Courses Available
          </h1>
          <p className="hero-subtitle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar matching Figma screenshot */}
          <form className="hero-search-form" onSubmit={handleSubmit}>
            <div className="search-input-pill">
              <Search className="search-icon" size={19} color="#94a3b8" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Course, topic, creator"
              />
            </div>
            <button type="submit" className="search-lime-btn">
              Search
            </button>
          </form>
        </div>

        {/* Hero Visual Stage (Ellipse + Student + Badges) */}
        <div className="hero-stage">
          {/* Ellips7 7 matching Figma specification:
              width: 1149; height: 1149; angle: 0 deg; opacity: 1; top: 582px; left: 145px; border-width: 320px; border: 320px solid #CBFC01; */}
          <div className="hero-ellipse-7" aria-hidden="true"></div>

          {/* Student Cutout Image matching Figma specification:
              width: 578; height: 541; angle: 0 deg; opacity: 1; top: 512px; left: 431px; */}
          <img
            alt="Student with laptop and headphones"
            className="hero-student-cutout-img"
            src="/images/hero-student-cutout.png"
          />

          {/* Floating Badge 1: Top-Left (UI/UX Design) */}
          <div className="hero-badge badge-ui-design">
            <span className="badge-category-title">UI/UX Design</span>
            <span className="badge-category-stats">200 Courses • 1000+ Students</span>
          </div>

          {/* Floating Badge 2: Top-Right (Learning Progress 55%) */}
          <div className="hero-badge badge-learning-progress">
            <div className="badge-progress-header">
              <span className="badge-progress-label">Learning Progress</span>
            </div>
            <div className="badge-progress-val">55%</div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '55%' }}></div>
            </div>
          </div>

          {/* Floating Badge 3: Bottom-Left (Happy Students 4.5) */}
          <div className="hero-badge badge-bottom-left">
            <div className="badge-text-title">Happy Students</div>
            <div className="badge-students-rating">
              <span className="rating-score">4.5</span>
              <span className="rating-reviews">(240)</span>
              <span className="rating-star">★</span>
            </div>
            <div className="badge-avatars-row">
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
        </div>
      </div>
    </section>
  );
};
