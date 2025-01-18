import React from 'react';
import Navbar from '../molecules/Navbar';

const DefaultTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>© 2025 E-Commerce App</footer>
    </div>
  );
};

export default DefaultTemplate;
