import React from 'react';
import './Skills.css';

function Skills() {
  const skillsList = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'REST APIs',
    'Git'
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
