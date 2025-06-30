import React from 'react';

const About = () => {
  return (
    <section className="about-section" role="main" aria-labelledby="about-title">
      <div className="about-container">
        <h2 id="about-title" className="about-title">About Amazing Beauté</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Expert Cosmetic Tattoo Services</h3>
            <p>
              At Amazing Beauté, we specialize in premium cosmetic tattoo services that enhance your natural beauty. 
              Our experienced artists use the latest techniques and highest quality pigments to deliver stunning, 
              long-lasting results.
            </p>
            
            <h4>Our Services Include:</h4>
            <ul className="services-list">
              <li><strong>Microblading:</strong> Create natural-looking, hair-like strokes for perfect eyebrows</li>
              <li><strong>Lip Blush:</strong> Enhance your lips with subtle, natural-looking color</li>
              <li><strong>Eyeliner Tattoo:</strong> Wake up with perfectly defined eyes every day</li>
              <li><strong>Permanent Makeup (PMU):</strong> Complete beauty solutions for busy lifestyles</li>
              <li><strong>Touch-ups & Color Corrections:</strong> Maintain and perfect your existing work</li>
            </ul>
            
            <h4>Why Choose Amazing Beauté?</h4>
            <ul className="benefits-list">
              <li>Certified and experienced cosmetic tattoo artists</li>
              <li>Sterile, professional studio environment</li>
              <li>Premium quality pigments and equipment</li>
              <li>Personalized consultations and aftercare</li>
              <li>Before and after photos of real clients</li>
              <li>Satisfaction guarantee on all services</li>
            </ul>
            
            <p>
              Transform your daily beauty routine and wake up confident every day. Book your consultation 
              today and discover why clients trust Amazing Beauté for their cosmetic tattoo needs.
            </p>
          </div>
        </div>
        
        <div className="cta-section">
          <h3>Ready to Transform Your Look?</h3>
          <p>Book your consultation today and take the first step towards effortless beauty.</p>
          <a 
            href="https://amazingbeaute.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            aria-label="Book cosmetic tattoo consultation"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
