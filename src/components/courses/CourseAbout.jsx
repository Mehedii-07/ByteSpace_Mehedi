import React from 'react';
import { Check } from 'lucide-react';

export const defaultSneakPeakImages = [
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

export const defaultKeyPointsList = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio'
];

export const CourseAbout = ({ 
  sneakPeakImages = defaultSneakPeakImages, 
  keyPointsList = defaultKeyPointsList 
}) => {
  return (
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
  );
};

export default CourseAbout;
