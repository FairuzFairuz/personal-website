import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> ahmadfairuz2312@gmail.com
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/ahmadfairuzomar"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ahmadfairuzomar
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
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
