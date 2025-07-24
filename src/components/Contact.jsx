import React from "react";
import "./styles.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-info">
        <p>
          <MdEmail className="contact-icon" />
          <a href="mailto:ahmadfairuz2312@gmail.com">
            ahmadfairuz2312@gmail.com
          </a>
        </p>

        <p>
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/ahmadfairuzomar"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ahmadfairuzomar
          </a>
        </p>

        <p>
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/FairuzFairuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/FairuzFairuz
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
