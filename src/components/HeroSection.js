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
        We're thrilled to have you here. Explore our valuable resources and educational materials to keep your family healthy!
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
