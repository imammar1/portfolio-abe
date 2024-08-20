import React from 'react';
import './About.css';
import profileImage from '../assets/images/profile.jpg'; // Ensure this path is correct
import resumePDF from '../assets/resume.pdf';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Ibrahim Ammar" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p className="subtitle">My Introduction</p>
          <div className="about-details">
            <div className="detail-item">
              <h4>Experience</h4>
              <p>1+ Years</p>
            </div>
            <div className="detail-item">
              <h4>Completed</h4>
              <p>10+ Projects</p>
            </div>
          </div>
          <p>
            Get to know me! Hello, I am Ibrahim Ammar, a <strong>highly motivated, adaptable, </strong> and <strong> goal-oriented engineer. </strong>
          </p>
          <p>
            My educational journey includes earning a Bachelor of Science in Computer Science from the University of Michigan - Dearborn in April 2024, where I immersed myself in various aspects of technology, from Mobile Applications to Software Security. During my university years, I actively engaged in projects like redesigning a website called FutureScopeTech, aka 24TechDesign, and developing innovative software applications, honing my skills in project management and collaboration.
          </p>
          <p>
            Outside of academia, you will often find me gaming with friends, cheering on my favorite sports teams, or exploring new destinations. I thrive on the excitement of competition and the camaraderie of shared experiences.
          </p>
          <p>
            My professional toolkit encompasses languages like C++, Java, Python, and JavaScript, alongside expertise in web development frameworks like React.js and Next.js. I am adept at utilizing tools like GitHub, Jira, Tableau, and Minitab, and I am well-versed in Agile methodologies and SCRUM practices.
          </p>
          <p>
            When I am not immersed in technology or gaming, I love to travel, seeking out new adventures and broadening my horizons. Whether it is hiking through scenic landscapes or exploring bustling cities, I am always eager to embrace new cultures and experiences.
          </p>
          <a href={resumePDF} className="btn-download" download>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
