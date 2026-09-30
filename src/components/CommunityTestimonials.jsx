import React from 'react';

export const CommunityTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane D.',
      role: 'UX Design Leader',
      avatar: '/images/testimonials/sarah.png',
      content:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.'
    },
    {
      id: 2,
      name: 'James L.',
      role: 'Lead Engineer',
      avatar: '/images/testimonials/james.png',
      content:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
    },
    {
      id: 3,
      name: 'Alex D.',
      role: 'Product Designer',
      avatar: '/images/testimonials/alex.png',
      content:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Radiant Glow Shade 1 (Neon Lime - Top Right: 1137x1137, top: -241px, left: 842px) */}
      <div className="testimonials-radiant-glow-lime" aria-hidden="true" />

      {/* Radiant Glow Shade 2 (Blue - Bottom Left: 1137x1137, top: 149px, left: -442px) */}
      <div className="testimonials-radiant-glow-blue" aria-hidden="true" />

      <div className="container testimonials-container">
        {/* Top Split Header (Figma exact: width: 1200px, height: 145px, gap: 43px) */}
        <div className="testimonials-top-row">
          <div className="testimonials-heading-wrap">
            <h2 className="testimonials-title">
              Discover What Our<br />
              Community Is Saying
            </h2>
          </div>

          <div className="testimonials-header-description">
            <p className="community-desc-text">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Card User Header */}
              <div className="testimonial-user-header">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="testimonial-avatar"
                />
                <div className="testimonial-user-meta">
                  <h4 className="testimonial-name">{item.name}</h4>
                  <span className="testimonial-role">{item.role}</span>
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

