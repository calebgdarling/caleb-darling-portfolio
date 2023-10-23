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
          <h3>Project 1: Weather App</h3>
          <p>An online Weather App that allows you to search by city and find details on the current weather conditions. Utilizes the API from OpenWeather.</p>
  
          <div className="project-links">
            <a href="https://calebgdarling.github.io/weather/" target="_blank" rel="noopener noreferrer">Live Website</a>
            <a href="https://github.com/calebgdarling/weather" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
  
          <h4>Technical Details</h4>
          <ul>
            <li>Skills Used: HTML/CSS, Javascript, Fetch API, Handling User Input, JSON parsing</li>
            <li>Deployment: Github Pages</li>
          </ul>
  
          <h4>Challenges and Solutions</h4>
          <p>It took some time to read/understand the documentation for the OpenWeather API and then integrate that into my website. My biggest challenge was taking in a City name and geocoding it into Latitude and Longitude for the API to read. In the end everything worked as planned and I have a working Weather App!</p>
  
        </div>
  
        <div className="project-screenshot">
          <img src={ProjectImg1} alt="E-Commerce Website Screenshot" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-details">
          <h3>Project 2: Task Management App</h3>
          <p>A web application for managing tasks and to-do lists, built with React.js for a seamless user experience.</p>
  
          <div className="project-links">
            <a href="https://calebgdarling.github.io/task-mgmt-app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/calebgdarling/task-mgmt-app" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
  
          <h4>Technical Details</h4>
          <ul>
            <li>Skills Used: React.js, State Management, User Interface Design</li>
            <li>Deployment: Hosting Platform (e.g., Netlify, Vercel)</li>
          </ul>
  
          <p>Your role: Sole Developer</p>
  
          <h4>Challenges and Solutions</h4>
          <p>One of the key challenges was implementing features such as adding, editing, and deleting tasks while maintaining a user-friendly interface. I also worked on real-time updates and task prioritization to enhance the user's task management experience. Through diligent design and coding, I successfully created a functional and efficient To-Do App.</p>
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
