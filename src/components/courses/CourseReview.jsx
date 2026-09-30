import React, { useState } from 'react';
import { Star } from 'lucide-react';

export const defaultRatingBreakdown = [
  { stars: 5, fillPercent: 92, count: 720 },
  { stars: 4, fillPercent: 32, count: 130 },
  { stars: 3, fillPercent: 10, count: 21 },
  { stars: 2, fillPercent: 5, count: 10 },
  { stars: 1, fillPercent: 7, count: 15 },
];

export const defaultReviewsList = [
  {
    id: 1,
    author: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar: '/images/review-avatar-1.png',
    rating: 5,
    date: 'a year ago',
    comment: 'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!'
  },
  {
    id: 2,
    author: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar: '/images/review-avatar-2.png',
    rating: 5,
    date: 'a year ago',
    comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
  },
  {
    id: 3,
    author: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar: '/images/review-avatar-3.png',
    rating: 5,
    date: 'a year ago',
    comment: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.'
  },
  {
    id: 4,
    author: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar: '/images/happy-avatar-1.png',
    rating: 5,
    date: 'a year ago',
    comment: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.'
  }
];

export const defaultRatingFilters = [
  { label: 'All rating', value: 'all' },
  { label: '5', value: 5, hasStar: true },
  { label: '4', value: 4, hasStar: true },
  { label: '3', value: 3, hasStar: true },
  { label: '2', value: 2, hasStar: true },
  { label: '1', value: 1, hasStar: true },
];

export const CourseReview = ({
  ratingScore = '4.7',
  ratingBreakdown = defaultRatingBreakdown,
  reviews = defaultReviewsList,
  filters = defaultRatingFilters
}) => {
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('all');

  const filteredReviews = selectedRatingFilter === 'all' || selectedRatingFilter === 5
    ? reviews
    : reviews.filter((r) => r.rating === selectedRatingFilter);

  return (
    <div className="detail-tab-panel" role="tabpanel">
      {/* 1. What Learners Are Saying */}
      <div className="detail-info-block">
        <h3 className="detail-section-title">What Learners Are Saying</h3>
        <p className="detail-section-desc">
          Discover what our learners have to say about their experience with &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>

        {/* Ratings Overview Card */}
        <div className="reviews-summary-card">
          {/* Left Neon Lime Score Box */}
          <div className="reviews-summary-score-box">
            <span className="summary-ratings-label">Ratings</span>
            <div className="summary-score-value">{ratingScore}</div>
          </div>

          {/* Right 5-Row Ratings Breakdown */}
          <div className="reviews-breakdown-col">
            {ratingBreakdown.map((row, rIdx) => (
              <div key={rIdx} className="breakdown-row-item">
                <div className="breakdown-bar-track">
                  <div 
                    className="breakdown-bar-fill" 
                    style={{ width: `${row.fillPercent}%` }}
                  ></div>
                </div>
                <div className="breakdown-stars-cluster" aria-label={`${row.stars} stars`}>
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} size={13} fill="#0F172A" color="#0F172A" />
                  ))}
                </div>
                <span className="breakdown-count-val">{row.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Individual Reviews Section */}
      <div className="detail-info-block">
        <h3 className="detail-section-title">Individual Reviews:</h3>

        {/* Filter Pills Row */}
        <div className="reviews-filter-pills-row">
          {filters.map((flt) => {
            const isSelected = selectedRatingFilter === flt.value;
            return (
              <button
                key={flt.value}
                type="button"
                className={`review-filter-pill-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedRatingFilter(flt.value)}
              >
                {flt.hasStar && (
                  <Star 
                    size={12} 
                    fill={isSelected ? '#0A0F1D' : '#0F172A'} 
                    color={isSelected ? '#0A0F1D' : '#0F172A'} 
                    className="filter-pill-star" 
                  />
                )}
                <span>{flt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Review Cards List */}
        <div className="detail-review-cards-list">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div key={rev.id} className="detail-review-card">
                <div className="detail-review-card-header">
                  <div className="detail-reviewer-profile">
                    <img 
                      src={rev.avatar} 
                      alt={rev.author} 
                      className="detail-reviewer-avatar" 
                    />
                    <div className="detail-reviewer-info">
                      <h4 className="detail-reviewer-name">{rev.author}</h4>
                      <p className="detail-reviewer-role">{rev.role}</p>
                    </div>
                  </div>
                  <span className="detail-review-date">{rev.date}</span>
                </div>

                {/* 5 Filled Dark Stars */}
                <div className="detail-review-stars">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#0F172A" color="#0F172A" />
                  ))}
                </div>

                <p className="detail-review-comment">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            ))
          ) : (
            <p className="no-reviews-fallback">No reviews found for this rating filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
