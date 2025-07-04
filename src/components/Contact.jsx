import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>4810 Beauregard Street, Suite 304<br />Alexandria, VA, United States, Virginia</p>
            <p><a href="tel:+15714558255">(571) 455-8255</a></p>
            <p><a href="mailto:amazingbeaute4u@gmail.com">amazingbeaute4u@gmail.com</a></p>
          </div>
          <div className="contact-cta">
            <h3>Book Your Consultation</h3>
            <p>Ready to enhance your natural beauty? Book your consultation today.</p>
            <a 
              href="https://amazingbeaute.glossgenius.com/services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
