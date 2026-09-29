import React from 'react';
import { Video } from 'lucide-react';

export const defaultLessonModules = [
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

export const CourseLesson = ({ modules = defaultLessonModules, progressPercent = 55 }) => {
  return (
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
          {modules.map((module, mIdx) => (
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
          <div className="progress-card-percent">{progressPercent}%</div>
          <div className="progress-card-bar-track">
            <div 
              className="progress-card-bar-fill" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
