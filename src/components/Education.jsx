import React from "react";
import "./styles.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">My Academic Adventure</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>Software Engineering Bootcamp</h3>
          <p className="education-description">
            <a
              href="https://generalassemb.ly"
              target="_blank"
              rel="noopener noreferrer"
              className="school-link"
            >
              General Assembly
            </a>
            <br />
            2025
          </p>
        </div>

        <div className="education-item">
          <h3>Bachelor of Technology in Mechanical Engineering</h3>
          <p className="education-description">
            <a
              href="https://nus.edu.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="school-link"
            >
              National University of Singapore
            </a>
            <br />
            2018 – 2022
          </p>
        </div>

        <div className="education-item">
          <h3>Diploma in Engineering (Mechanical Technology)</h3>
          <p className="education-description">
            <a
              href="https://www.sp.edu.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="school-link"
            >
              Singapore Polytechnic
            </a>
            <br />
            2013 – 2016
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
