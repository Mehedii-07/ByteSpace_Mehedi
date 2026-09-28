import React from 'react';
import { 
  PenTool, 
  Smartphone, 
  MonitorPlay, 
  Briefcase, 
  Megaphone, 
  Camera 
} from 'lucide-react';

export const LearningPaths = ({ onSelectCategory }) => {
  const paths = [
    {
      id: 'design',
      title: 'Design',
      icon: <PenTool size={22} color="#0a0f1d" strokeWidth={2.2} />,
      category: 'Design'
    },
    {
      id: 'development',
      title: 'Development',
      icon: <Smartphone size={22} color="#0a0f1d" strokeWidth={2.2} />,
      category: 'Development'
    },
    {
      id: 'video-animation',
      title: 'Video & Animation',
      icon: <MonitorPlay size={22} color="#0a0f1d" strokeWidth={2.2} />,
      category: 'Video & Animation'
    },
    {
      id: 'business',
      title: 'Business',
      icon: <Briefcase size={22} color="#0a0f1d" strokeWidth={2.2} />,
      category: 'Business'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: <Megaphone size={22} color="#0a0f1d" strokeWidth={2.2} />,
      category: 'Marketing'
    },
    {
      id: 'photography',
      title: 'Photography',
      icon: <Camera size={22} color="#0a0f1d" strokeWidth={2.2} />,
      category: 'Photography'
    }
  ];

  return (
    <section id="learning-paths" className="learning-paths-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Explore Diverse Learning Paths at ByteSpace
          </h2>
          <p className="section-subtitle">
            Whether you're looking to acquire new skills or advance your career, ByteSpace offers a diverse range of courses designed to meet your learning needs and help you achieve your goals.
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

