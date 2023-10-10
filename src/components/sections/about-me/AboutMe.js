import React from "react";
import "./AboutMe.css"; // Import your CSS file
import dogImage from "../../../assets/brown-aussie copy.jpg"; // Import your dog image (replace with your actual image)

function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <h2>About Me</h2>
        <div className="about-me-content">
          <div className="about-me-paragraphs">
            <p className="about-me-paragraph">
              Hey there, I'm Caleb Darling, a passionate software developer hailing
              from the Twin Cities. My expertise spans both front-end and back-end
              development, and I thrive on continually learning and exploring the
              latest tools and frameworks to refine my skills.
            </p>
            <p className="about-me-paragraph">
              Outside of coding, you'll often find me strolling with my trusty
              Australian Shepherd, Banjo, or honing my tennis skills. Don't hesitate
              to reach out; my contact information is just a scroll away!
            </p>
          </div>
          <div className="about-me-image">
            <img src={dogImage} alt="My Dog" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
