import React from 'react';
import './Home.css';
import Skills from '../../sections/skills/Skills';
import Projects from '../../sections/projects/Projects';
import AboutMe from '../../sections/about-me/AboutMe';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;