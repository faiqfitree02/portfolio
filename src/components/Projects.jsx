import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder, FiStar } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="grid-pattern"></div>
      <div className="bg-glow projects-glow"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mono">03. Projects</span>
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">
            A collection of projects I've built with passion and attention to detail.
          </p>
        </motion.div>

        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <FiFolder />
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            <FiStar />
            Featured
          </button>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card card"
                variants={cardVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-container">
                  {project.image_url && (
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                  <div className="project-image-overlay">
                    <div className="project-links">
                      {project.live_url && (
                        <a 
                          href={project.live_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {project.github_url && (
                        <a 
                          href={project.github_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="GitHub"
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">
                      <FiStar size={12} />
                      Featured
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="project-tech">
                      {project.tech_stack.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="project-footer">
                  {project.live_url && (
                    <a 
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-cta"
                    >
                      View Project
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="cta-text">Want to see more?</p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
