import React, { useState, useMemo } from 'react';
import { Star, Heart, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';

export const CoursesCatalog = ({ searchQuery = '', onSelectCourse, onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('View All');
  const [favorites, setFavorites] = useState({});

  const filterPillsRow1 = [
    'View All',
    'Design',
    'Development',
    'Marketing',
    'Business',
    'Data Science',
    'UI/UX Design',
    'Cybersecurity'
  ];

  const filterPillsRow2 = [
    'Blockchain & AI',
    'Digital Art',
    'Music',
    'Artificial Intelligence (AI)',
    'Cloud Computing',
    'Photography'
  ];

  const filterPillsRow3 = [
    'Product Mgmt',
    'Web Development',
    'Soft Skills',
    'Writing',
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
      if (activeFilter !== 'View All' && activeFilter !== '+ More') {
        matchesFilter = course.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
          course.subtag.toLowerCase().includes(activeFilter.toLowerCase()) ||
          course.title.toLowerCase().includes(activeFilter.toLowerCase());
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
                    setActiveFilter('View All');
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
              onClick={() => setActiveFilter('View All')}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 6 Course Cards Grid */}
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
                
                {/* Duration & Lessons Overlay Pill matching Figma */}
                <div className="course-overlay-pill">
                  <span>{course.lessons} Lessons</span>
                  <span className="dot-divider">•</span>
                  <span>{course.duration}</span>
                </div>

                {/* Favorite Heart Button */}
                <button 
                  className={`course-fav-btn ${favorites[course.id] ? 'favorited' : ''}`}
                  onClick={(e) => toggleFavorite(course.id, e)}
                  title="Save course"
                  aria-label="Save course to wishlist"
                >
                  <Heart size={16} fill={favorites[course.id] ? '#ef4444' : 'none'} color={favorites[course.id] ? '#ef4444' : '#ffffff'} />
                </button>
              </div>

              {/* Card Content */}
              <div className="course-card-body">
                {/* Title & Rating Row */}
                <div className="course-title-rating-row">
                  <h3 className="course-card-title">
                    {course.title}
                  </h3>
                  <div className="course-card-rating">
                    <Star size={13} fill="#f59e0b" color="#f59e0b" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Blue Subtag Link */}
                <div className="course-subtag-link">
                  {course.subtag}
                </div>

                {/* Meta & Avatars Row */}
                <div className="course-meta-avatars-row">
                  <div className="course-level-pill">
                    {course.lessons} Lessons
                  </div>

                  {/* Student Avatars Stack */}
                  <div className="student-avatars-stack">
                    <img src="/images/avatar-emily.jpg" alt="Student" className="stack-avatar" />
                    <img src="/images/avatar-james.jpg" alt="Student" className="stack-avatar" />
                    <img src="/images/avatar-michael.jpg" alt="Student" className="stack-avatar" />
                    <div className="stack-badge-count">{course.studentsCount}</div>
                  </div>
                </div>

                {/* Card Bottom Row: Price & Add */}
                <div className="course-card-footer">
                  <div className="course-price-wrap">
                    <span className="price-tag">${course.price}</span>
                    <span className="price-term">/course</span>
                  </div>
                  {onAddToCart && (
                    <button 
                      type="button"
                      className="course-enroll-quick-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(course);
                      }}
                      title="Add to cart"
                    >
                      Enroll
                    </button>
                  )}
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
              onClick={() => setActiveFilter('View All')}
            >
              View All Courses
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
