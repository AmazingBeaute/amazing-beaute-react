import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="brand-text" onClick={closeMenu}>AMAZING BEAUTÉ</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>HOME</Link></li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>ABOUT</Link></li>
              <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>SERVICES</Link></li>
              <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={closeMenu}>GALLERY</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>CONTACT</Link></li>
              <li>
                  <a 
                  href="https://amazingbeaute.glossgenius.com/services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="book-now-btn"
                  onClick={closeMenu}
                  >
                  BOOK NOW
                  </a>
              </li>
          </ul>
          
          <div className="nav-icons">
            <a 
              href="https://www.facebook.com/amazingbeaute" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="https://www.instagram.com/amazingbeaute" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://amazingbeaute.glossgenius.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
