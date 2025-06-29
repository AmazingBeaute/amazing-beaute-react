import React from 'react';

const Gallery = () => {
  // Sample Instagram-style posts data
  const instagramPosts = [
    {
      id: 1,
      image: '/images/hero.jpg',
      caption: 'Fresh microblading work ✨ Beautiful natural brows that enhance your features #microblading #browsonfleek',
      likes: 127,
      date: '2 days ago'
    },
    {
      id: 2,
      image: '/images/hero.jpg',
      caption: 'Lip blush perfection 💋 Enhancing natural beauty with subtle color #lipblush #cosmetictattoo',
      likes: 95,
      date: '4 days ago'
    },
    {
      id: 3,
      image: '/images/hero.jpg',
      caption: 'Before and after eyebrow transformation 🌟 The power of perfect brows! #browstransformation',
      likes: 203,
      date: '1 week ago'
    },
    {
      id: 4,
      image: '/images/hero.jpg',
      caption: 'Healing beautifully! Day 7 post microblading session ✨ #healingprocess #microblading',
      likes: 89,
      date: '1 week ago'
    },
    {
      id: 5,
      image: '/images/hero.jpg',
      caption: 'Eyeliner tattoo for effortless beauty every day 👁️ Wake up ready! #eyelinertattoo',
      likes: 156,
      date: '2 weeks ago'
    },
    {
      id: 6,
      image: '/images/hero.jpg',
      caption: 'Client testimonial: "Best decision I ever made!" 💕 #happyclient #amazingbeaute',
      likes: 134,
      date: '2 weeks ago'
    }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Work</h2>
        <p className="gallery-subtitle">Follow our journey on Instagram</p>
        
        <div className="instagram-grid">
          {instagramPosts.map(post => (
            <div key={post.id} className="instagram-post">
              <div className="post-image-container">
                <img src={post.image} alt="Instagram post" className="post-image" />
                <div className="post-overlay">
                  <div className="post-stats">
                    <span className="likes">♥ {post.likes}</span>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p className="post-caption">{post.caption}</p>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="follow-us">
          <a 
            href="https://instagram.com/amazingbeaute" 
            target="_blank" 
            rel="noopener noreferrer"
            className="follow-btn"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;