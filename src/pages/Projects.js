// src/pages/Projects.js
import { image } from "framer-motion/client";
import { useState } from "react";

const categories = ["All", "Web Development", "AR/VR", "Data Science"];

const projects = [
  // Web Development
  {
    title: "Portfolio Website",
    description: "Designed and deployed a personal portfolio website with responsive design principles.",
    image: "/images/portfolio.png",
    category: "Web Development",
    link: "https://eceyavuzportfolio.netlify.app/"
  },
  {
    title: "CRM Database Management Website",
    description: "Interactive CRM database visualization tool built with Flask and MySQL.",
    image: "/images/crm.png",
    category: "Web Development",
    link: "https://www.canva.com/design/DAGFrfUtf9E/JKd1yhIgs2lKyVFE_xDBmw/edit?utm_content=DAGFrfUtf9E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    title: "Community Service Request Website",
    description: "Digital platform enabling community members to request assistance from METU students.",
    image: "/images/solidarity.png",
    category: "Web Development",
    link: "#"
  },

  // AR/VR
  {
    title: "Occupational Health & Safety VR Simulation",
    description: "Unity-based simulation focusing on MRI magnetic force hazard awareness and safety.",
    image: "/images/unity.png",
    category: "AR/VR",
    link: "#"
  },
  {
    title: "METUVERSE Campus Project",
    description: "Digital twin of METU campus using Blender, Figma, and Unreal Engine.",
    image: "/images/metuverse.png",
    category: "AR/VR",
    link: "https://www.linkedin.com/company/metuversecampus/about/"
  },

  // Data Science
  {
    title: "Educational Dataset Classification",
    description: "Machine learning models for predicting outcomes in educational datasets.",
    image: "/images/collab.png",
    category: "Data Science",
    link: "https://colab.research.google.com/drive/1ab54PFECsioFck_sPN8MU7ifnQNgxOFR?usp=sharing"
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>

      {/* Category filter */}
      <div className="projects-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="projects-grid">
        {filteredProjects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="project-content">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
