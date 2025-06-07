import React from "react";

const App = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#fff0f6', color: '#1a1a1a', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#000', color: '#ffd1dc', padding: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', margin: 0 }}>Amazing Beauté</h1>
        <p style={{ margin: '0.5rem 0 0', fontStyle: 'italic' }}>Effortless beauty, expertly enhanced</p>
        <p>Alexandria, VA — by appointment only</p>
      </header>

      <section style={{ padding: '2rem 1rem', maxWidth: '900px', margin: 'auto' }}>
        <h2>Our Services</h2>
        <ul style={{ paddingLeft: '1rem', lineHeight: 1.8 }}>
          {[
            'Scalp Hair Micropigmentation',
            'Ombré Powder Brow / Microshading',
            'Combo Brow (Hairstrokes + Shading)',
            'Lip Blushing / Lip Neutralization',
            'Eyeliner Tattoo',
            'Brow Saline Removal',
            'Yearly Color Boosting PMU',
            '4-Week Touch-Up Service',
            'Beauty Marks on Face / Freckles Tattoo',
            'Eyebrow Lamination and Tinting',
            'Minimalist / Fineline / Custom Tattoos'
          ].map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <a
          href="https://amazingbeaute.glossgenius.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#ff69b4',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '1rem'
          }}
        >
          Book Now
        </a>
      </section>

      <section style={{ padding: '2rem 1rem', maxWidth: '900px', margin: 'auto' }}>
        <h2>What Clients Say</h2>
        {[
          "Absolutely love my brows! She’s professional, talented, and made me feel so confident. Highly recommend Amazing Beauté!",
          "The studio is beautiful and clean. I got lip blush done and I’m obsessed with the results. Can’t wait for my next appointment!"
        ].map((quote, index) => (
          <blockquote
            key={index}
            style={{
              fontStyle: 'italic',
              borderLeft: '3px solid #ff69b4',
              paddingLeft: '1rem',
              margin: '1rem 0'
            }}
          >
            {quote}
          </blockquote>
        ))}
      </section>

      <section style={{ padding: '2rem 1rem', maxWidth: '900px', margin: 'auto' }}>
        <h2>Connect with Us</h2>
        <p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </p>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem 1rem', backgroundColor: '#000', color: '#ffd1dc' }}>
        &copy; 2025 Amazing Beauté. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
