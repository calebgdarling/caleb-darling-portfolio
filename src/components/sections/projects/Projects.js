import React from 'react';
import './Projects.css'; // Import your CSS file

function Projects() {
  const projectsData = [
    {
      name: 'Project 1',
      description: 'Description of Project 1.',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2.',
    },
    // Add more project data as needed
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
