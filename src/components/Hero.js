import React from 'react';
import './Hero.css';
import scrollIcon from '../assets/images/scroll.svg';  // Update the path as necessary

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Ibrahim Ammar</h1>
          <p>Graduate in Computer Science from University of Michigan-Dearborn</p>
          <a href="#contact" className="btn-primary">Say Hello</a>
        </div>
        <div className="hero-image-container">
          {/* The image is now set as a background in CSS */}
        </div>
      </div>
      <div className="scroll-down">
        <p>Scroll down</p>
        <img src={scrollIcon} alt="Scroll down" className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;
