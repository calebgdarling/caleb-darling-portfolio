import React from 'react';
import './Skills.css'; // Make sure to import your CSS file
import JSIcon from '../../../assets/javascript-icon.png';
import TypescriptIcon from '../../../assets/javascript-icon.png';
import ReactIcon from '../../../assets/react-icon.png';
import NodeIcon from '../../../assets/nodejs-icon.png';
import HTMLIcon from '../../../assets/html-css-icon.png';
import APIIcon from '../../../assets/rest-api-icon.png';
import SQLIcon from '../../../assets/sql-icon.png';
import GitIcon from '../../../assets/git-icon.png';


function Skills() {
  const skillsList = [
    { skill: 'JavaScript', icon: JSIcon },
    { skill: 'TypeScript', icon: TypescriptIcon },
    { skill: 'React', icon: ReactIcon },
    { skill: 'Node.js', icon: NodeIcon },
    { skill: 'HTML/CSS', icon: HTMLIcon },
    { skill: 'REST APIs', icon: APIIcon },
    { skill: 'SQL', icon: SQLIcon },
    { skill: 'Git', icon: GitIcon },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skillsList.map((item, index) => (
            <li className="skill-item" key={index}>
              <img
                src={item.icon}
                alt={`${item.skill} Icon`}
                className="skill-icon"
              />
              {item.skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
