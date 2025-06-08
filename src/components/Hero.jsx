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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        AMAZING BEAUTÉ COSMETIC TATTOO STUDIO
      </h1>
	<a
	  href="https://amazingbeaute.glossgenius.com/services"
	  target="_blank"
	  rel="noopener noreferrer"
	  className="hero-book-btn"
	>
	  BOOK NOW
	</a>

    </section>
  );
};

export default Hero;