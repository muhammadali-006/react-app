import React from 'react';
import { aboutInfo } from '../data/data';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header animate-scroll">
          <span className="section-tag">Get to Know</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-content animate-scroll">
            <p className="about-text">I am a <strong className="fire-text">senior graphic designer, video editor, and map animator</strong> with <strong className="fire-text">5 years of solid industry experience</strong>. I specialize in producing clear, high-quality visual content.</p>
            <p className="about-text">I work confidently under pressure and consistently meet demanding deadlines. I also lead a team of four, coordinating tasks and maintaining smooth project flow.</p>
            <div className="about-info">
              {aboutInfo.map((item, idx) => (
                <div key={idx} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <div><strong>{item.label}</strong><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats animate-scroll">
            <div className="stat-card"><div className="stat-circle">5+</div><h4>Years Experience</h4><p>Professional</p></div>
            <div className="stat-card"><div className="stat-circle">24/7</div><h4>Fast Delivery</h4><p>Deadline Committed</p></div>
            <div className="stat-card"><div className="stat-circle">100%</div><h4>Satisfaction</h4><p>Guaranteed</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;