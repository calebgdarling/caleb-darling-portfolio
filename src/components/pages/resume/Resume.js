import React from 'react';
import './Resume.css';
import PolarisLogo from '../../../assets/polaris-logo.png';
import TempWorksLogo from '../../../assets/tempworks-logo.png';
import MincoLogo from '../../../assets/minco-logo.png';
import UNWLogo from '../../../assets/unw-logo.png';
import Codecademy from '../../../assets/codecademy-logo.png';


function Resume() {
  return (
    <div className="resume-container">
      <h2>Experience</h2>

      <div className="experience-item">
        <div className="company">
          <img src={PolarisLogo} alt="Polaris Inc. logo" />
          <h3>Software Support Consultant</h3>
          <p>Polaris Inc. · Full-time</p>
          <p>Apr 2021 - Present · 2 yrs 7 mos</p>
          <p>Plymouth, Minnesota, United States · Hybrid</p>
        </div>
        <ul className="responsibilities">
          <li>Responsible for the administration of multiple software programs, including a web based CRM system and iOS based mobile applications.</li>
          <li>Replicate, test, and document bugs using Github, providing input into the appropriate timing and prioritization for fixes.</li>
          <li>Contribute to quality assurance efforts, helping build and execute regression tests with Rainforest QA.</li>
          <li>Act in a business analyst capacity as needed, identifying business needs and gathering requirements for new software features.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="company">
          <img src={TempWorksLogo} alt="TempWorks Software, Inc logo" />
          <h3>Software Support Analyst</h3>
          <p>TempWorks Staffing Software · Full-time</p>
          <p>Aug 2020 - Apr 2021 · 9 mos</p>
          <p>Eagan, Minnesota, United States · On-site</p>
        </div>
        <ul className="responsibilities">
          <li>Provide support to end users of a proprietary Microsoft SQL Server-based software package on a wide variety of issues.</li>
          <li>Document, track, and resolve software related issues in a timely fashion.</li>
          <li>Troubleshoot and analyze incoming customer calls related to both enterprise and hosted software solutions.</li>
          <li>Create and maintain positive customer relationship using knowledge of commonly-used concepts, practices, and procedures in the staffing industry and accounting areas.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="company">
          <img src={MincoLogo} alt="Minco Products, Inc logo" />
          <h3>IT Business Analyst Intern</h3>
          <p>Minco Products, Inc · Internship</p>
          <p>Jun 2019 - Jul 2020 · 1 yr 2 mos</p>
          <p>Fridley, MN · On-site</p>
        </div>
        <ul className="responsibilities">
          <li>Provide a range of IT support services including gathering and consolidating data, documenting and developing action plans, and prioritizing business requirements.</li>
          <li>Assist with IT projects and generate reports as needed.</li>
          <li>Help solve technical problems and recommend solutions.</li>
          <li>Support Minco software systems including IFS Applications, SQL Developer, Sharepoint Online.</li>
          <li>Lead meetings to elicit information and gather requirements that are within project scope.</li>
        </ul>
      </div>

      <h2>Education</h2>
      <div className="education-item">
        <img src={UNWLogo} alt="University of Northwestern - St. Paul logo" />
        <h3>University of Northwestern - St. Paul</h3>
        <p>Bachelor of Science - BS, Management Information Systems</p>
      </div>

      <h2>Licenses & Certifications</h2>
      <div className="certification-item">
        <img src={Codecademy} alt="Codecademy logo" />
        <h3>Full-Stack Engineer Career Path</h3>
        <p>Issued Oct 2023</p>
        <a href="https://www.codecademy.com/profiles/calebgdarling/certificates/ffd0f42cce1a44e9a0108b365047a0a6" target="_blank" rel="noopener noreferrer" className="show-credential-link">
  Show Credential
</a>

      </div>
    </div>
  );
}

export default Resume;
