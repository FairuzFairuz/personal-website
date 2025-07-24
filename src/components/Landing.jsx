import React from "react";
import faiLeft from "../assets/fai-left.jpg";
import faiRight from "../assets/fai-right.jpg";
import "../App.css"; //css is stored in App.css

const Landing = () => {
  return (
    <header id="home" className="home-section">
      <div className="intro-layout">
        <img src={faiLeft} alt="Fai left" className="profile-pic" />

        <div className="intro-text">
          <h1>Ahmad Fairuz Omar</h1>
          <p className="tagline">I traded lab reports for console logs.</p>
          <p className="summary">
            With a background in Mechanical Engineering and nearly a decade in
            pharmaceutical research, I’ve worked on technical investigations, 3D
            prototyping, and optimizing lab workflows in highly regulated
            environments. It’s been a journey shaped by precision, creativity,
            and more documentation than I care to admit.
            <br />
            <br />
            After completing a software engineering bootcamp, I’ve shifted my
            focus to tech, where I’m interested in building smart, user-friendly
            tools that make complex ideas feel simple. I’m especially drawn to
            modern web development, where clean code and thoughtful design come
            together to create engaging digital experiences.
            <br />
            <br />
            Whether I’m untangling a tricky bug or refining a user interface, I
            enjoy turning ideas into something practical, polished, and
            genuinely useful.
          </p>
          <p className="tagline">
            Science gave me structure. Tech gave me freedom.
          </p>
        </div>

        <img src={faiRight} alt="Fai right" className="profile-pic" />
      </div>
    </header>
  );
};

export default Landing;
