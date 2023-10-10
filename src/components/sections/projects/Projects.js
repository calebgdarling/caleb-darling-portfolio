import React from 'react';
import './Projects.css';
import ProjectImg1 from '../../../assets/project-screenshot1.png';
import ProjectImg2 from '../../../assets/task-mgmt-app.png';
import ProjectImg3 from '../../../assets/portfolio-screenshot.png';

const Project = () => {
  return (
    <div>
      {/* Project 1 */}
      <div className="project">
        <div className="project-details">
          <h3>Project 1: E-Commerce Website</h3>
          <p>An online store for selling various products. Built with React, Redux, Node.js, and MongoDB.</p>
  
          <div className="project-links">
            <a href="https://www.example.com/ecommerce-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/yourusername/ecommerce-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
  
          <h4>Technical Details</h4>
          <ul>
            <li>Frontend: React, Redux</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MongoDB</li>
            <li>Deployment: Heroku</li>
          </ul>
  
          <p>Your role: Lead Developer</p>
  
          <h4>Challenges and Solutions</h4>
          <p>Implemented secure user authentication, integrated payment gateways, and optimized for performance.</p>
  
          <h4>Results and Outcomes</h4>
          <p>Increased sales by 40% within the first quarter. Received positive user feedback on the user-friendly interface.</p>
        </div>
  
        <div className="project-screenshot">
          <img src={ProjectImg1} alt="E-Commerce Website Screenshot" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-details">
          <h3>Project 2: Task Management App</h3>
          <p>A web application for managing tasks and to-do lists. Built with Vue.js and Firebase.</p>
  
          <div className="project-links">
            <a href="https://www.example.com/task-app-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/yourusername/task-app-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
  
          <h4>Technical Details</h4>
          <ul>
            <li>Frontend: Vue.js, Vuex</li>
            <li>Backend: Firebase</li>
          </ul>
  
          <p>Your role: Sole Developer</p>
  
          <h4>Challenges and Solutions</h4>
          <p>Implemented real-time synchronization across devices and optimized database queries for fast performance.</p>
  
          <h4>Results and Outcomes</h4>
          <p>Received 5,000+ users in the first month. Positive user reviews on the app stores.</p>
        </div>
  
        <div className="project-screenshot">
          <img src={ProjectImg2} alt="Task Management App Screenshot" />
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <div className="project-details">
          <h3>Project 3: Portfolio Website (This Website!)</h3>
          <p>My personal portfolio website built using React and showcasing various software development projects.</p>
  
          <div className="project-links">
            <a href="https://www.example.com/your-portfolio" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/yourusername/your-portfolio-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
  
          <h4>Technical Details</h4>
          <ul>
            <li>Frontend: React, CSS</li>
          </ul>
  
          <p>Your role: Sole Developer</p>
  
          <h4>Challenges and Solutions</h4>
          <p>Designed and implemented a user-friendly portfolio with interactive project showcases and responsive design.</p>
  
          <h4>Results and Outcomes</h4>
          <p>Received positive feedback from visitors and potential employers. Effectively showcases my work as a software developer.</p>
        </div>
  
        <div className="project-screenshot">
          <img src={ProjectImg3} alt="Portfolio Website Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Project;
