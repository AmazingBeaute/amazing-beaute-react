import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#packages">PACKAGES</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="https://amazingbeaute.glossgenius.com/services" target="_blank" 		rel="noopener noreferrer">BOOK NOW</a></li>
      </ul>
      <div className="nav-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-globe"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
