import React from 'react';

const About = () => {
  return (
    <section id="about" className="content-section" role="main" aria-labelledby="about-title">
      <div className="about-container">
        <h2 id="about-title" className="section-title">About Amazing Beauté</h2>
        
        <div className="about-content" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
          <div className="about-image">
            <img src="/images/hero.jpg" alt="Amazing Beauté Studio" style={{width: '100%', borderRadius: '8px'}}/>
          </div>
          <div className="about-text">
            <h3>Expert Cosmetic Tattoo Services</h3>
            <p>
              At Amazing Beauté, we specialize in premium cosmetic tattoo services that enhance your natural beauty. 
              Our experienced artists use the latest techniques and highest quality pigments to deliver stunning, 
              long-lasting results.
            </p>
            
            <h4>Why Choose Amazing Beauté?</h4>
            <ul className="benefits-list">
              <li>Certified and experienced cosmetic tattoo artists</li>
              <li>Sterile, professional studio environment</li>
              <li>Premium quality pigments and equipment</li>
              <li>Personalized consultations and aftercare</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
