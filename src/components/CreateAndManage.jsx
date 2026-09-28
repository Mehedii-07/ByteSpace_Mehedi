import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { NeonSquiggle, GlowBlob } from './DecorativeElements';

export const CreateAndManage = () => {
  const points = [
    'Create & customize interactive courses',
    'Automated certification & grading',
    'Comprehensive learner analytics',
    'Fast, direct & secure global payouts'
  ];

  return (
    <section className="create-manage-section">
      <GlowBlob color="rgba(20, 86, 253, 0.07)" size={400} style={{ top: '20%', left: '5%' }} />
      <GlowBlob color="rgba(204, 255, 0, 0.1)" size={320} style={{ bottom: '15%', right: '10%' }} />

      <div className="container create-manage-container">
        {/* Left Column: Visual Artwork with Instructor & Floating Badges */}
        <div className="manage-visual-col">
          {/* Main Instructor Cutout Image */}
          <div className="instructor-cutout-wrap">
            <img 
              src="/images/female-instructor.jpg" 
              alt="Course Creator and Instructor on ByteSpace" 
              className="instructor-photo-cutout"
            />
          </div>

          {/* Floating Badge 1: Total Revenue (Deep Blue card matching photo) */}
          <div className="manage-badge badge-revenue animate-float">
            <span className="badge-revenue-label">Total Revenue</span>
            <div className="badge-revenue-amount">
              <span>$28,950</span>
            </div>
            <div className="revenue-progress-track">
              <div className="revenue-progress-fill" style={{ width: '74%' }}></div>
            </div>
          </div>

          {/* Floating Badge 2: Total Enrolled (Deep Blue card matching photo) */}
          <div className="manage-badge badge-enrolled animate-float-reverse">
            <span className="badge-revenue-label">Total Enrolled</span>
            <div className="badge-enrolled-amount">
              <span>$12,450.00</span>
            </div>
            <div className="enrolled-indicator-tag">
              <div className="lime-dot"></div>
              <span>Active</span>
            </div>
          </div>

          {/* Floating Badge 3: Trusted by 10k+ Creators */}
          <div className="manage-badge badge-trusted-creators animate-float">
            <span className="trusted-creators-title">Trusted by 10k+ Creators</span>
            <div className="instructor-avatars-row">
              <img src="/images/avatar-emily.jpg" alt="Creator" className="stack-avatar" />
              <img src="/images/avatar-james.jpg" alt="Creator" className="stack-avatar" />
              <img src="/images/avatar-michael.jpg" alt="Creator" className="stack-avatar" />
              <div className="stack-badge-count">+1.8k</div>
            </div>
          </div>

          {/* Neon Squiggle Doodle */}
          <div className="manage-squiggle animate-float">
            <NeonSquiggle width={95} height={95} />
          </div>
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="manage-content-col">
          <h2 className="manage-title">
            Create & Manage<br />
            Courses Easily.
          </h2>
          <p className="manage-description">
            ByteSpace provides an all-in-one platform for creators and educators to share knowledge, engage students, and scale their teaching business worldwide without technical friction.
          </p>

          {/* Feature Points Checklist */}
          <ul className="manage-checklist">
            {points.map((point, index) => (
              <li key={index} className="checklist-item">
                <div className="check-icon-circle">
                  <CheckCircle2 size={18} color="#1456fd" />
                </div>
                <span className="check-item-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
