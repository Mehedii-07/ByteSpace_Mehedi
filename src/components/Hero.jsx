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
      {/* Background blend light layers matching Figma specs */}
      <div className="hero-blend-layer-1" aria-hidden="true"></div>
      <div className="hero-blend-layer-2" aria-hidden="true"></div>

      {/* 3D Decorative Doodles & Ellips7 matching Figma assets */}
      <div className="hero-decorations" aria-hidden="true">
        <div className="hero-decorations-wrapper">
          {/* Ellips7 Arch: width: 1149px, height: 1149px, top: 582px, left: 145px, border: 320px solid #CBFC01 */}
          <div className="hero-ellipse-7" aria-hidden="true"></div>
          {/* Top-Left Lime Squiggle */}
          <img
            src="/images/decorations/lime_squiggle_top_left.png"
            alt=""
            className="hero-decor decor-top-left animate-float"
          />

          {/* Mid-Left White Zigzag */}
          <img
            src="/images/decorations/white_zigzag_mid_left.png"
            alt=""
            className="hero-decor decor-mid-left animate-float-reverse"
          />

          {/* Lower-Left Large White 3D Torus */}
          <img
            src="/images/decorations/white_torus_bottom_left.png"
            alt=""
            className="hero-decor decor-torus animate-float"
          />

          {/* Top-Right Neon Cylinder */}
          <img
            src="/images/decorations/lime_cylinder_top_right.png"
            alt=""
            className="hero-decor decor-cylinder animate-float"
          />

          {/* Cone matching Figma: width: 188px; height: 188px; top: 464px; left: 1106px; angle: 0 deg; opacity: 1 */}
          <img
            src="/images/decorations/white_cone.png"
            alt=""
            className="hero-decor decor-cone animate-float-reverse"
          />

          {/* Bottom-Right White Coil */}
          <img
            src="/images/decorations/white_coil_bottom_right.png"
            alt=""
            className="hero-decor decor-bottom-right animate-float"
          />
        </div>
      </div>

      <div className="container hero-container">
        {/* Hero Headings matching Figma */}
        <div className="hero-content">
          <h1 className="hero-title">
            Get Access to Hundreds Courses
            Available
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

        {/* Hero Graphic Showcase with Badges */}
        <div className="hero-showcase">
          {/* Student Cutout Image matching user uploaded cutout */}
          <div className="hero-image-wrapper">
            <img
              src="/images/hero-student-cutout.png"
              alt="Student with laptop and headphones"
              className="hero-student-cutout-img"
            />
          </div>

          {/* Floating Badge 1: Top-Left (UI/UX Design matching screenshot) */}
          <div className="hero-badge badge-ui-design animate-float">
            <span className="badge-category-title">UI/UX Design</span>
            <span className="badge-category-stats">200 Courses • 1000+ Students</span>
          </div>

          {/* Floating Badge 2: Top-Right (Learning Progress 55% matching screenshot) */}
          <div className="hero-badge badge-learning-progress animate-float-reverse">
            <div className="badge-progress-header">
              <span className="badge-progress-label">Learning Progress</span>
            </div>
            <div className="badge-progress-val">55%</div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '55%' }}></div>
            </div>
          </div>

          {/* Floating Badge 3: Bottom-Left (Happy Students matching Figma) */}
          <div className="hero-badge badge-bottom-left animate-float">
            <div className="badge-text-title">Happy Students</div>
            <div className="badge-students-rating">
              <span className="rating-score">4.5</span>
              <span className="rating-reviews">(240)</span>
              <span className="rating-star">★</span>
            </div>
            <div className="badge-avatars-row">
              <img src="/images/avatar-emily.jpg" alt="Student" className="badge-avatar" />
              <img src="/images/avatar-james.jpg" alt="Student" className="badge-avatar" />
              <img src="/images/avatar-michael.jpg" alt="Student" className="badge-avatar" />
              <img src="/images/workshop-meeting.jpg" alt="Student" className="badge-avatar" />
              <div className="badge-avatar-more badge-avatar-lime">2K+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
