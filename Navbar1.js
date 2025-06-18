import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <nav style={{ background: '#f0f0f0', padding: '10px' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
