import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Flappy Frenzy",
      description: "Custom 2D game in Unity featuring bird movement, obstacle generation, and custom sprites",
      link: "/FlappyFrenzy.zip",
      image: "/Flappy.png" 
    },
    {
      title: "FutureScopeTech Website Redesign",
      description: "Led the redesign of FutureScopeTech’s corporate website with Next.js and TailwindCSS.",
      link: "https://24techdesign.com/",
      image: "/24TechDesign.png" 
    },
    {
      title: "FIDO2 Authentication Survey",
      description: "Surveyed the viability of FIDO2 authentication in universities, with a focus on user experience and security.",
      link: "/usenix2023_soups_latex_template.pdf",
      image: "fido2.jpg" // Add the path to your image
    },
    {
      title: "Abe's Burger Shop",
      description: "Developed a full-stack web platform for a burger shop with React, PHP, and SQL.",
      link: "AbeBurger.zip",
      image: "/abeburger.jpg" // Add the path to your image
    },
    {
      title: "Donut Shop Application",
      description: "Built a full-stack web application for managing a donut shop's inventory using React and PHP.",
      link: "/Donut.zip",
      image: "/donut.jpg" // Add the path to your image
    },
    {
      title: "Crypto Database Project",
      description: "Designed and implemented a relational database schema for a cryptocurrency trading application.",
      link: "/CryptoProject.zip",
      image: "/bitcoin.jpg" // Add the path to your image
    },
    {
      title: "COVID-19 Data Analysis",
      description: "Analyzed COVID-19 data to assess socioeconomic and medical impacts, utilizing statistical tools like Tableau.",
      link: "/CovidProject.zip",
      image: "/covid.png" // Add the path to your image
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <h3 className="overlay-title">{project.title}</h3>
                <p className="overlay-description">{project.description}</p>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <a href={project.link} className="btn-primary">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
