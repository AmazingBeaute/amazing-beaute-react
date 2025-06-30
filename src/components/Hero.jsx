import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <header>
        <h1>
          AMAZING BEAUTÉ COSMETIC TATTOO STUDIO
        </h1>
        <p>
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