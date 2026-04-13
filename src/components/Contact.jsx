import React from 'react';
import { contactInfo } from '../data/data';

const Contact = ({ handleContactSubmit, formStatus }) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header animate-scroll">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info animate-scroll">
            <div className="contact-card">
              <div className="contact-icon">Phone</div>
              <h4>Phone</h4><p>{contactInfo.phone}</p>
              <a href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="contact-link">WhatsApp →</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">Email</div>
              <h4>Email</h4><p>{contactInfo.email}</p>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">Send Email →</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">Location</div>
              <h4>Location</h4><p>{contactInfo.address}</p>
              <span className="contact-note">Remote Available</span>
            </div>
          </div>
          <div className="contact-form-container animate-scroll">
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" name="name" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" className="form-input" placeholder="Project inquiry" />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" className="form-textarea" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn-primary submit-btn">Send Message</button>
            </form>
            {formStatus.message && <div className="form-message success">{formStatus.message}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;