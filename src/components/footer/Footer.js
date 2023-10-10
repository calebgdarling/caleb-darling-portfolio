import React from 'react';
import './Footer.css'; // Import your CSS file
import logoImage from '../../assets/hungry-wolf-logo.png'; // Import your logo image file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoImage} alt="Your Logo" className="footer-logo-img" />
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Darling Consulting, LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
