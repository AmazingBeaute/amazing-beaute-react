import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Amazing Beauté - Premium Cosmetic Tattoo Studio",
  description = "Transform your beauty routine with Amazing Beauté's expert cosmetic tattoo services. Specializing in microblading, lip blush, eyeliner tattoo, and permanent makeup.",
  keywords = "cosmetic tattoo, microblading, permanent makeup, PMU, lip blush, eyeliner tattoo, eyebrow tattoo, beauty services",
  image = "/images/hero.jpg",
  url = "https://amazingbeaute.co/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
