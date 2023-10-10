import React from 'react';
import './Home.css';
import Skills from '../sections/skills/Skills';
import Projects from '../sections/projects/Projects';
import AboutMe from '../sections/about-me/AboutMe';
import Header from '../header/Header';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
