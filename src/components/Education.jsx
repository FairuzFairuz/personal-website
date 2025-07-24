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
            <strong>General Assembly</strong>
            <br />
            2025
          </p>
        </div>

        <div className="education-item">
          <h3>Bachelor of Technology in Mechanical Engineering</h3>

          <p className="education-description">
            <strong>National University of Singapore</strong>
            <br />
            2018 - 2022
          </p>
        </div>
        <div className="education-item">
          <h3>Diploma in Engineering (Mechanical Technology)</h3>

          <p className="education-description">
            <strong>Singapore Polytechnic</strong>
            <br />
            2013 - 2016
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
