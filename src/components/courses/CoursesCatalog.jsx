import React, { useState, useMemo } from 'react';
import { Star, Heart, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '../../data/coursesData';

export const CoursesCatalog = ({ searchQuery = '', onSelectCourse, onAddToCart, onOpen404 }) => {
  const [activeFilter, setActiveFilter] = useState('Featured');
  const [favorites, setFavorites] = useState({});

  const filterPillsRow1 = [
    'Featured',
    'UI/UX',
    'Drawing & Painting',
    '3D Modeling',
    'Character',
    'Digital Making',
    'UI/UX Design',
    'Content & Writing'
  ];

  const filterPillsRow2 = [
    'Physics & Chemistry',
    'Web Analysis',
    'Sports',
    'Personal & Future Development',
    'Financial Literacy',
    'Photography'
  ];

  const filterPillsRow3 = [
    'Film and Video',
    'Game Development',
    'Basic Science',
    'Dancing',
    '+ More'
  ];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      // Pill filter
      let matchesFilter = true;
      if (activeFilter !== 'Featured' && activeFilter !== '+ More') {
        const query = activeFilter.toLowerCase();
        matchesFilter = (
          (course.category && course.category.toLowerCase().includes(query)) ||
          (course.subtag && course.subtag.toLowerCase().includes(query)) ||
          (course.title && course.title.toLowerCase().includes(query)) ||
          (course.description && course.description.toLowerCase().includes(query))
        );
      }

      // Search query filter
      const matchesQuery = searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtag.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Discover Your Passion,<br />
            Build Your Skills
          </h2>
          <p className="section-subtitle">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3-Row Filter Pills Cloud matching Figma slice_2 */}
        <div className="figma-filters-cloud">
          <div className="figma-filter-row">
            {filterPillsRow1.map((pill) => (
              <button
                key={pill}
                className={`figma-pill-btn ${activeFilter === pill ? 'active' : ''}`}
                onClick={() => setActiveFilter(pill)}
              >
                {pill}
              </button>
            ))}
          </div>

          <div className="figma-filter-row">
            {filterPillsRow2.map((pill) => (
              <button
                key={pill}
                className={`figma-pill-btn ${activeFilter === pill ? 'active' : ''}`}
                onClick={() => setActiveFilter(pill)}
              >
                {pill}
              </button>
            ))}
          </div>

          <div className="figma-filter-row">
            {filterPillsRow3.map((pill) => (
              <button
                key={pill}
                className={`figma-pill-btn ${pill === '+ More' ? 'more-pill' : ''} ${activeFilter === pill ? 'active' : ''}`}
                onClick={() => {
                  if (pill === '+ More') {
                    if (onOpen404) {
                      onOpen404();
                    } else if (typeof window !== 'undefined') {
                      window.location.hash = '#404';
                    }
                  } else {
                    setActiveFilter(pill);
                  }
                }}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Search feedback indicator if query active */}
        {searchQuery && (
          <div className="search-status-bar">
            <span>Showing results for "<strong>{searchQuery}</strong>" ({filteredCourses.length} found)</span>
            <button
              className="clear-search-link"
              onClick={() => setActiveFilter('Featured')}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => onSelectCourse && onSelectCourse(course)}
            >
              {/* Card Image Container */}
              <div className="course-image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-thumbnail"
                  loading="lazy"
                />

                {/* Auto Layout Horizontal Pills: width: 315; height: 26; top: 150px; left: 13px; gap: 12px; */}
                <div className="course-image-pills-bar">
                  <span className="course-pill-item pill-lessons">
                    {course.lessons} Lessons
                  </span>
                  <span className="course-pill-item pill-duration">
                    {course.duration}
                  </span>
                  <span className="course-pill-item pill-comments">
                    {course.comments} Comments
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="course-card-body">
                {/* Title & Rating Row */}
                <div className="course-title-rating-row">
                  <h3 className="course-card-title">
                    {course.title}
                  </h3>
                  <div className="course-card-rating">
                    <span className="rating-value">{course.rating}</span>
                    <Star size={18} fill="#CBD5E1" color="#CBD5E1" className="rating-star" />
                  </div>
                </div>

                {/* Author: by purepearl studio */}
                <div className="course-author-row">
                  <span className="by-prefix">by </span>
                  <span className="author-name">{course.instructor}</span>
                </div>

                {/* Level Pill & Student Avatars Stack Row */}
                <div className="course-meta-avatars-row">
                  <div className="course-level-pill">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="level-bar-icon">
                      <rect x="1" y="9" width="3" height="6" rx="1" />
                      <rect x="6.5" y="5" width="3" height="10" rx="1" />
                      <rect x="12" y="1" width="3" height="14" rx="1" />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  {/* Student Avatars Stack: width: 128; height: 32; */}
                  <div className="student-avatars-stack">
                    <img
                      src="/images/student-avatars-stack.png"
                      alt="Enrolled students"
                      className="avatar-stack-img"
                      width="128"
                      height="32"
                    />
                  </div>
                </div>

                {/* Price Row: $25/lifetime */}
                <div className="course-card-footer">
                  <div className="course-price-wrap">
                    <span className="price-tag">${course.price}</span>
                    <span className="price-term">{course.priceTerm || '/lifetime'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no courses match */}
        {filteredCourses.length === 0 && (
          <div className="empty-courses-state">
            <BookOpen size={48} color="#94a3b8" />
            <h3>No courses found</h3>
            <p>Try searching with another keyword or resetting the category filter.</p>
            <button
              type="button"
              className="category-pill-btn active"
              onClick={() => setActiveFilter('Featured')}
            >
              View Featured Courses
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
