import React from 'react';

const Hero = () => {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      paddingTop: '4rem' // to offset navbar
    }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          AMAZING BEAUTÉ COSMETIC TATTOO STUDIO
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem', 
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Transform your beauty routine with expert cosmetic tattoo services. 
          Specializing in microblading, permanent makeup, lip blush, and eyeliner tattoo.
        </p>
      </header>
      <a
        href="https://amazingbeaute.glossgenius.com/services"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-book-btn"
        aria-label="Book appointment for cosmetic tattoo services"
      >
        BOOK NOW
      </a>
    </section>
  );
};

export default Hero;