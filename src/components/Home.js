import React from 'react';
import './Home.css';
import proPic from './profile-picture.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Caleb Darling</h1>
          <h2 className="home-subtitle">Aspiring Software Developer</h2>
          <p className="home-intro">
            Over 4 years of experience in the software industry, specializing in SQL, JavaScript, HTML, CSS, TypeScript, React, and Git.
          </p>
          <div className="home-links">
            <a href="https://www.linkedin.com/in/calebdarling/" className="home-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/calebgdarling" className="home-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="home-photo">
          {/* Placeholder for your photo */}
          <img
            src={proPic} // Replace with the path to your photo
            alt="Caleb Darling"
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
