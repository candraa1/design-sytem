'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">CB Motor Club</a>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
