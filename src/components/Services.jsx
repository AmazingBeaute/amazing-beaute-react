import React from 'react';

const servicesData = [
    {
        name: "Microblading",
        price: "$450",
        description: "A semi-permanent tattoo technique used to create the illusion of fuller brows."
    },
    {
        name: "Lip Blush",
        price: "$500",
        description: "Enhances the natural shape of your lips, giving them that boost of vitality and color."
    },
    {
        name: "Permanent Eyeliner",
        price: "$400",
        description: "A treatment that places pigment along the top or bottom lash lines to create the look of eyeliner."
    },
    {
        name: "Initial Touch-Up",
        price: "$150",
        description: "A required touch-up session 6-8 weeks after the initial procedure to perfect the results."
    },
    {
        name: "Annual Touch-Up",
        price: "$300",
        description: "A yearly session to maintain the color and shape of your cosmetic tattoo."
    },
    {
        name: "Saline Tattoo Removal",
        price: "$200",
        description: "A natural method to lighten and remove unwanted permanent makeup or small tattoos."
    }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-header">
                <h3 className="service-name">{service.name}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
