import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Ready to transform your beauty routine? Let's connect!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>4810 Beauregard St, Suite 304<br />Alexandria, VA 22312</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p><a href="tel:+15713348781">(571) 334-8781</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p><a href="mailto:amazingbeaute.llc@gmail.com">amazingbeaute.llc@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h3>Hours</h3>
                <p>By Appointment Only</p>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <h3>Book Your Consultation</h3>
            <p>Ready to enhance your natural beauty? Book your consultation today and discover how cosmetic tattooing can transform your daily routine.</p>
            
            <div className="cta-buttons">
              <a 
                href="https://amazingbeaute.glossgenius.com/services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Book Online
              </a>
              <a 
                href="tel:+15713348781"
                className="secondary-btn"
              >
                Call Now
              </a>
            </div>
            
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a 
                  href="https://www.instagram.com/amazingbeaute" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://www.facebook.com/amazingbeaute" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
