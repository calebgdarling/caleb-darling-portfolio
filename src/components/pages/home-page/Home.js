import React from 'react';
import './Home.css';
import AboutMe from '../../sections/about-me/AboutMe';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import ContactInfo from '../../sections/contact-info/ContactInfo';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <AboutMe />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default Home;
