import React from 'react';

const galleryImages = [
  { id: 1, src: '/images/hero.jpg', alt: 'Microblading result' },
  { id: 2, src: '/images/hero.jpg', alt: 'Lip blush result' },
  { id: 3, src: '/images/hero.jpg', alt: 'Eyeliner tattoo result' },
  { id: 4, src: '/images/hero.jpg', alt: 'Brow lamination' },
  { id: 5, src: '/images/hero.jpg', alt: 'Client selfie' },
  { id: 6, src: '/images/hero.jpg', alt: 'Studio shot' },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <div className="gallery-grid">
          {galleryImages.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="follow-us">
          <a 
            href="https://instagram.com/amazingbeaute4u" 
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