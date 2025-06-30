import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Ombre Powder Brows",
      price: "$550",
      duration: "3h",
      description: "A cosmetic tattoo technique that creates a soft, powdered look on the eyebrows. It involves using a tattoo machine to implant pigment into the skin, resulting in a gradient effect with a lighter front and a darker tail. This service includes a consultation, brow mapping, the procedure, and aftercare instructions. A touch-up session is recommended 6-8 weeks after the initial appointment for optimal results."
    },
    {
      id: 2,
      name: "Ombre Powder Brows Annual Touch up (1-2 years)",
      price: "$300",
      duration: "2h",
      description: "A touch-up session for existing clients to refresh the color and shape of their Ombre Powder Brows. This is recommended annually to maintain the desired look."
    },
    {
      id: 3,
      name: "Ombre Powder Brows 6-11 months touch up",
      price: "$150",
      duration: "2h",
      description: "A touch-up session for existing clients who want to boost their color and perfect the shape of their brows within 6-11 months of their initial session."
    },
    {
      id: 4,
      name: "Lip Blush",
      price: "$500",
      duration: "3h",
      description: "A semi-permanent cosmetic tattoo that enhances the natural color and shape of your lips. It can help define the lip border, correct asymmetry, and give the appearance of fuller lips. The result is a soft, natural-looking tint."
    },
    {
      id: 5,
      name: "Lip Blush Annual Touch Up (1-2 years)",
      price: "$250",
      duration: "2h",
      description: "An annual touch-up to refresh the color and shape of your lip blush tattoo. This session helps maintain the vibrancy and definition of your lips."
    },
    {
      id: 6,
      name: "Lip Blush 6-11 months touch up",
      price: "$150",
      duration: "2h",
      description: "A touch-up for lip blush clients to boost color and perfect the shape within 6-11 months of the initial procedure."
    },
    {
      id: 7,
      name: "Lash Line Enhancement",
      price: "$350",
      duration: "2h",
      description: "A subtle cosmetic tattoo that involves implanting pigment along the lash line to create the appearance of thicker, darker lashes. It enhances the eyes without the look of a traditional eyeliner."
    },
    {
      id: 8,
      name: "Lash Line Enhancement 2-5 months touch up",
      price: "$100",
      duration: "1h 30m",
      description: "A touch-up session for the lash line enhancement to perfect the color and ensure longevity."
    },
    {
      id: 9,
      name: "Saline Tattoo Lightening/Removal",
      price: "$150",
      duration: "1h 30m",
      description: "A non-laser method to lighten or remove unwanted cosmetic tattoos. A saline solution is used to lift the pigment from the skin. Multiple sessions may be required for desired results."
    },
    {
      id: 10,
      name: "Emergency Saline Tattoo Lightening/Removal",
      price: "$150",
      duration: "1h",
      description: "This service is for cosmetic tattoos that are less than 48 hours old. It is a gentle way to lift freshly implanted pigment from the skin. Please contact us immediately if you require this service."
    },
    {
      id: 11,
      name: "Consultation",
      price: "Free",
      duration: "30m",
      description: "A complimentary 30-minute consultation to discuss your beauty goals, answer any questions you may have, and determine which service is right for you. We will discuss the procedure, aftercare, and what to expect."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Professional cosmetic tattoo services designed to enhance your natural beauty
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3 className="service-name">{service.name}</h3>
                <div className="service-price">{service.price}</div>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <div className="service-duration">
                  <strong>Duration:</strong> {service.duration}
                </div>
              </div>
              
              <a 
                href="https://amazingbeaute.glossgenius.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="book-service-btn"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <div className="consultation-cta">
            <h3>Not sure which service is right for you?</h3>
            <p>Book a free consultation to discuss your beauty goals and find the perfect service.</p>
            <a 
              href="https://amazingbeaute.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="consultation-btn"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
