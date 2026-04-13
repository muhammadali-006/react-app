import React from 'react';
import { navItems } from '../data/data';

const Navbar = ({ scrolled, activeSection, scrollTo, toggleTheme, theme }) => {
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo" onClick={() => scrollTo('home')}>
          <span className="fire-text">*</span> M<span className="fire-text">.</span>Ali <span className="fire-text">*</span>
        </div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollTo(item.id); }} 
                 className={`nav-link ${activeSection === item.id ? 'active' : ''}`}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
        <button className="mobile-menu-btn">Menu</button>
      </nav>
    </header>
  );
};

export default Navbar;