import React, { useState } from 'react';
import { projectsData } from '../data/data';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = selectedCategory === 'all' ? projectsData : projectsData.filter(p => p.category === selectedCategory);
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header animate-scroll">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="project-filters animate-scroll">
          {categories.map(cat => (
            <button key={cat} className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`} 
                    onClick={() => setSelectedCategory(cat)}>
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-card animate-scroll" data-delay={idx * 50}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  <span>Duration: {project.duration}</span>
                  <span>Client: {project.client}</span>
                </div>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
                </div>
                <button className="project-btn">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;