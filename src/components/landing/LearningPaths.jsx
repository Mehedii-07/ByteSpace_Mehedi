import React from 'react';

export const LearningPaths = ({ onSelectCategory }) => {
  const paths = [
    {
      id: 'design',
      title: 'Design',
      icon: <img src="/images/paths/path-icon-design.png" alt="Design" className="path-icon-img" width="24" height="24" />,
      category: 'Design'
    },
    {
      id: 'development',
      title: 'Development',
      icon: <img src="/images/paths/path-icon-development.png" alt="Development" className="path-icon-img" width="24" height="24" />,
      category: 'Development'
    },
    {
      id: 'it-software',
      title: 'IT & Software',
      icon: <img src="/images/paths/path-icon-video.png" alt="IT & Software" className="path-icon-img" width="24" height="24" />,
      category: 'IT & Software'
    },
    {
      id: 'business',
      title: 'Business',
      icon: <img src="/images/paths/path-icon-business.png" alt="Business" className="path-icon-img" width="24" height="24" />,
      category: 'Business'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: <img src="/images/paths/path-icon-marketing.png" alt="Marketing" className="path-icon-img" width="24" height="24" />,
      category: 'Marketing'
    },
    {
      id: 'photography',
      title: 'Photography',
      icon: <img src="/images/paths/path-icon-photography.png" alt="Photography" className="path-icon-img" width="24" height="24" />,
      category: 'Photography'
    }
  ];

  return (
    <section id="learning-paths" className="learning-paths-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="section-subtitle">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Path Cards Grid */}
        <div className="paths-grid">
          {paths.map((path) => (
            <div 
              key={path.id} 
              className="path-card"
              onClick={() => onSelectCategory && onSelectCategory(path.category)}
            >
              {/* Circular Neon-Lime Icon Badge */}
              <div className="path-icon-circle">
                {path.icon}
              </div>

              {/* Title */}
              <h3 className="path-card-title">{path.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

