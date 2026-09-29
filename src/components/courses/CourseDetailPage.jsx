import React, { useState } from 'react';
import { 
  Share2, 
  Star, 
  Users, 
  Play, 
  Pause, 
  BookOpen, 
  Video, 
  Award, 
  Headphones, 
  CheckCircle2
} from 'lucide-react';
import { CourseAbout } from './CourseAbout';
import { CourseLesson } from './CourseLesson';
import { CourseReview } from './CourseReview';

export const CourseDetailPage = ({ course, onBack, onAddToCart, initialTab = 'reviews' }) => {
  const [activeTab, setActiveTab] = useState(initialTab); // 'about' | 'lesson' | 'reviews'
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Standard course data matching the Figma screenshot
  const courseData = {
    title: course?.title ? (course.title.includes('Guide') ? course.title : `${course.title}: A Comprehensive Guide`) : 'Build Digital Asset: A Comprehensive Guide',
    subtitle: course?.subtitle || 'Unlock the Power of Digital Creation with Expert Guidance',
    instructor: course?.instructor || 'purepearl studio',
    level: course?.level || 'Intermediate',
    rating: course?.rating ? (course.rating < 4.8 ? 4.8 : course.rating) : 4.8,
    reviewsCount: course?.reviewsCount || 172,
    studentsCount: course?.studentsCount ? (course.studentsCount.includes('Students') ? course.studentsCount : `${course.studentsCount} Students`) : '199 Students',
    price: course?.price || 25,
    priceTerm: course?.priceTerm || '/lifetime',
    lessonsTotal: '112 Lessons (24 hours)',
    previewImage: '/images/course-digital-asset-preview.jpg',
    creatorAvatar: '/images/purepearl-studio-avatar.jpg',
    creatorName: 'PurePearl Studio',
    creatorRole: 'Professional Creator',
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Course link copied to clipboard!');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleEnroll = () => {
    if (onAddToCart) {
      onAddToCart(course || courseData);
    }
    setToastMessage('Enrolled in course successfully!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="course-detail-page-wrapper">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="detail-toast-alert" role="status">
          <CheckCircle2 size={18} color="#003BE2" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. BLUE HERO SECTION WITH 120PX CRISP GRID (CONTAINS HEADER + VIDEO + TOP OF SIDEBAR) */}
      <section className="detail-hero-section bg-grid-pattern">
        <div className="container detail-container">
          
          {/* Header Row: Title & Badges on Left; Share Button on Right */}
          <div className="detail-hero-top-row">
            <div className="detail-hero-info">
              <h1 className="detail-hero-title">
                {courseData.title}
              </h1>
              <p className="detail-hero-subtitle">
                {courseData.subtitle}
              </p>
              
              <div className="detail-hero-author-row">
                <span className="by-prefix">by</span>{' '}
                <span className="author-lime-link">{courseData.instructor}</span>
              </div>

              {/* 3 Pill Badges */}
              <div className="detail-hero-badges-bar">
                <div className="detail-badge-pill">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="#003BE2" className="badge-level-bars">
                    <rect x="1" y="9" width="3" height="6" rx="1" />
                    <rect x="6.5" y="5" width="3" height="10" rx="1" />
                    <rect x="12" y="1" width="3" height="14" rx="1" />
                  </svg>
                  <span>{courseData.level}</span>
                </div>

                <div className="detail-badge-pill">
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <span>{courseData.rating} ({courseData.reviewsCount} reviews)</span>
                </div>

                <div className="detail-badge-pill">
                  <Users size={14} color="#003BE2" />
                  <span>{courseData.studentsCount}</span>
                </div>
              </div>
            </div>

            {/* Right Share Button matching Figma slice */}
            <div className="detail-hero-action">
              <button 
                type="button"
                className="detail-share-pill-btn"
                onClick={handleShare}
                aria-label="Share this course"
              >
                <Share2 size={16} color="#0A0F1D" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Media Row: Left Video Player Card & Right Sidebar Card Anchor (BOTH START HERE IN BLUE HERO!) */}
          <div className="detail-hero-showcase-row">
            {/* Left: Video Player Card (100% inside blue hero with crisp blue grid underneath) */}
            <div className="detail-video-card-container">
              <div className="detail-video-player-card">
                {!isPlayingVideo ? (
                  <div className="video-poster-wrapper">
                    <img 
                      src={courseData.previewImage} 
                      alt={courseData.title}
                      className="video-poster-image"
                      loading="eager"
                    />
                    
                    {/* Centered Frosted Glass Circular Play Button */}
                    <button 
                      type="button" 
                      className="frosted-play-button"
                      onClick={() => setIsPlayingVideo(true)}
                      aria-label="Play course video preview"
                    >
                      <div className="frosted-play-circle">
                        <Play size={26} fill="#FFFFFF" color="#FFFFFF" className="play-triangle-icon" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="video-active-playback-container">
                    <img 
                      src={courseData.previewImage} 
                      alt="Course in progress" 
                      className="video-poster-image video-blur-bg"
                    />
                    <div className="video-active-controls">
                      <button 
                        type="button"
                        className="video-playback-toggle-btn"
                        onClick={() => setIsPlayingVideo(false)}
                      >
                        <Pause size={18} />
                        <span>Pause Preview</span>
                      </button>
                      <div className="video-time-track">
                        <div className="video-track-fill" style={{ width: '38%' }}></div>
                      </div>
                      <span className="video-time-text">04:12 / 12:00</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Floating Sidebar Card (Anchor Column) */}
            <div className="detail-sidebar-anchor-col">
              <aside className="detail-floating-sidebar-card">
                
                {/* 1. Header: 112 Lessons (24 hours) */}
                <h2 className="sidebar-lessons-header">
                  {courseData.lessonsTotal}
                </h2>

                {/* 2. Top 3 Lessons Preview */}
                <div className="sidebar-lessons-preview-list">
                  <div className="sidebar-lesson-preview-row">
                    <div className="lesson-preview-left">
                      <span className="lesson-preview-num">01</span>
                      <span className="lesson-preview-title">Introduction to Digital Assets</span>
                    </div>
                    <span className="lesson-preview-duration">12 mins</span>
                  </div>

                  <div className="sidebar-lesson-preview-row">
                    <div className="lesson-preview-left">
                      <span className="lesson-preview-num">02</span>
                      <span className="lesson-preview-title">Design Principles for Impacts</span>
                    </div>
                    <span className="lesson-preview-duration">21 mins</span>
                  </div>

                  <div className="sidebar-lesson-preview-row">
                    <div className="lesson-preview-left">
                      <span className="lesson-preview-num">03</span>
                      <span className="lesson-preview-title">Advanced Techniques in Digital Creation</span>
                    </div>
                    <span className="lesson-preview-duration">16 mins</span>
                  </div>

                  <p className="sidebar-more-videos-text">99 more videos</p>
                </div>

                {/* 3. Dive-In Call to Action */}
                <p className="sidebar-cta-pitch">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* 4. Price: $25 /lifetime */}
                <div className="sidebar-price-container">
                  <span className="sidebar-price-val">${courseData.price}</span>
                  <span className="sidebar-price-term">{courseData.priceTerm}</span>
                </div>

                {/* 5. Big Neon Lime Enroll Now Button */}
                <button 
                  type="button"
                  className="sidebar-enroll-btn"
                  onClick={handleEnroll}
                >
                  Enroll Now
                </button>

                {/* 6. This course include */}
                <div className="sidebar-includes-block">
                  <h3 className="sidebar-includes-title">This course include</h3>
                  <ul className="sidebar-includes-list">
                    <li className="sidebar-include-item">
                      <BookOpen size={17} color="#003BE2" className="include-icon" />
                      <span>Learning Resources</span>
                    </li>
                    <li className="sidebar-include-item">
                      <Video size={17} color="#003BE2" className="include-icon" />
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="sidebar-include-item">
                      <Award size={17} color="#003BE2" className="include-icon" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="sidebar-include-item">
                      <Headphones size={17} color="#003BE2" className="include-icon" />
                      <span>Private Consultation</span>
                    </li>
                  </ul>
                </div>

                {/* 7. Creator Mini Profile */}
                <div className="sidebar-creator-section">
                  <div className="creator-profile-info">
                    <img 
                      src={courseData.creatorAvatar} 
                      alt={courseData.creatorName}
                      className="creator-avatar-img"
                    />
                    <div className="creator-meta-col">
                      <h4 className="creator-name">{courseData.creatorName}</h4>
                      <p className="creator-tagline">{courseData.creatorRole}</p>
                    </div>
                  </div>

                  <p className="creator-bio-prompt">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <button 
                    type="button" 
                    className="sidebar-profile-outline-btn"
                    onClick={() => {
                      setToastMessage('Viewing PurePearl Studio full creator portfolio!');
                      setTimeout(() => setToastMessage(null), 3000);
                    }}
                  >
                    See Full Profile
                  </button>
                </div>

              </aside>
            </div>
          </div>

        </div>
      </section>

      {/* 2. LOWER WHITE SECTION (TABS, DESCRIPTION, SNEAK PEAK, KEY POINTS) */}
      <section className="detail-lower-content-section">
        <div className="container detail-container">
          <div className="detail-lower-two-col-grid">
            
            {/* Left Column: Content */}
            <div className="detail-lower-left-col">
              
              {/* 3 Pill Tabs matching Figma */}
              <div className="detail-pill-tabs-nav" role="tablist">
                <button 
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'about'}
                  className={`detail-tab-pill-btn ${activeTab === 'about' ? 'active' : ''}`}
                  onClick={() => setActiveTab('about')}
                >
                  About
                </button>
                <button 
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'lesson' || activeTab === 'lessons'}
                  className={`detail-tab-pill-btn ${(activeTab === 'lesson' || activeTab === 'lessons') ? 'active' : ''}`}
                  onClick={() => setActiveTab('lesson')}
                >
                  Lesson
                </button>
                <button 
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'reviews'}
                  className={`detail-tab-pill-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>

              {/* TAB 1: ABOUT */}
              {activeTab === 'about' && <CourseAbout />}

              {/* TAB 2: LESSON */}
              {(activeTab === 'lesson' || activeTab === 'lessons') && <CourseLesson />}

              {/* TAB 3: REVIEWS */}
              {activeTab === 'reviews' && <CourseReview />}

            </div>

            {/* Right Column: Spacer matching 380px width so floating card has its column space */}
            <div className="detail-sidebar-spacer-col" aria-hidden="true"></div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
