import React from 'react';
import './HeroSection.css'; // Ensure styles are applied correctly

function HeroSection() {
  // Scroll to the Dashboard section
  const handleScroll = () => {
    const dashboardSection = document.getElementById('dashboard-section');
    if (dashboardSection) {
      window.scrollTo({
        top: dashboardSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Empowering Families with Health Education</h1>
        <p>
          Access reliable resources, expert guidance, and innovative tools to enhance your family's health and well-being. 
          From practical tips on nutrition and exercise to personalized health plans and mental wellness strategies, 
          we provide everything you need to make informed decisions and create a healthier, happier lifestyle for your loved ones.
        </p>
        <button className="cta-button" onClick={handleScroll}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/hero-image.jpg" alt="Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
