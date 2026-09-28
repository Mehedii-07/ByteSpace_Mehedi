import React from 'react';
import { X, Star, Clock, BookOpen, Check, ShieldCheck, PlayCircle } from 'lucide-react';

export const CourseModal = ({ course, onClose, onAddToCart }) => {
  if (!course) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body-grid">
          {/* Left Preview Section */}
          <div className="modal-preview-col">
            <div className="modal-thumbnail-wrap">
              <img src={course.image} alt={course.title} className="modal-thumbnail" />
              <div className="modal-play-overlay">
                <PlayCircle size={48} color="#ccff00" />
                <span>Preview Course</span>
              </div>
            </div>

            <div className="modal-meta-box">
              <div className="meta-item">
                <Clock size={16} color="#64748b" />
                <span>{course.duration} on-demand video</span>
              </div>
              <div className="meta-item">
                <BookOpen size={16} color="#64748b" />
                <span>{course.lessons} downloadable lessons</span>
              </div>
              <div className="meta-item">
                <ShieldCheck size={16} color="#16a34a" />
                <span>Certificate of Completion</span>
              </div>
            </div>
          </div>

          {/* Right Info Section */}
          <div className="modal-info-col">
            <span className="modal-category-tag">{course.category} • {course.subtag}</span>
            <h2 className="modal-title">{course.title}</h2>
            <p className="modal-instructor">Taught by <strong>{course.instructor}</strong></p>

            {/* Rating */}
            <div className="modal-rating-row">
              <div className="modal-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="modal-rating-val">{course.rating}</span>
              <span className="modal-reviews-count">({course.reviewsCount} student reviews)</span>
            </div>

            <p className="modal-desc">{course.description}</p>

            <div className="modal-highlights">
              <h4>What you will master:</h4>
              <ul>
                <li><Check size={14} color="#16a34a" /> Hands-on projects ready for your portfolio</li>
                <li><Check size={14} color="#16a34a" /> Lifetime access to source code and updates</li>
                <li><Check size={14} color="#16a34a" /> 1-on-1 Discord community mentor support</li>
              </ul>
            </div>

            {/* Price & Action Row */}
            <div className="modal-footer-row">
              <div className="modal-price">
                <span className="modal-price-num">${course.price}</span>
                <span className="modal-price-note">One-time payment</span>
              </div>
              <div className="modal-actions-group">
                {onViewFullDetail && (
                  <button 
                    className="modal-add-cart-btn"
                    onClick={() => {
                      onViewFullDetail(course);
                      onClose();
                    }}
                    title="Open course details page"
                  >
                    View Syllabus
                  </button>
                )}
                <button 
                  className="modal-add-cart-btn"
                  onClick={() => {
                    onAddToCart(course);
                    onClose();
                  }}
                >
                  Add to Cart
                </button>
                <button 
                  className="modal-enroll-btn"
                  onClick={() => {
                    onAddToCart(course);
                    onClose();
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
