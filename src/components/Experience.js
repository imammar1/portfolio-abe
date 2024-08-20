import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-icons">
        <div className="experience-category">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <span>Education</span>
        </div>
        <div className="experience-category">
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
          <span>Experience</span>
        </div>
      </div>
      <div className="qualification-container">
        
        {/* Henry Ford College */}
        <div className="qualification-item">
          <div className="qualification-content left education">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} className="title-icon" /> Henry Ford College
            </h3>
            <span>Dearborn, MI | Aug. 2019 - May. 2021</span>
            <p>Michigan Transfer Agreement: Major in Computer Science</p>
            <ul>
              <li>Dean’s List</li>
              <li>Received H. Hackett Scholarship</li>
              <li>Henry Ford Engineering Club</li>
            </ul>
          </div>
          <div className="qualification-rounder"></div>
          <div className="qualification-line"></div>
        </div>

        {/* University of Michigan - Dearborn */}
        <div className="qualification-item">
          <div className="qualification-content right education">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} className="title-icon" /> University of Michigan - Dearborn
            </h3>
            <span>Dearborn, MI | Sep. 2021 - Apr. 2024</span>
            <p>Bachelor of Science, Major in Computer Science</p>
            <ul>
              <li>Relevant Coursework: Mobile Applications, Software Security, Computer Networks, Data Structure/Algorithms</li>
            </ul>
          </div>
          <div className="qualification-rounder"></div>
          <div className="qualification-line"></div>
        </div>

        {/* Primealete Nutrition */}
        <div className="qualification-item">
          <div className="qualification-content left experience">
            <h3>
              <FontAwesomeIcon icon={faBriefcase} className="title-icon" /> Primealete Nutrition
            </h3>
            <span>Dearborn, MI | Dec. 2019 - Apr. 2024</span>
            <p>Manager</p>
            <ul>
              <li>Trained over 30 kitchen staff in safely operating and handling equipment, machinery, and utensils.</li>
              <li>Ensured high food quality standards by managing inventory of over 200 items and verifying product quality.</li>
            </ul>
          </div>
          <div className="qualification-rounder"></div>
          <div className="qualification-line"></div>
        </div>

        {/* Precision Controls Systems LLC */}
        <div className="qualification-item">
          <div className="qualification-content right experience">
            <h3>
              <FontAwesomeIcon icon={faBriefcase} className="title-icon" /> Precision Controls Systems LLC
            </h3>
            <span>Farmington Hills, MI | Jun. 2024 - Aug. 2024</span>
            <p>Controls Engineer Intern</p>
            <ul>
              <li>Configured, programmed, tested, and troubleshot PLC-based control systems.</li>
              <li>Developed a thorough understanding of plant layouts and station configurations.</li>
              <li>Collaborated with cross-functional teams to analyze 3D CAD models with JT2GO.</li>
            </ul>
          </div>
          <div className="qualification-rounder"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
