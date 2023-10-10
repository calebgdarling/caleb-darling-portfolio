import React from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Your Logo</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
