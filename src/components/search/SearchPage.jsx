import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Star, SlidersHorizontal, Tag, Signal, ArrowUpDown, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '../../data/coursesData';

export const SearchPage = ({ onSelectCourse, onAddToCart, onNavigateHome, initialSearchQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedDropdownCategory, setSelectedDropdownCategory] = useState('All Courses');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [activePill, setActivePill] = useState('Featured');
  
  // Filter controls
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Most relevant');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filter Pills matching Figma design
  const categoryPills = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking',
    'Graphic Design',
    'Data Science',
    'Web Development',
    'Productivity'
  ];

  // Dropdown categories
  const dropdownCategories = [
    'All Courses',
    'UI/UX Design',
    'Graphic Design',
    'Data Science',
    'Web Development',
    'Marketing',
    'Productivity',
    'Music',
    'Cooking'
  ];

  // Expanded courses dataset (18 items matching Figma wireframe rows 1-6)
  const fullCoursesList = useMemo(() => {
    // Repeat the 6 core courses with unique IDs across 3 cycles to match the 18 cards in Figma
    const expanded = [];
    const suffixes = ['', ' (Advanced)', ' (Masterclass)'];
    for (let cycle = 0; cycle < 3; cycle++) {
      COURSES_DATA.forEach((course) => {
        expanded.push({
          ...course,
          id: `${course.id}-${cycle + 1}`,
          originalId: course.id,
          title: cycle === 0 ? course.title : `${course.title}${suffixes[cycle]}`,
        });
      });
    }
    return expanded;
  }, []);

  // Filter and sort logic
  const filteredAndSortedCourses = useMemo(() => {
    let result = fullCoursesList.filter((course) => {
      // 1. Search Query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.description && course.description.toLowerCase().includes(q);
        const matchesCat = course.category && course.category.toLowerCase().includes(q);
        const matchesSubtag = course.subtag && course.subtag.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesSubtag) {
          return false;
        }
      }

      // 2. Dropdown category filter
      if (selectedDropdownCategory !== 'All Courses') {
        const cat = selectedDropdownCategory.toLowerCase();
        const matchesCat = course.category && course.category.toLowerCase().includes(cat);
        const matchesSubtag = course.subtag && course.subtag.toLowerCase().includes(cat);
        if (!matchesCat && !matchesSubtag) {
          return false;
        }
      }

      // 3. Category Pill filter
      if (activePill !== 'Featured') {
        const pill = activePill.toLowerCase();
        const matchesCat = course.category && course.category.toLowerCase().includes(pill);
        const matchesSubtag = course.subtag && course.subtag.toLowerCase().includes(pill);
        const matchesTitle = course.title.toLowerCase().includes(pill);
        if (!matchesCat && !matchesSubtag && !matchesTitle) {
          return false;
        }
      }

      // 4. Level filter
      if (selectedLevel !== 'All') {
        if (course.level && course.level.toLowerCase() !== selectedLevel.toLowerCase()) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortBy === 'Highest Rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [fullCoursesList, searchQuery, selectedDropdownCategory, activePill, selectedLevel, sortBy]);

  // Paginated slices
  const totalPages = Math.max(1, Math.ceil(filteredAndSortedCourses.length / coursesPerPage));
  const displayedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * coursesPerPage;
    return filteredAndSortedCourses.slice(startIndex, startIndex + coursesPerPage);
  }, [filteredAndSortedCourses, currentPage, coursesPerPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= 5) {
      setCurrentPage(page);
      const gridEl = document.getElementById('search-results-grid');
      if (gridEl) {
        gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDropdownCategory('All Courses');
    setActivePill('Featured');
    setSelectedLevel('All');
    setSortBy('Most relevant');
    setCurrentPage(1);
  };

  return (
    <div className="search-page-container">
      {/* 1. Hero Search Header Banner matching Figma */}
      <section className="search-hero-section bg-grid-pattern">
        <div className="container search-hero-inner">
          <h1 className="search-hero-title">
            Find Your Next Course
          </h1>

          {/* Search Box Row */}
          <form 
            className="search-hero-form"
            onSubmit={(e) => {
              e.preventDefault();
              setCurrentPage(1);
            }}
          >
            {/* Input Pill */}
            <div className="search-input-pill">
              <Search size={20} className="search-input-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Course, topic, creator"
                className="search-text-input"
                aria-label="Course, topic, creator"
              />
            </div>

            {/* Courses ▾ Dropdown Pill Button */}
            <div className="search-dropdown-wrapper">
              <button
                type="button"
                className="search-courses-dropdown-btn"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                aria-expanded={isCategoryDropdownOpen}
              >
                <span>{selectedDropdownCategory === 'All Courses' ? 'Courses' : selectedDropdownCategory}</span>
                <ChevronDown size={18} className={`dropdown-chevron ${isCategoryDropdownOpen ? 'open' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <div className="search-dropdown-menu">
                  {dropdownCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`search-dropdown-item ${selectedDropdownCategory === cat ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedDropdownCategory(cat);
                        setIsCategoryDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* 2. Controls & Filter Section */}
      <section className="search-controls-section">
        <div className="container">
          {/* Top Controls Row */}
          <div className="search-controls-top-row">
            {/* Left Controls: Filter, Level, Category */}
            <div className="controls-left-group">
              {/* Filter Button */}
              <button 
                type="button" 
                className="search-control-btn"
                onClick={handleResetFilters}
                title="Reset all filters"
              >
                <SlidersHorizontal size={16} />
                <span>Filter</span>
              </button>

              {/* Level Dropdown */}
              <div className="search-control-dropdown-wrap">
                <button
                  type="button"
                  className="search-control-btn"
                  onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
                >
                  <Signal size={16} />
                  <span>Level {selectedLevel !== 'All' ? `(${selectedLevel})` : ''}</span>
                  <ChevronDown size={14} />
                </button>

                {isLevelDropdownOpen && (
                  <div className="control-dropdown-menu">
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        className={`control-dropdown-item ${selectedLevel === lvl ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setIsLevelDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                      >
                        {lvl === 'All' ? 'All Levels' : lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="search-control-dropdown-wrap">
                <button
                  type="button"
                  className="search-control-btn"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                >
                  <Tag size={16} />
                  <span>Category {activePill !== 'Featured' ? `(${activePill})` : ''}</span>
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Right Control: Most Relevant Sort */}
            <div className="controls-right-group">
              <div className="search-control-dropdown-wrap">
                <button
                  type="button"
                  className="search-control-btn sort-btn"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                >
                  <ArrowUpDown size={16} />
                  <span>{sortBy}</span>
                  <ChevronDown size={14} />
                </button>

                {isSortDropdownOpen && (
                  <div className="control-dropdown-menu right-aligned">
                    {['Most relevant', 'Highest Rated', 'Price: Low to High', 'Price: High to Low'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`control-dropdown-item ${sortBy === s ? 'active' : ''}`}
                        onClick={() => {
                          setSortBy(s);
                          setIsSortDropdownOpen(false);
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Category Horizontal Pills Cloud matching Figma */}
          <div className="search-category-pills-scroll">
            {categoryPills.map((pill) => (
              <button
                key={pill}
                type="button"
                className={`search-category-pill-btn ${activePill === pill ? 'active' : ''}`}
                onClick={() => {
                  setActivePill(pill);
                  setCurrentPage(1);
                }}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Results Grid & Cards */}
      <section id="search-results-grid" className="search-results-section">
        <div className="container">
          {displayedCourses.length > 0 ? (
            <div className="courses-grid search-courses-grid">
              {displayedCourses.map((course) => (
                <div
                  key={course.id}
                  className="course-card"
                  onClick={() => onSelectCourse && onSelectCourse(course)}
                >
                  {/* Thumbnail Image with Overlaid Pills */}
                  <div className="course-image-wrapper">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-thumbnail"
                      loading="lazy"
                    />

                    {/* Auto Layout Horizontal Pills: Lessons, Duration, Comments */}
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

                  {/* Card Content Body */}
                  <div className="course-card-body">
                    {/* Title & Rating */}
                    <div className="course-title-rating-row">
                      <h3 className="course-card-title">
                        {course.title}
                      </h3>
                      <div className="course-card-rating">
                        <span className="rating-value">{course.rating}</span>
                        <Star size={16} fill="#F59E0B" color="#F59E0B" className="rating-star" />
                      </div>
                    </div>

                    {/* Author: by purepearl studio */}
                    <div className="course-author-row">
                      <span className="by-prefix">by </span>
                      <span className="author-name">{course.instructor}</span>
                    </div>

                    {/* Level Pill & Student Avatars Stack */}
                    <div className="course-meta-avatars-row">
                      <div className="course-level-pill">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="level-bar-icon">
                          <rect x="1" y="9" width="3" height="6" rx="1" />
                          <rect x="6.5" y="5" width="3" height="10" rx="1" />
                          <rect x="12" y="1" width="3" height="14" rx="1" />
                        </svg>
                        <span>{course.level}</span>
                      </div>

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

                    {/* Price Row: $25 /lifetime */}
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
          ) : (
            <div className="search-empty-state">
              <BookOpen size={56} className="empty-icon-muted" />
              <h3>No courses found</h3>
              <p>We couldn't find any courses matching "{searchQuery}". Try searching with different keywords or resetting filters.</p>
              <button
                type="button"
                className="search-reset-btn"
                onClick={handleResetFilters}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* 4. Pagination (matching Figma < 1 2 3 4 5 >) */}
          <div className="search-pagination-wrapper">
            <button
              type="button"
              className="pagination-arrow-btn"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>

            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                className={`pagination-number-btn ${currentPage === pageNum ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              className="pagination-arrow-btn"
              onClick={() => handlePageChange(Math.min(5, currentPage + 1))}
              disabled={currentPage === 5}
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
