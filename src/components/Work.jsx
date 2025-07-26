import React from "react";
import "./styles.css";

const Work = () => {
  return (
    <section id="work" className="projects-section">
      <h2 className="section-title">Experience Expedition</h2>
      <div className="projects-grid work-vertical">
        <div className="project-card">
          <h3>Aerosol Research Engineer - Associate</h3>
          <p className="project-description">
            <strong>Vectura Fertin Pharma Laboratories</strong>
            <br />
            Dec 2023 – Mar 2025
          </p>
          <ul className="project-description">
            <li>
              Led development and implementation of aerosol systems and
              processes.
            </li>
            <li>
              Coordinated aerosol research initiatives ensuring regulatory
              compliance.
            </li>
            <li>
              Performed data analysis and troubleshooting for aerosol quality
              assurance.
            </li>
            <li>
              Served as SME during GLP audits, enhancing communication and
              compliance.
            </li>
            <li>
              Conducted internal audits to improve operational efficiency.
            </li>
            <li>
              Authored SOPs and training materials to boost team compliance.
            </li>
            <li>
              Represented EHS&S, completing certified safety and risk management
              training.
            </li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Senior Research Associate</h3>
          <p className="project-description">
            <strong>
              Vectura Fertin Pharma Laboratories (formerly Philip Morris
              International Research Labs)
            </strong>
            <br />
            Jun 2016 – Dec 2023
          </p>
          <ul className="project-description">
            <li>Managed scientific project plans and resource allocation.</li>
            <li>
              Maintained documentation and audited aerosol workflows for
              compliance.
            </li>
            <li>
              Led training and tech transfer for aerosol generation setups and
              BOM creation.
            </li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Lab Technician</h3>
          <p className="project-description">
            <strong>Symrise Asia Pacific</strong>
            <br />
            Jan 2014 – Jun 2016
          </p>
          <ul className="project-description">
            <li>Processed raw material requests to improve lab efficiency.</li>
            <li>
              Compounded beverage flavors with flavorists to enhance product
              diversity.
            </li>
            <li>
              Maintained documentation and supply tracking for the Flavours
              division.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
