import React from 'react';
import { navItems, contactInfo } from '../data/data';

const Footer = ({ scrollTo }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="fire-text">*</span> M<span className="fire-text">.</span>Ali <span className="fire-text">*</span>
            </div>
            <p>Senior Graphic Designer / Video Editor & Map Animator</p>
            <div className="footer-social">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">LI</a>
              <a href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="social-link">WA</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>Phone: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
            <p>Address: {contactInfo.address}</p>
            <p>Available 24/7</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Muhammad Ali. All rights reserved.</p>
          <p>Crafted with <span className="fire-text">Fire Theme</span> | AI-Powered</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;