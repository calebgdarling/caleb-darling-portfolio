import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/calebdarling" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/calebgdarling" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            {/* Add more footer links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Darling Consulting, LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
