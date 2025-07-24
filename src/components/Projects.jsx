import React from "react";
import "./styles.css"; // Optional: separate styling

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Things I've Built......thus far</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p className="project-tech">JavaScript . React . Vite . CSS</p>
          <p className="project-description">
            A personal portfolio showcasing my transition from engineering to
            tech. Built with React and styled for clarity and responsiveness.
          </p>
          <a
            href="https://github.com/FairuzFairuz/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>FootyVote</h3>
          <p className="project-tech">
            JavaScript . React . Node . Express . PostgreSQL . JWT
            Authentication . Bootstrap
          </p>
          <p className="project-description">
            A PERN full-stack application designed for football enthusiasts to
            engage in debates, vote on key football topics and interact with
            football-related discussions. By the fans, for the fans!
          </p>
          <a
            href="https://github.com/FairuzFairuz/FootyVote"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Just Math It</h3>
          <p className="project-tech">JavaScript . HTML . CSS</p>
          <p className="project-description">
            A game to instil the interest of maths and basic computer skills in
            young children by incorporating simple maths equations with the
            handling of keypad/mouse.
          </p>
          <a
            href="https://github.com/FairuzFairuz/Just_Math_It"
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
