import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Work from "./Work";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/work">Work</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
