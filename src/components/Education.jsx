import React from "react";
import "./styles.css";
import { FaBook, FaSchool, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="projects-section">
      <h2 className="section-title">Academic Adventure</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Software Engineering Bootcamp</h3>
          <div className="project-tech-icons">
            <div className="project-tech-icons">
              <FaBook />
              <FaSchool />
            </div>
          </div>
          <p className="project-description">
            Completed an immersive full-stack development bootcamp at{" "}
            <a
              href="https://generalassemb.ly"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              General Assembly
            </a>
            , focusing on modern web technologies and agile practices.
          </p>
          <p className="project-tech">2025</p>
        </div>

        <div className="project-card">
          <h3>Bachelor of Technology in Mechanical Engineering</h3>
          <div className="project-tech-icons">
            <FaSchool />
            <FaBook />
            <FaGraduationCap />
          </div>
          <p className="project-description">
            Earned my degree from{" "}
            <a
              href="https://nus.edu.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              National University of Singapore
            </a>
            , where I developed strong analytical and technical foundations.
          </p>
          <p className="project-tech">2018 – 2022</p>
        </div>

        <div className="project-card">
          <h3>Diploma in Engineering (Mechanical Technology)</h3>
          <div className="project-tech-icons">
            <FaBook />
            <FaSchool />
          </div>
          <p className="project-description">
            Graduated from{" "}
            <a
              href="https://www.sp.edu.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Singapore Polytechnic
            </a>
            , gaining hands-on experience in mechanical systems and design.
          </p>
          <p className="project-tech">2013 – 2016</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
