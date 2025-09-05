// src/pages/About.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-container">
      <h1>About Me.</h1>

      {/* Frontend Development & Design */}
      <div className="about-section">
        <div className="about-heading">
          <h2>Frontend Development & Design</h2>
          <a
            href="https://github.com/Ece182"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            <FaGithub /> View GitHub
          </a>
        </div>
        <p className="about-description">
          The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design.
          I specialize in creating sleek, responsive, and user-friendly websites that go beyond aesthetics to deliver seamless functionality.
          Leveraging my expertise in HTML5, CSS, JavaScript, and React.js, I merge technical problem-solving skills with an eye for design,
          ensuring every project meets modern web standards and creates a lasting impact.
        </p>
      </div>

      {/* AR/VR Development */}
      <div className="about-section">
        <div className="about-heading">
          <h2>AR/VR Development</h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            View Project
          </a>
        </div>
        <p className="about-description">
          I create immersive, interactive environments using Unity and Unreal Engine. My AR/VR work includes occupational safety
          training simulations and digital campus twins, combining 3D modeling, UX design, and Agile project management to deliver
          engaging virtual learning experiences.
        </p>
      </div>

      {/* Data Science */}
      <div className="about-section">
        <div className="about-heading">
          <h2>Data Science</h2>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            View Project
          </a>
        </div>
        <p className="about-description">
          My data science projects involve developing predictive machine learning models for educational datasets using Python, NumPy,
          and Pandas. I enjoy extracting actionable insights from complex datasets and using data-driven approaches to solve
          real-world problems.
        </p>
      </div>

      {/* IT Project Management */}
      <div className="about-section">
        <div className="about-heading">
          <h2>IT Project Management</h2>
          <a
            href="https://linkedin.com/in/eceyavuz"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <p className="about-description">
          I have led cross-functional teams in delivering complex technology projects, applying Agile methodologies to manage
          timelines, refine backlogs, and coordinate resources. My leadership style emphasizes collaboration, adaptability,
          and delivering measurable results while maintaining a high standard of quality.
        </p>
      </div>
    </section>
  );
};

export default About;
