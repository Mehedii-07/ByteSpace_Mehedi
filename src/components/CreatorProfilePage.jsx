import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  ChevronDown, 
  Star, 
  ArrowUpDown, 
  Layers, 
  Check, 
  UserCheck, 
  UserPlus,
  BookOpen
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';

export const CreatorProfilePage = ({ onSelectCourse, onAddToCart }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Most relevant');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleFollowToggle = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowersCount(prev => prev + 1);
      setToastMessage('You are now following PurePearl Studio!');
    } else {
      setIsFollowing(false);
      setFollowersCount(prev => Math.max(12, prev - 1));
      setToastMessage('Unfollowed PurePearl Studio.');
    }
    setTimeout(() => setToastMessage(null), 3000);
  };

  // 6 courses matching the Figma screenshot
  const creatorCourses = useMemo(() => {
    let list = COURSES_DATA.slice(0, 6);

    if (selectedLevel !== 'All') {
      list = list.filter(c => c.level === selectedLevel);
    }
    if (selectedCategory !== 'All') {
      list = list.filter(c => c.category === selectedCategory || c.subtag === selectedCategory);
    }
    if (sortBy === 'Highest rated') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Lowest price') {
      list = [...list].sort((a, b) => a.price - b.price);
    }

    return list;
  }, [selectedLevel, selectedCategory, sortBy]);

  const levelOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categoryOptions = ['All', 'UI/UX Design', 'Graphic Design', 'Data Science', 'Web Development', 'Productivity'];
  const sortOptions = ['Most relevant', 'Highest rated', 'Lowest price'];

  return (
    <div className="creator-profile-page-wrapper">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="detail-toast-alert" role="status">
          <Check size={18} color="#CBFC01" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. BLUE HERO SECTION WITH CRISP 120PX GRID */}
      <section className="creator-hero-section bg-grid-pattern">
        <div className="container creator-hero-container">
          
          {/* Creator Profile Top Row */}
          <div className="creator-header-row">
            {/* Coral-Pink Squircle Avatar Box */}
            <div className="creator-avatar-squircle">
              <img 
                src="/images/purepearl-studio-avatar.jpg" 
                alt="PurePearl Studio profile" 
                className="creator-avatar-portrait"
              />
            </div>

            {/* Name, Badge, and Tagline */}
            <div className="creator-identity-block">
              <div className="creator-title-badge-wrap">
                <h1 className="creator-brand-heading">PurePearl Studio</h1>
                <span className="creator-lime-badge">Creator</span>
              </div>
              <p className="creator-sub-headline">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="creator-bio-block">
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats Badges and Follow Button Row */}
          <div className="creator-action-bar-row">
            <div className="creator-stat-pills-wrap">
              <div className="creator-stat-pill">
                <span className="stat-num-blue">3</span>
                <span className="stat-label-dark">Products</span>
              </div>
              <div className="creator-stat-pill">
                <span className="stat-num-blue">{followersCount}</span>
                <span className="stat-label-dark">Followers</span>
              </div>
            </div>

            {/* Neon Lime Follow Button */}
            <button 
              type="button" 
              className={`creator-follow-btn ${isFollowing ? 'following' : ''}`}
              onClick={handleFollowToggle}
              aria-label={isFollowing ? 'Unfollow PurePearl Studio' : 'Follow PurePearl Studio'}
            >
              {isFollowing ? (
                <>
                  <UserCheck size={16} />
                  <span>Following</span>
                </>
              ) : (
                <>
                  <UserPlus size={16} />
                  <span>Follow</span>
                </>
              )}
            </button>
          </div>

        </div>
      </section>

      {/* 2. LOWER WHITE SECTION: FILTER TOOLBAR & 6-COURSE GRID */}
      <section className="creator-catalog-section">
        <div className="container creator-content-container">
          
          {/* Filter & Sort Toolbar */}
          <div className="creator-toolbar-row">
            
            {/* Left Controls: Filter, Level, Category */}
            <div className="creator-filter-group-left">
              
              {/* Reset/All Filter Button */}
              <button 
                type="button" 
                className="creator-toolbar-pill-btn"
                onClick={() => {
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                  setSortBy('Most relevant');
                }}
              >
                <SlidersHorizontal size={15} color="#0F172A" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown Button */}
              <div className="creator-dropdown-relative">
                <button 
                  type="button" 
                  className={`creator-toolbar-pill-btn ${selectedLevel !== 'All' ? 'active-filter' : ''}`}
                  onClick={() => {
                    setIsLevelDropdownOpen(!isLevelDropdownOpen);
                    setIsCategoryDropdownOpen(false);
                    setIsSortDropdownOpen(false);
                  }}
                  aria-expanded={isLevelDropdownOpen}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="#0F172A" className="toolbar-level-icon">
                    <rect x="1" y="9" width="3" height="6" rx="1" />
                    <rect x="6.5" y="5" width="3" height="10" rx="1" />
                    <rect x="12" y="1" width="3" height="14" rx="1" />
                  </svg>
                  <span>{selectedLevel === 'All' ? 'Level' : selectedLevel}</span>
                  <ChevronDown size={14} className={`chevron-trans ${isLevelDropdownOpen ? 'rotated' : ''}`} />
                </button>

                {isLevelDropdownOpen && (
                  <div className="creator-dropdown-popover">
                    {levelOptions.map((lvl) => (
                      <button 
                        key={lvl}
                        type="button" 
                        className={`creator-popover-item ${selectedLevel === lvl ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setIsLevelDropdownOpen(false);
                        }}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown Button */}
              <div className="creator-dropdown-relative">
                <button 
                  type="button" 
                  className={`creator-toolbar-pill-btn ${selectedCategory !== 'All' ? 'active-filter' : ''}`}
                  onClick={() => {
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                    setIsLevelDropdownOpen(false);
                    setIsSortDropdownOpen(false);
                  }}
                  aria-expanded={isCategoryDropdownOpen}
                >
                  <Layers size={14} color="#0F172A" />
                  <span>{selectedCategory === 'All' ? 'Category' : selectedCategory}</span>
                  <ChevronDown size={14} className={`chevron-trans ${isCategoryDropdownOpen ? 'rotated' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="creator-dropdown-popover">
                    {categoryOptions.map((cat) => (
                      <button 
                        key={cat}
                        type="button" 
                        className={`creator-popover-item ${selectedCategory === cat ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryDropdownOpen(false);
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Right Control: Most Relevant Sort */}
            <div className="creator-dropdown-relative">
              <button 
                type="button" 
                className="creator-toolbar-pill-btn sort-btn"
                onClick={() => {
                  setIsSortDropdownOpen(!isSortDropdownOpen);
                  setIsLevelDropdownOpen(false);
                  setIsCategoryDropdownOpen(false);
                }}
                aria-expanded={isSortDropdownOpen}
              >
                <ArrowUpDown size={14} color="#0F172A" />
                <span>{sortBy}</span>
                <ChevronDown size={14} className={`chevron-trans ${isSortDropdownOpen ? 'rotated' : ''}`} />
              </button>

              {isSortDropdownOpen && (
                <div className="creator-dropdown-popover popover-align-right">
                  {sortOptions.map((opt) => (
                    <button 
                      key={opt}
                      type="button" 
                      className={`creator-popover-item ${sortBy === opt ? 'selected' : ''}`}
                      onClick={() => {
                        setSortBy(opt);
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* 3-Column Course Grid matching Figma Screenshot */}
          <div className="creator-courses-grid">
            {creatorCourses.map((course) => (
              <div 
                key={course.id} 
                className="creator-course-card"
                onClick={() => {
                  if (onSelectCourse) onSelectCourse(course);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && onSelectCourse) onSelectCourse(course);
                }}
              >
                {/* Course Image Wrapper with 3 Translucent Badges */}
                <div className="creator-card-image-wrap">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="creator-card-img" 
                    loading="lazy" 
                  />

                  {/* 3 Translucent Badges */}
                  <div className="creator-card-badges-strip">
                    <span className="creator-strip-badge">{course.lessons || 17} Lessons</span>
                    <span className="creator-strip-badge">{course.duration || '2 hours 16 mins'}</span>
                    <span className="creator-strip-badge">{course.comments || 59} Comments</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="creator-card-body">
                  {/* Title & Rating */}
                  <div className="creator-card-header-row">
                    <h3 className="creator-card-course-title">{course.title}</h3>
                    <div className="creator-card-rating-wrap">
                      <span className="creator-rating-num">{course.rating || 4.5}</span>
                      <Star size={15} fill="#CBD5E1" color="#CBD5E1" className="creator-rating-star" />
                    </div>
                  </div>

                  {/* by purepearl studio */}
                  <div className="creator-card-by-row">
                    <span className="creator-by-label">by </span>
                    <span className="creator-by-author">{course.instructor || 'purepearl studio'}</span>
                  </div>

                  {/* Level Pill & Student Avatars Stack */}
                  <div className="creator-card-meta-row">
                    <div className="creator-level-badge">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="1" y="9" width="3" height="6" rx="1" />
                        <rect x="6.5" y="5" width="3" height="10" rx="1" />
                        <rect x="12" y="1" width="3" height="14" rx="1" />
                      </svg>
                      <span>{course.level || 'Beginner'}</span>
                    </div>

                    {/* Student Avatars Stack with 26+ Badge */}
                    <div className="creator-student-stack-wrap">
                      <img 
                        src="/images/student-avatars-stack.png" 
                        alt="Enrolled students" 
                        className="creator-student-avatars-img"
                        width="128"
                        height="32"
                      />
                    </div>
                  </div>

                  {/* Price Row: $25 /lifetime */}
                  <div className="creator-card-footer-row">
                    <span className="creator-price-val">${course.price || 25}</span>
                    <span className="creator-price-term">{course.priceTerm || '/lifetime'}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State */}
          {creatorCourses.length === 0 && (
            <div className="creator-empty-state">
              <BookOpen size={48} color="#94A3B8" />
              <h4>No courses found</h4>
              <p>Try resetting your level or category filter to view all available courses.</p>
              <button 
                type="button" 
                className="creator-follow-btn"
                onClick={() => {
                  setSelectedLevel('All');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default CreatorProfilePage;
