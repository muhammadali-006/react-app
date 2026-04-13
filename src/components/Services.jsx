import React from 'react';
import { servicesData } from '../data/data';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header animate-scroll">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">My Services</h2>
          <div className="section-divider"></div>
        </div>
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-card animate-scroll" data-delay={idx * 100}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;