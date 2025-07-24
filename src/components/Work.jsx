import React from "react";
import "./styles.css";

const Work = () => {
  return (
    <section id="work" className="work-section">
      <h2 className="section-title">What I've Been Up To</h2>
      <div className="work-timeline">
        <div className="work-item">
          <h3>Aerosol Research Engineer - Associate</h3>
          <p className="work-meta">
            Vectura Fertin Pharma Laboratories
            <br />
            Dec 2023 – Mar 2025
          </p>
          <p className="work-description">
            <ul>
              <li>
                Led the development, assessment and implementation of technical
                alternatives and improvements for aerosol characterization,
                systems and processes.
              </li>
              <li>
                Led the aerosol research initiative to coordinate and oversee
                aerosol generation and characterization, ensuring compliance
                with specified regulations set forth by study directors.
              </li>
              <li>
                Led data analysis, troubleshooting, root cause determination and
                implementation of changes to achieve aerosol quality and
                compliance.
              </li>
              <li>
                Acted as a subject matter expert by writing and reviewing
                technical reports, conducting literature reviews, and serving as
                the primary contact for both external and internal stakeholders
                during GLP audits, which enhanced communication and compliance.
              </li>
              <li>
                Conducted internal audits across departments, enhancing
                compliance and operational efficiency within the organization.
              </li>
              <li>
                Authored and conducted training for standard operating
                procedures and work instructions, enhancing team compliance and
                operational efficiency.
              </li>
              <li>
                Served as the EHS&S representative for the department,
                completing certified training in 'WSH Safety Committee Training'
                and 'Develop a Risk Management Implementation Plan', enhancing
                workplace safety and risk management practices.
              </li>
            </ul>
          </p>
        </div>

        <div className="work-item">
          <h3>Senior Research Associate</h3>
          <p className="work-meta">
            Vectura Fertin Pharma Laboratories (previously Philip Morris
            International Research Laboratories)
            <br />
            Jun 2016 - Dec 2023
          </p>
          <p className="work-description">
            <ul>
              <li>
                Formulated and executed comprehensive scientific project plans,
                resulting in timely delivery of project solutions through
                effective management of deliverables, schedules, and resource
                allocation.
              </li>
              <li>
                Maintained comprehensive and up-to-date documentation, and
                conducted audits of work instructions and procedural forms
                related to aerosol generation workflows. These efforts
                contributed to enhanced process efficiency and ensured alignment
                with regulatory standards.
              </li>
              <li>
                Conducted training and technology transfer for various aerosol
                generation workflows, resulting in improved understanding and
                efficiency in the creation of Bill of Materials (BOM) for
                complex aerosol generation setups.
              </li>
            </ul>
          </p>
        </div>
        <div className="work-item">
          <h3>Lab Technician</h3>
          <p className="work-meta">
            Symrise Asia Pacific
            <br />
            Jan 2014 - Jun 2016
          </p>
          <p className="work-description">
            <ul>
              <li>
                Coordinated with lab compounders to process raw material
                requirements, resulting in improved efficiency for various labs.
              </li>
              <li>
                Collaborated with flavorists to compound multiple raw beverage
                flavors, enhancing product diversity and consumer appeal.
              </li>
              <li>
                Organized and maintained documentation of lab activities and
                supplies for multiple labs in the Flavours division, enhancing
                operational efficiency and ensuring compliance.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
