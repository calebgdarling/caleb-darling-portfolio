import React from 'react';
import './Header.css'; // Import your CSS file
import profileImage from '../../assets/profile-picture.png'; // Import your profile image file

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={profileImage} alt="Caleb Darling" className="profile-image" />
        <div className="header-text">
          <h1>Caleb Darling</h1>
          <p>Aspiring Software Developer</p>
        </div>
      </div>
    </header>
    
  );
}

export default Header;
