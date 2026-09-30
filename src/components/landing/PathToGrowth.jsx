import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PathToGrowth = () => {
  return (
    <section id="growth" className="growth-features-section">
      {/* ── Exact Figma Radiant Colour Shade Blobs ── */}

      {/* Blob 1: Lime-Yellow top-left  1137×1137 top:-466px left:-152px */}
      <div className="growth-blob growth-blob--lime-tl" aria-hidden="true" />

      {/* Blob 2: Blue top-right  1137×1137 top:-458px left:811px */}
      <div className="growth-blob growth-blob--blue-tr" aria-hidden="true" />

      {/* Blob 3: Lime-Yellow bottom-left  672×672 top:946px left:-287px */}
      <div className="growth-blob growth-blob--lime-bl" aria-hidden="true" />

      <div className="container growth-features-container">
        {/* ========================================================
            ROW 1: Your Path to Professional Growth Starts Here!
            Left: Content & Stats | Right: Boy Student Visual
            ======================================================== */}
        <div className="growth-row growth-row--top">
          {/* Left Column: Copy & Stats */}
          <div className="growth-content-col">
            <h2 className="growth-title">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="growth-description">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="growth-stats-row">
              <div className="stat-card">
                <span className="stat-number">12K</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">70+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">16</span>
                <span className="stat-label">Creators</span>
              </div>
            </div>
          </div>

          {/* Right Column: Boy Visual Artwork (matches Figma Image 2) */}
          <div className="growth-visual-col growth-visual--boy">
            {/* Background Figma Course Card */}
            <div className="growth-figma-card">
              <div className="gfc-thumb-wrap">
                <img
                  src="/images/courses/course1.jpg"
                  alt="Learn Figma from Basic"
                  className="gfc-thumb-img"
                />
                <span className="gfc-badge gfc-badge--lessons">17 Lessons</span>
                <span className="gfc-badge gfc-badge--duration">2 hours 16 mins</span>
              </div>
              <div className="gfc-content">
                <h3 className="gfc-title">Learn Figma from Basic</h3>
                <p className="gfc-author">by purepearl studio</p>
                <div className="gfc-meta-row">
                  <div className="gfc-level-pill">
                    <svg className="gfc-bars-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="14" width="3" height="7" rx="1" />
                      <rect x="10.5" y="8" width="3" height="13" rx="1" />
                      <rect x="18" y="2" width="3" height="19" rx="1" />
                    </svg>
                    <span>Beginner</span>
                  </div>
                  <img
                    src="/images/avatar-emily.jpg"
                    alt="purepearl studio"
                    className="gfc-instructor-avatar"
                  />
                </div>
                <div className="gfc-price-row">
                  <span className="gfc-price">$25</span>
                  <span className="gfc-period">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Boy Student Cutout */}
            <div className="growth-fg-student-wrap growth-fg-boy-wrap">
              <img
                src="/images/hero-student-cutout.png"
                alt="Student with laptop and headphones"
                className="growth-fg-student"
              />
            </div>

            {/* Floating Badge: Learning Progress 55% */}
            <div className="growth-progress-badge">
              <div className="gpb-header">
                <span className="gpb-label">Learning Progress</span>
              </div>
              <div className="gpb-val">55%</div>
              <div className="gpb-bar-track">
                <div className="gpb-bar-fill" style={{ width: '55%' }} />
              </div>
            </div>

            {/* Neon Squiggle above Learning Progress */}
            <div className="growth-boy-squiggle">
              <img
                src="/images/decorations/neon_squiggle_clean.png"
                alt=""
                className="growth-squiggle-img"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: Create & Manage Courses Easily.
            Left: Girl Student Visual | Right: Copy & Checklist
            ======================================================== */}
        <div id="manage" className="growth-row growth-row--bottom">
          {/* Left Column: Girl Visual Artwork (matches Figma Image 3) */}
          <div className="growth-visual-col growth-visual--girl">
            {/* Floating Card 1: Total Revenue (top-left) */}
            <div className="growth-blue-card growth-blue-card--revenue">
              <div className="gbc-label">Total Revenue</div>
              <div className="gbc-sub">July 1-28</div>
              <div className="gbc-value">$120.30</div>
              <div className="gbc-bar-track">
                <div className="gbc-bar-fill" style={{ width: '68%' }} />
              </div>
            </div>

            {/* Floating Card 2: Total Sales (mid-left) */}
            <div className="growth-blue-card growth-blue-card--ytd">
              <div className="gbc-label">Total Sales</div>
              <div className="gbc-value">$1210.45</div>
              <div className="gbc-badge">12%</div>
            </div>

            {/* Female Student Cutout in Center (first photo uploaded by user) */}
            <div className="growth-fg-student-wrap growth-fg-girl-wrap">
              <img
                src="/images/female-student-cutout.png"
                alt="Professional growth instructor"
                className="growth-fg-student"
              />
            </div>

            {/* Neon Squiggle (Top Right) */}
            <div className="growth-girl-squiggle">
              <img
                src="/images/decorations/neon_squiggle_clean.png"
                alt=""
                className="growth-squiggle-img"
              />
            </div>

            {/* Floating Happy Students Badge (Bottom Right) */}
            <div className="growth-happy-badge">
              <div className="ghb-title">Happy Students</div>
              <div className="ghb-rating-row">
                <span className="ghb-score">4.5</span>
                <span className="ghb-count">(240)</span>
                <span className="ghb-star">★</span>
              </div>
              <div className="ghb-avatars-row">
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

          {/* Right Column: Copy & Checklist */}
          <div className="growth-content-col manage-content-col">
            <h2 className="growth-title manage-title">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="growth-description manage-description">
              <strong>ByteSpace</strong> empowers instructors to easily create, launch, and manage online courses with an intuitive and flexible interface.
            </p>

            {/* Feature Points Checklist */}
            <ul className="manage-checklist-clean">
              <li className="checklist-item-clean">
                <CheckCircle2 className="check-icon-blue" size={22} />
                <span>Effortless Course Creation</span>
              </li>
              <li className="checklist-item-clean">
                <CheckCircle2 className="check-icon-blue" size={22} />
                <span>Interactive Tools Integration</span>
              </li>
              <li className="checklist-item-clean">
                <CheckCircle2 className="check-icon-blue" size={22} />
                <span>Flexibility and Autonomy</span>
              </li>
              <li className="checklist-item-clean">
                <CheckCircle2 className="check-icon-blue" size={22} />
                <span>Active Community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Blue Stripe matching Figma Frame */}
      <div className="growth-bottom-stripe" aria-hidden="true" />
    </section>
  );
};
