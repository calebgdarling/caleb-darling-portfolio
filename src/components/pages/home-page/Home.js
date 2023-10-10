import React from 'react';
import './Home.css';
import AboutMe from '../../sections/about-me/AboutMe';
import Header from '../../header/Header';
import ContactInfo from '../../sections/contact-info/ContactInfo';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <AboutMe />
      <ContactInfo />
    </div>
  );
}

export default Home;
