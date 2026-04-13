import React from 'react';
import { softwareSkillsData } from '../data/data';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header animate-scroll">
          <span className="section-tag">My Expertise</span>
          <h2 className="section-title">Software Skills</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-container">
          <div className="skills-grid">
            {softwareSkillsData.map((skill, idx) => (
              <div key={idx} className="skill-card animate-scroll" data-delay={idx * 50}>
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="additional-strength animate-scroll">
            <h3 className="fire-text">My Additional Strength</h3>
            <p>Concept Artist specializing in pencil-based sketches for characters and scenes.</p>
            <div className="strength-tags">
              <span>Pencil Sketch</span><span>Character Design</span><span>Scene Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;