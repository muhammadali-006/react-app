import React from 'react';
import { statsData, myPhotoPath } from '../data/data';

const Hero = ({ handleDownloadCV, scrollTo, setIsChatOpen }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content animate-scroll">
        <div className="fire-badge"><span>SENIOR CREATIVE PROFESSIONAL</span></div>
        <h1>I'm <span className="fire-text">Muhammad Ali</span></h1>
        <div className="typed-title">
          <span className="fire-text">Senior Graphic Designer</span>
          <span className="title-separator">|</span>
          <span>Video Editor</span>
          <span className="title-separator">|</span>
          <span className="fire-text">Map Animator</span>
        </div>
        <p className="hero-subtitle"><em>"I don't promote myself, my skills speak for me"</em></p>
        <p className="hero-description">With <strong className="fire-text">5+ years</strong> of industry experience, I deliver premium visual content.</p>
        <div className="hero-buttons">
          <button onClick={handleDownloadCV} className="btn-primary">Download CV</button>
          <button onClick={() => scrollTo('contact')} className="btn-fire">Hire Me</button>
          <button onClick={() => setIsChatOpen(true)} className="btn-secondary">Ask AI</button>
        </div>
        <div className="hero-stats">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image animate-scroll">
        <div className="fire-border"></div>
        <div className="hero-image-placeholder">
          <img src={myPhotoPath} alt="Muhammad Ali" className="profile-image" />
          <div className="profile-badge">Available for Work</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;