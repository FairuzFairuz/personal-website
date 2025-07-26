import React from "react";
import faiLeft from "../assets/fai-left.jpg";
import faiRight from "../assets/fai-right.jpg";
import "../App.css"; //css is stored in App.css

const Landing = () => {
  return (
    <header id="home" className="home-section">
      <div className="main-content">
        <div className="intro-layout">
          <div class="image-wrapper">
            <img src={faiLeft} alt="Fai left" className="profile-pic" />
          </div>
          <div className="intro-text">
            <h1>Ahmad Fairuz Omar</h1>
            <p className="tagline">I traded lab reports for console logs.</p>
            <p className="summary">
              With a background in Mechanical Engineering and nearly a decade in
              pharmaceutical research, I’ve tackled technical investigations,
              built 3D prototypes, and optimized lab workflows in environments
              where every detail mattered and mistakes weren’t just frowned
              upon, they came with paperwork. I’ve worked with strict
              regulations, complex systems, and enough documentation to make a
              printer cry.
              <br />
              <br />
              After completing a software engineering bootcamp (I swapped lab
              gear for keyboard shortcuts and learned coffee pairs surprisingly
              well with semicolons), I pivoted into tech with a focus on
              building user-friendly tools that turn complex ideas into clear,
              intuitive experiences.
              <br />
              <br />
              Whether I’m debugging a stubborn issue or untangling the ripple
              effects of a “quick fix,” I enjoy building tools that stay
              dependable, even when the code gets complicated.
            </p>
            <p className="tagline">
              "Science gave me structure. Tech gave me freedom."
              <br /> ~ Ahmad Fairuz
            </p>
          </div>
          <div class="image-wrapper">
            <img src={faiRight} alt="Fai right" className="profile-pic" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
