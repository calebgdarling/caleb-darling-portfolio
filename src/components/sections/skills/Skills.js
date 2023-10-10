import React from 'react';
import './Skills.css'; // Import your CSS file

function Skills() {
  const skillsList = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'REST APIs',
    'Git',
    // Add more skills as needed
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
