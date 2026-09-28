import React from 'react';
import { GlowBlob } from './DecorativeElements';

export const CommunityTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'SOPHIE LEE',
      role: 'Product Designer at Figma',
      avatar: '/images/avatar-emily.jpg',
      content: 'ByteSpace transformed my career! The hands-on projects and mentor feedback gave me the confidence to apply for senior roles. I landed my dream job within 3 months of completing the curriculum.'
    },
    {
      id: 2,
      name: 'JEFFREY B.',
      role: 'Frontend Developer',
      avatar: '/images/avatar-james.jpg',
      content: 'The quality of instructors here is unparalleled. Clear explanations, practical codebase examples, and a supportive community make learning complex topics feel effortless and engaging.'
    },
    {
      id: 3,
      name: 'ROSA C.',
      role: 'English Instructor',
      avatar: '/images/avatar-michael.jpg',
      content: 'As both a student and now a creator on ByteSpace, I love how intuitive the platform is. The analytics and engagement features make it easy to deliver high-impact courses to global learners.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <GlowBlob color="rgba(204, 255, 0, 0.12)" size={380} style={{ top: '0%', right: '0%' }} />

      <div className="container">
        {/* Top Split Header */}
        <div className="testimonials-top-row">
          <div className="testimonials-heading-wrap">
            <h2 className="testimonials-title">
              Discover What Our<br />
              Community Is Saying
            </h2>
          </div>

          <div className="testimonials-header-description">
            <p className="community-desc-text">
              ByteSpace has revolutionized the online learning experience! Finding high-quality courses with top-tier industry mentors has never been easier. The platform's intuitive design and supportive community keep learners engaged and motivated every step of the way.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Card User Avatar */}
              <div className="testimonial-user-header">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="testimonial-avatar"
                />
                <div className="testimonial-user-meta">
                  <h4 className="testimonial-name">{item.name}</h4>
                  <span className="testimonial-role-blue">{item.role}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="testimonial-content">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
