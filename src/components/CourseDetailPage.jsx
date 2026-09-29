import React, { useState } from 'react';
import { 
  Share2, 
  Star, 
  Users, 
  Check, 
  Play, 
  Pause, 
  BookOpen, 
  Video, 
  Award, 
  Headphones, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  PlayCircle,
  CheckCircle2
} from 'lucide-react';

export const CourseDetailPage = ({ course, onBack, onAddToCart, initialTab = 'lesson' }) => {
  const [activeTab, setActiveTab] = useState(initialTab); // 'about' | 'lesson' | 'reviews'
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [expandedModule, setExpandedModule] = useState(0);

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

  const lessonModules = [
    {
      title: 'Module 1: Introduction to Digital Assets',
      description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation."
    },
    {
      title: 'Module 2: Design Principles for Impact',
      description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills."
    },
    {
      title: 'Module 4: User-Centric Design Strategies',
      description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design."
    },
    {
      title: 'Module 5: Interactive Media and Engagement',
      description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences."
    },
    {
      title: 'Module 6: Project Showcase and Critique',
      description: "Reflect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence."
    },
    {
      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
      description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes."
    }
  ];

  const curriculumModules = [
    {
      title: 'Module 1: Foundational Digital Creation & Asset Setup',
      lessonsCount: 6,
      duration: '3h 15m',
      lessons: [
        { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins', isFree: true },
        { num: '02', title: 'Design Principles for Impact', duration: '21 mins', isFree: true },
        { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins', isFree: false },
        { num: '04', title: 'Typography and Color Harmony for Products', duration: '24 mins', isFree: false },
        { num: '05', title: 'Mastering Layouts & Responsive Grids', duration: '18 mins', isFree: false }
      ]
    },
    {
      title: 'Module 2: Real-World Workflow & Vector Asset Production',
      lessonsCount: 8,
      duration: '5h 40m',
      lessons: [
        { num: '06', title: 'Component Architecture & Scalability', duration: '32 mins', isFree: false },
        { num: '07', title: 'Interactive Prototyping & Motion Foundations', duration: '28 mins', isFree: false },
        { num: '08', title: 'Exporting Multi-Platform Assets', duration: '19 mins', isFree: false },
        { num: '09', title: 'Asset Organization & Version Control', duration: '25 mins', isFree: false }
      ]
    },
    {
      title: 'Module 3: Portfolio Showcases & Commercial Monetization',
      lessonsCount: 10,
      duration: '7h 10m',
      lessons: [
        { num: '10', title: 'Preparing Commercial Deliverables', duration: '35 mins', isFree: false },
        { num: '11', title: 'Monetization Models for Independent Creators', duration: '40 mins', isFree: false },
        { num: '12', title: 'Capstone Project: Complete Asset Suite Review', duration: '55 mins', isFree: false }
      ]
    }
  ];

  const keyPointsList = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio'
  ];

  const sneakPeakImages = [
    {
      url: '/images/sneak-peak-1.jpg',
      alt: 'UI Wireframing and design sketches on paper'
    },
    {
      url: '/images/sneak-peak-2.jpg',
      alt: 'MacBook Pro screen showing design interface'
    },
    {
      url: '/images/sneak-peak-3.jpg',
      alt: 'Desktop iMac showcasing visual design system and layouts'
    },
    {
      url: '/images/sneak-peak-4.jpg',
      alt: 'Mobile smartphones displaying Byte app interface'
    }
  ];

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
              {activeTab === 'about' && (
                <div className="detail-tab-panel" role="tabpanel">
                  
                  {/* Description Section */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Description</h3>
                    <div className="detail-description-paragraphs">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;Build Digital Asset: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak Section with 4 Grid Images */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Sneak Peak</h3>
                    <div className="detail-sneak-peak-grid">
                      {sneakPeakImages.map((img, idx) => (
                        <div key={idx} className="sneak-peak-card">
                          <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="sneak-peak-img"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Section with Blue Check Circles */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Key Points</h3>
                    <ul className="detail-key-points-list">
                      {keyPointsList.map((point, index) => (
                        <li key={index} className="key-point-row">
                          <span className="blue-circle-check" aria-hidden="true">
                            <Check size={12} color="#FFFFFF" strokeWidth={3} />
                          </span>
                          <span className="key-point-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}

              {/* TAB 2: LESSON */}
              {(activeTab === 'lesson' || activeTab === 'lessons') && (
                <div className="detail-tab-panel" role="tabpanel">
                  {/* 1. Explore the Modules */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Explore the Modules</h3>
                    <p className="detail-section-desc">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* 2. Lesson List */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Lesson List</h3>
                    <div className="detail-modules-list">
                      {lessonModules.map((module, mIdx) => (
                        <div key={mIdx} className="module-item-card">
                          <div className="module-item-icon-box">
                            <Video size={20} color="#0A0F1D" strokeWidth={2.2} />
                          </div>
                          <div className="module-item-content">
                            <h4 className="module-item-title">{module.title}</h4>
                            <p className="module-item-desc">{module.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Lesson Content */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Lesson Content</h3>
                    <p className="detail-section-desc">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  {/* 4. Lesson Progress Tracking */}
                  <div className="detail-info-block">
                    <h3 className="detail-section-title">Lesson Progress Tracking</h3>
                    <p className="detail-section-desc">
                      Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                    </p>

                    {/* Progress Card Box */}
                    <div className="lesson-progress-card">
                      <span className="progress-card-label">Learning Progress</span>
                      <div className="progress-card-percent">55%</div>
                      <div className="progress-card-bar-track">
                        <div className="progress-card-bar-fill" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS */}
              {activeTab === 'reviews' && (
                <div className="detail-tab-panel" role="tabpanel">
                  <h3 className="detail-section-title">Student Reviews</h3>
                  <div className="detail-reviews-overview">
                    <div className="reviews-score-badge">
                      <span className="big-rating-number">{courseData.rating}</span>
                      <div className="star-rating-cluster">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                        ))}
                      </div>
                      <span className="reviews-count-caption">Course Rating • {courseData.reviewsCount} reviews</span>
                    </div>
                    
                    <div className="review-cards-list">
                      <div className="review-card-item">
                        <div className="review-card-user">
                          <img src="/images/avatar-james.jpg" alt="Student reviewer" className="reviewer-avatar" />
                          <div>
                            <h5>James Wilson</h5>
                            <div className="star-rating-cluster">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="review-card-comment">
                          &ldquo;This course is pure gold! The practical asset creation walkthroughs helped me launch my own digital store in under two weeks.&rdquo;
                        </p>
                      </div>
                      <div className="review-card-item">
                        <div className="review-card-user">
                          <img src="/images/avatar-emily.jpg" alt="Student reviewer" className="reviewer-avatar" />
                          <div>
                            <h5>Sarah Jenkins</h5>
                            <div className="star-rating-cluster">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="review-card-comment">
                          &ldquo;Every lesson is clear, well-paced, and actionable. Best design and digital asset resource on the web.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
