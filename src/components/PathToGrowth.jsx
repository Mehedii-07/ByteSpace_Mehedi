import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { NeonSquiggle, GlowBlob } from './DecorativeElements';

export const PathToGrowth = () => {
  return (
    <section id="growth" className="growth-section">
      {/* Background Soft Glow Blobs */}
      <GlowBlob color="rgba(20, 86, 253, 0.08)" size={420} style={{ top: '10%', right: '5%' }} />
      <GlowBlob color="rgba(204, 255, 0, 0.12)" size={350} style={{ bottom: '10%', left: '10%' }} />

      <div className="container growth-container">
        {/* Left Column: Content & Stats */}
        <div className="growth-content-col">
          <h2 className="growth-title">
            Your Path to Professional<br />
            Growth Starts Here!
          </h2>
          <p className="growth-description">
            Find courses aligned with your career goals. Build real-world portfolio projects, gain recognized certificates, and receive personalized feedback from industry mentors who work at top tech companies.
          </p>

          {/* Stats Row */}
          <div className="growth-stats-row">
            <div className="stat-card">
              <span className="stat-number">10K</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">70+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">16</span>
              <span className="stat-label">Mentors</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Visual Artwork */}
        <div className="growth-visual-col">
          {/* Background Card (Design Workshop) */}
          <div className="growth-bg-card">
            <img 
              src="/images/workshop-meeting.jpg" 
              alt="Design workshop collaboration" 
              className="growth-bg-img"
            />
          </div>

          {/* Floating Course Preview Badge on Left */}
          <div className="growth-left-floating-card animate-float">
            <div className="gl-badge-title">UX/UI Design: From Beginner to Pro</div>
            <div className="gl-badge-sub">UI/UX Design</div>
            <div className="gl-badge-bottom">
              <span className="gl-badge-price">$24</span>
              <span className="gl-badge-term">/course</span>
            </div>
          </div>

          {/* Foreground Student Cutout Image */}
          <div className="growth-fg-student-wrap">
            <img 
              src="/images/hero-student-cutout.png" 
              alt="Professional growth student" 
              className="growth-fg-student"
            />
          </div>

          {/* Floating Course Progress Badge on Right */}
          <div className="growth-floating-badge animate-float-reverse">
            <div className="badge-header-row">
              <span className="badge-title">Overall Progress</span>
              <span className="badge-percent">68%</span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '68%' }}></div>
            </div>
            <div className="badge-sub-row">
              <CheckCircle2 size={13} color="#16a34a" />
              <span>Certified Track</span>
            </div>
          </div>

          {/* Neon Squiggle Doodle */}
          <div className="growth-squiggle animate-float">
            <NeonSquiggle width={90} height={90} />
          </div>
        </div>
      </div>
    </section>
  );
};
