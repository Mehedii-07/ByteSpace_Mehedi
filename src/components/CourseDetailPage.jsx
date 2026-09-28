import React, { useState } from 'react';
import { 
  ArrowLeft, 
  PlayCircle, 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  FileText, 
  MessageSquare 
} from 'lucide-react';

export const CourseDetailPage = ({ course, onBack, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [expandedSection, setExpandedSection] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!course) return null;

  const curriculumSections = [
    {
      title: 'Module 1: Introduction and Core Fundamentals',
      lessonsCount: 6,
      duration: '3h 15m',
      lessons: [
        { title: '1. Course Overview & Environment Setup', duration: '14:20', isFree: true },
        { title: '2. Understanding Key Architectural Concepts', duration: '28:45', isFree: true },
        { title: '3. First Practical Project Walkthrough', duration: '35:10', isFree: false },
        { title: '4. Best Practices & Industry Standard Guidelines', duration: '22:15', isFree: false },
        { title: '5. Assignment 1: Build Your First Milestone', duration: '40:00', isFree: false }
      ]
    },
    {
      title: 'Module 2: Intermediate Workflows & Real Projects',
      lessonsCount: 8,
      duration: '5h 40m',
      lessons: [
        { title: '6. Component Architecture & Reusability', duration: '31:20', isFree: false },
        { title: '7. State Management & Asynchronous Data', duration: '42:15', isFree: false },
        { title: '8. Interactive Prototyping & Live Testing', duration: '29:50', isFree: false },
        { title: '9. Debugging Common Production Pitfalls', duration: '25:30', isFree: false }
      ]
    },
    {
      title: 'Module 3: Advanced Optimization & Production Deployment',
      lessonsCount: 10,
      duration: '7h 10m',
      lessons: [
        { title: '10. Performance Benchmarks & SEO Optimization', duration: '38:10', isFree: false },
        { title: '11. Deploying to Cloud & CI/CD Pipelines', duration: '45:00', isFree: false },
        { title: '12. Capstone Portfolio Submission & Review', duration: '50:00', isFree: false }
      ]
    }
  ];

  return (
    <div className="course-detail-page">
      {/* Top Banner Navigation */}
      <div className="detail-top-nav-bar">
        <div className="container">
          <button className="back-to-courses-btn" onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Back to All Courses</span>
          </button>
        </div>
      </div>

      <div className="container detail-main-container">
        <div className="detail-content-layout">
          {/* Main Left Column */}
          <div className="detail-left-column">
            {/* Header Meta */}
            <div className="detail-header">
              <span className="detail-category-badge">{course.category} • {course.subtag}</span>
              <h1 className="detail-title">{course.title}</h1>
              <p className="detail-tagline">{course.description}</p>

              <div className="detail-stats-bar">
                <div className="detail-rating-wrap">
                  <div className="stars-cluster">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="rating-num">{course.rating}</span>
                  <span className="reviews-num">({course.reviewsCount} reviews)</span>
                </div>
                <div className="stat-separator">•</div>
                <span className="students-enrolled-count">{course.studentsCount} Active Students</span>
                <div className="stat-separator">•</div>
                <span className="last-updated">Updated September 2026</span>
              </div>

              <div className="detail-instructor-author">
                <img src="/images/avatar-emily.jpg" alt="Instructor" className="author-avatar" />
                <div>
                  <span className="created-by-label">Created by</span>
                  <span className="author-name">{course.instructor}</span>
                </div>
              </div>
            </div>

            {/* Video Player Showcase */}
            <div className="video-player-container">
              {!isPlayingVideo ? (
                <div className="video-poster-box">
                  <img src={course.image} alt={course.title} className="video-poster-img" />
                  <div className="video-overlay-gradient"></div>
                  <button 
                    className="big-play-btn"
                    onClick={() => setIsPlayingVideo(true)}
                    aria-label="Play course preview video"
                  >
                    <PlayCircle size={64} color="#ccff00" />
                    <span className="play-label">Watch Free Preview (3 mins)</span>
                  </button>
                  <div className="video-length-tag">
                    <Clock size={14} />
                    <span>Full Course: {course.duration}</span>
                  </div>
                </div>
              ) : (
                <div className="video-mockup-player">
                  <div className="mockup-player-screen">
                    <img src={course.image} alt="Video playback" className="playing-bg" />
                    <div className="playback-controls-bar">
                      <button className="control-btn" onClick={() => setIsPlayingVideo(false)}>Pause</button>
                      <div className="scrubber-bar">
                        <div className="scrubber-fill" style={{ width: '42%' }}></div>
                      </div>
                      <span className="time-display">01:45 / 03:00</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Course Content Tabs Navigation */}
            <div className="detail-tabs-nav">
              <button 
                className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                onClick={() => setActiveTab('curriculum')}
              >
                Curriculum ({course.lessons} Lessons)
              </button>
              <button 
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Course Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
                onClick={() => setActiveTab('instructor')}
              >
                Instructor
              </button>
              <button 
                className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Student Reviews
              </button>
            </div>

            {/* Tab 1: Curriculum Accordion */}
            {activeTab === 'curriculum' && (
              <div className="curriculum-accordion-box">
                <div className="accordion-summary">
                  <span>3 modules • {course.lessons} lectures • {course.duration} total length</span>
                </div>
                {curriculumSections.map((sec, idx) => (
                  <div key={idx} className="accordion-module-card">
                    <div 
                      className="module-header"
                      onClick={() => setExpandedSection(expandedSection === idx ? -1 : idx)}
                    >
                      <div className="module-title-wrap">
                        {expandedSection === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        <h4>{sec.title}</h4>
                      </div>
                      <span className="module-meta">{sec.lessonsCount} lessons • {sec.duration}</span>
                    </div>

                    {expandedSection === idx && (
                      <div className="module-lessons-list">
                        {sec.lessons.map((lesson, lIdx) => (
                          <div key={lIdx} className="lesson-row">
                            <div className="lesson-left">
                              <PlayCircle size={16} color={lesson.isFree ? '#1456fd' : '#94a3b8'} />
                              <span className="lesson-name">{lesson.title}</span>
                            </div>
                            <div className="lesson-right">
                              {lesson.isFree ? (
                                <span className="preview-tag">Preview</span>
                              ) : (
                                <Lock size={14} color="#94a3b8" />
                              )}
                              <span className="lesson-dur">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Overview */}
            {activeTab === 'overview' && (
              <div className="overview-tab-content">
                <h3 className="subheading">What you will learn</h3>
                <div className="learning-outcomes-grid">
                  <div className="outcome-item">
                    <Check size={16} color="#16a34a" />
                    <span>Architect enterprise-grade systems with modern standards</span>
                  </div>
                  <div className="outcome-item">
                    <Check size={16} color="#16a34a" />
                    <span>Solve complex challenges with practical hands-on exercises</span>
                  </div>
                  <div className="outcome-item">
                    <Check size={16} color="#16a34a" />
                    <span>Complete 4 portfolio-ready real world projects</span>
                  </div>
                  <div className="outcome-item">
                    <Check size={16} color="#16a34a" />
                    <span>Receive verifiable certification to showcase on LinkedIn</span>
                  </div>
                </div>

                <h3 className="subheading mt-6">Requirements</h3>
                <ul className="req-list">
                  <li>No prior advanced experience needed; we start from first principles.</li>
                  <li>A computer (Windows, Mac, or Linux) with an internet connection.</li>
                </ul>
              </div>
            )}

            {/* Tab 3: Instructor */}
            {activeTab === 'instructor' && (
              <div className="instructor-tab-content">
                <div className="instructor-profile-card">
                  <img src="/images/avatar-emily.jpg" alt="Instructor" className="instructor-lg-avatar" />
                  <div className="instructor-details">
                    <h3>{course.instructor}</h3>
                    <p className="instructor-headline">Industry Expert & Staff Mentor</p>
                    <div className="instructor-stats-row">
                      <span>★ 4.9 Instructor Rating</span>
                      <span>•</span>
                      <span>42,000+ Students</span>
                      <span>•</span>
                      <span>12 Courses</span>
                    </div>
                  </div>
                </div>
                <p className="instructor-bio">
                  Emily has over 10 years of experience designing digital products and teaching high-demand tech skills to engineers and designers worldwide. She brings actionable, real-world industry techniques to every lesson.
                </p>
              </div>
            )}

            {/* Tab 4: Reviews */}
            {activeTab === 'reviews' && (
              <div className="reviews-tab-content">
                <div className="review-summary-banner">
                  <div className="big-rating-box">
                    <span className="big-rating-number">{course.rating}</span>
                    <div className="stars-cluster">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="summary-reviews-count">Course Rating</span>
                  </div>
                </div>

                <div className="student-comments-list">
                  <div className="comment-item">
                    <div className="comment-user">
                      <img src="/images/avatar-james.jpg" alt="Student" className="comment-avatar" />
                      <div>
                        <h5>James W.</h5>
                        <div className="stars-cluster">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="comment-text">
                      "Exceptional course! The pacing is perfect, and the real-world assignments made concepts click instantly."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Sidebar Enrollment Card */}
          <div className="detail-right-sidebar">
            <div className="enroll-card-sticky">
              <div className="sidebar-price-row">
                <span className="sidebar-price-val">${course.price}</span>
                <span className="sidebar-original-price">${course.price * 2}</span>
                <span className="sidebar-discount-pill">50% OFF</span>
              </div>

              <div className="sidebar-actions">
                <button 
                  className="sidebar-enroll-btn"
                  onClick={() => onAddToCart(course)}
                >
                  Enroll Now
                </button>
                <button 
                  className="sidebar-add-cart-btn"
                  onClick={() => onAddToCart(course)}
                >
                  Add to Cart
                </button>
              </div>

              <p className="guarantee-caption">30-Day Money-Back Guarantee • Lifetime Access</p>

              <div className="course-includes-block">
                <h4>This course includes:</h4>
                <ul className="includes-list">
                  <li><Clock size={16} color="#1456fd" /> {course.duration} on-demand video</li>
                  <li><FileText size={16} color="#1456fd" /> {course.lessons} interactive coding challenges</li>
                  <li><Download size={16} color="#1456fd" /> 36 downloadable resource files</li>
                  <li><ShieldCheck size={16} color="#1456fd" /> Certificate of completion</li>
                  <li><MessageSquare size={16} color="#1456fd" /> Discord mentor community access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
