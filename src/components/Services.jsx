import React from 'react';

const servicesData = [
    {
        name: "Virtual Consultation",
        price: "$0",
        duration: "15 min",
        image: "/images/Virtual Consultation.png",
        description: "15-minute virtual consultation to discuss your needs and goals."
    },
    {
        name: "Full Scalp SMP (Whole Head)",
        price: "$2200+",
        duration: "120 min",
        deposit: "$350.00 deposit required",
        image: "/images/Full Scalp SMP.jpg",
        description: "Achieve the look of natural, full hair with our scalp micro pigmentation service. Our skilled technicians use advanced techniques to create realistic hair follicle impressions. Perfect for thinning hair or hair loss, this non-invasive treatment gives you a youthful, confident appearance."
    },
    {
        name: "Hairline Restoration SMP",
        price: "$900+",
        duration: "120 min",
        deposit: "$250.00 deposit required",
        image: "/images/Hairline Restoration SMP.png",
        description: "(Front Hairline Only) Best for clients with receding front hairline or widow's peak. This service restores a natural looking hairline and blends into the existing hair. Usually 2-3 sessions required."
    },
    {
        name: "Microshading/ Ombré Powder Brow",
        price: "$500",
        duration: "120 min",
        deposit: "$100.00 deposit required",
        artist: "WITH Natalie Kobman",
        image: "/images/Microshading.jpg",
        description: "This semi-permanent technique creates a soft, gradient effect, blending from light to dark for a natural, makeup-like finish. Perfect for all skin types, it offers long-lasting results (1-3 years) with minimal upkeep."
    },
    {
        name: "Combo Brow (Hairstrokes + Shading)",
        price: "$550",
        duration: "180 min",
        deposit: "$150.00 deposit required",
        image: "/images/Combo Brow.jpg",
        description: "Creates a fuller, more defined brow with a natural, yet filled-in appearance. Offers a combination of natural strokes and added fullness, ideal for those with sparse or uneven brows."
    },
    {
        name: "Lip Blushing Service",
        price: "$500",
        duration: "120 min",
        deposit: "$100.00 deposit required",
        image: "/images/Lip Blushing.png",
        description: "Lip blushing is a semi-permanent tattoo technique that enhances the natural lip color, shape, and definition. Using a specialized machine, soft layers of pigment are applied for a subtle, tinted effect."
    },
    {
        name: "Lip Neutralization Service",
        price: "$500",
        duration: "120 min",
        deposit: "$150.00 deposit required",
        image: "/images/Lip Neutralization.jpg",
        description: "Revitalize your lips with our lip neutralization service. Our experts correct uneven tones and dark spots, giving you a smooth, natural color. Perfect for a refreshed, youthful look."
    },
    {
        name: "Permanent Upper And Lower Eyeliner",
        price: "$600",
        duration: "180 min",
        deposit: "$150.00 deposit required",
        image: "/images/Permanent Upper And Lower Eyeliner.jpg",
        description: "Complete eyeliner enhancement for both upper and lower lids for a complete, defined look."
    },
    {
        name: "Permanent Upper Eyeliner Tattoo",
        price: "$350",
        duration: "90 min",
        deposit: "$100.00 deposit required",
        image: "/images/Permanent Upper Eyeliner Tattoo.jpg",
        description: "Enhance your eyes with our professional eyeliner tattoo service. We use advanced techniques to create precise, long-lasting eyeliner that enhances your natural beauty."
    },
    {
        name: "Permanent Lower Eyeliner Tattoo",
        price: "$350",
        duration: "90 min",
        deposit: "$100.00 deposit required",
        image: "/images/Permanent Lower Eyeliner Tattoo.jpg",
        description: "Enhance your eyes with our Permanent Lower Eyeliner Tattoo! Achieve flawless, long-lasting definition that saves time and effort."
    },
    {
        name: "Brow Saline Removal",
        price: "$399",
        duration: "120 min",
        deposit: "$100.00 deposit required",
        image: "/images/Brow Saline Removel.jpg",
        description: "Saline brow removal is a non-laser method for lightening or removing unwanted eyebrow tattoo or microblading. A gentler alternative to laser, suitable for various ink colors."
    },
    {
        name: "Yearly Color Boosting Service PMU",
        price: "$350",
        duration: "120 min",
        deposit: "$100.00 deposit required",
        image: "/images/Yearly Color Boosting.png",
        description: "Enhance and maintain your cosmetic tattoos with our yearly color boosting service. We ensure vibrant, refreshed results."
    },
    {
        name: "4weeks After Touch Up Service",
        price: "$270",
        duration: "120 min",
        deposit: "$50.00 deposit required",
        image: "/images/4weeks After Touch Up.png",
        description: "Enhance your initial permanent makeup results with our touch-up service, designed to refine and perfect your brows, eyeliner, or lips."
    },
    {
        name: "Eyebrow Lamination & Tinting",
        price: "$180",
        duration: "60 min",
        deposit: "$50.00 deposit required",
        image: "/images/Eyebrow Lamination & Tinting.jpg",
        description: "Achieve perfectly groomed brows with our eyebrow lamination service. Our experts shape and set your brows for a fuller, natural look."
    },
    {
        name: "Freckles Tattoo",
        price: "$150",
        duration: "60 min",
        deposit: "$50.00 deposit required",
        image: "/images/Freckles tattoo.jpg",
        description: "Add natural-looking freckles to enhance your features with our professional freckles tattoo service."
    },
    {
        name: "Beauty Marks On Face",
        price: "$120",
        duration: "45 min",
        deposit: "$50.00 deposit required",
        image: "/images/Beauty Marks On Face.jpg",
        description: "Enhance your natural beauty with our custom beauty mark service. Our skilled artists create realistic and attractive beauty marks that add charm to your look."
    },
    {
        name: "Minimalist & Fine-Line Tattoos",
        price: "$80+",
        duration: "60 min",
        deposit: "$50.00 deposit required",
        image: "/images/Minimalist & Fine-Line Tattoos.jpg",
        description: "Discover fineline tattoo artistry with our experts. Specializing in intricate, delicate designs for stunning, detailed artwork. Ideal for minimalist styles."
    },
    {
        name: "Lettering • Symbolic Tattoos 3x3",
        price: "$120+",
        duration: "90+ min",
        image: "/images/Lettering Symbolic Tattoos 3x3.jpg",
        description: "Delicate, meaningful tattoos designed with intention. Choose from elegant script, names, dates, quotes, or powerful symbols like zodiac signs, angel numbers, hearts, and more."
    },
    {
        name: "Custom Designs 4x6 and Above",
        price: "$400+",
        duration: "180 min",
        deposit: "$100.00 deposit required",
        image: "/images/Custom Designs 4x6 and Above.jpg",
        description: "Personalized tattoos based on your ideas: simple, meaningful, and designed with care. Popular styles include mandalas, spiritual symbols, tribal elements, sacred geometry, florals."
    }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Expert cosmetic tattoo and beauty services</p>
        <div className="services-gallery">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-content">
                {service.artist && (
                  <div className="service-artist">{service.artist}</div>
                )}
                <div className="service-header">
                  <h3 className="service-name">{service.name}</h3>
                  <div className="service-pricing">
                    <span className="service-price">{service.price}</span>
                    {service.duration && (
                      <span className="service-duration">{service.duration}</span>
                    )}
                  </div>
                </div>
                {service.deposit && (
                  <div className="service-deposit">{service.deposit}</div>
                )}
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
