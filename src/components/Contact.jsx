import React from "react";
import "./styles.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="projects-section">
      <h2 className="section-title">Digital Footprint</h2>
      <div className="projects-grid">
        {/* Email Card */}
        <div className="project-card contact-card">
          <div className="contact-header">
            <div className="contact-title-icon">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <h3 className="contact-title">Email</h3>
            </div>
          </div>
          <p className="project-description">
            Reach out to me directly via email for collaboration, questions, or
            just to say hi!
          </p>
          <a href="mailto:ahmadfairuz2312@gmail.com" className="contact-button">
            Send Email
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="project-card contact-card">
          <div className="contact-header">
            <div className="contact-title-icon">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <h3 className="contact-title">LinkedIn</h3>
            </div>
          </div>
          <p className="project-description">
            Connect with me professionally and explore my journey from
            engineering to tech.
          </p>
          <a
            href="https://www.linkedin.com/in/ahmadfairuzomar"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Visit LinkedIn
          </a>
        </div>

        {/* GitHub Card */}
        <div className="project-card contact-card">
          <div className="contact-header">
            <div className="contact-title-icon">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <h3 className="contact-title">GitHub</h3>
            </div>
          </div>
          <p className="project-description">
            Browse my projects, contributions, and code experiments on GitHub.
          </p>
          <a
            href="https://github.com/FairuzFairuz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
