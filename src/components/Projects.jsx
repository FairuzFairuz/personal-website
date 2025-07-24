import React from "react";
import "./styles.css"; // Optional: separate styling

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p className="project-tech">React ~ Vite ~ CSS</p>
          <p className="project-description">
            A personal portfolio showcasing my transition from engineering to
            tech. Built with React and styled for clarity and responsiveness.
          </p>
          <a
            href="https://github.com/yourusername/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Bug Tracker App</h3>
          <p className="project-tech">React · Firebase · Tailwind</p>
          <p className="project-description">
            A lightweight issue tracker for small teams. Includes user auth,
            ticket creation, and status filtering.
          </p>
          <a
            href="https://github.com/yourusername/bug-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
