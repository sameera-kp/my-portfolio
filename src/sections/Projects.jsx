import React from 'react';

const projects = [
  {
    title: "Nexus Commerce Engine",
    tech: "Next.js 15, GraphQL, Tailwind",
    desc: "A high-performance commerce platform built with the latest Next.js 15 features for optimized data fetching and mobile-first responsiveness.",
    githubLink: "https://github.com/sameera-kp/nexus-commerce-engine.git" 
  },
  {
    title: "HealthTrack Pro",
    tech: "React, Prisma, PostgreSQL",
    desc: "A comprehensive medical records management system focusing on secure data handling and real-time appointment scheduling.",
    githubLink: "https://github.com/sameera-kp/health-track-pro.git"
  },
  {
    title: "Next.js E-commerce (App Router)",
    tech: "Next.js, Redux, App Router",
    desc: "A full-featured e-commerce storefront implementing advanced search, product filtering, and optimized dynamic routing.",
    githubLink: "https://github.com/sameera-kp/Next.js-app-router-ecommerce-app.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="single-project-card">
            <div className="card-top">
              <h3>{project.title}</h3>
              <p className="tech-tag"><strong>Tech Stack:</strong> {project.tech}</p>
              <p className="project-desc">{project.desc}</p>
            </div>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-btn"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;