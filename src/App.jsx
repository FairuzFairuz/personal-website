import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Landing from "./components/Landing.jsx";
import Work from "./components/Work.jsx";
import "./App.css";
import Project from "./components/Projects.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
