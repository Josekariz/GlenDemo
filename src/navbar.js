import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Glen <span role="img" aria-label="Smiley Emoji">😊</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
