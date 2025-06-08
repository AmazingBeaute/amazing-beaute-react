import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold' }}>AMAZING BEAUTÉ</div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#packages">PACKAGES</a>
        <a href="#contact">CONTACT</a>
        <a href="https://amazingbeaute.glossgenius.com" target="_blank" rel="noreferrer">BOOK NOW</a>
      </div>
    </nav>
  );
};

export default Navbar;