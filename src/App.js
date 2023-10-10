import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home-page/Home';
import SkillsPage from './components/pages/skills-page/SkillsPage';
import Navbar from './components/navbar/Navbar';
import ProjectsPage from './components/pages/projects-page/ProjectsPage';
import Footer from './components/footer/Footer';
import Resume from './components/pages/resume/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caleb-darling-portfolio" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
