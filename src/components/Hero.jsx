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
        href="https://amazingbeaute.glossgenius.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '1rem',
          padding: '0.75rem 2rem',
          backgroundColor: '#ffffff',
          color: '#000',
          border: '1px solid #fff',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        BOOK NOW
      </a>
    </section>
  );
};

export default Hero;