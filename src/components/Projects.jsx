import React from "react";
import "./styles.css";
import {
  SiJavascript,
  SiReact,
  SiVite,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
  SiBootstrap,
  SiHtml5,
} from "react-icons/si";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Things I've Built......thus far</h2>
      <div className="projects-grid">
        {/* Portfolio Website */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <div className="project-tech-icons">
            <SiJavascript />
            <SiReact />
            <SiVite />
            <SiCss3 />
          </div>
          <p className="project-description">
            A personal portfolio showcasing my transition from engineering to
            tech. Built with React and styled for clarity and responsiveness.
          </p>
          <a
            href="https://github.com/FairuzFairuz/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View on GitHub
          </a>
        </div>

        {/* FootyVote */}
        <div className="project-card">
          <h3>FootyVote</h3>
          <div className="project-tech-icons">
            <SiJavascript />
            <SiReact />
            <SiNodedotjs />
            <SiExpress />
            <SiPostgresql />
            <SiJsonwebtokens />
            <SiBootstrap />
          </div>
          <p className="project-description">
            A PERN full-stack application designed for football enthusiasts to
            engage in debates, vote on key football topics and interact with
            football-related discussions. By the fans, for the fans!
          </p>
          <a
            href="https://github.com/FairuzFairuz/FootyVote"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View on GitHub
          </a>
        </div>

        {/* Just Math It */}
        <div className="project-card">
          <h3>Just Math It</h3>
          <div className="project-tech-icons">
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
          </div>
          <p className="project-description">
            A game to instil the interest of maths and basic computer skills in
            young children by incorporating simple maths equations with the
            handling of keypad/mouse.
          </p>
          <a
            href="https://github.com/FairuzFairuz/Just_Math_It"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
