import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Use Link to navigate to Home */}
        </li>
        <li>
          <Link to="/skills">Skills</Link> {/* Use Link to navigate to Skills */}
        </li>
        <li>
          <Link to="/projects">Projects</Link> {/* Use Link to navigate to Skills */}
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
