import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiBook, FiCalendar, FiMapPin, FiDownload } from 'react-icons/fi';
import './Resume.css';

const Resume = ({ resume }) => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = resume.filter(item => item.type === 'experience');
  const education = resume.filter(item => item.type === 'education');

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const currentItems = activeTab === 'experience' ? experiences : education;

  return (
    <section id="resume" className="section resume-section">
      <div className="grid-pattern"></div>
      <div className="bg-glow resume-glow"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mono">02. Resume</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            A timeline of my professional experience and educational background.
          </p>
        </motion.div>

        <motion.div 
          className="resume-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="resume-tabs">
            <button 
              className={`resume-tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FiBriefcase />
              Experience
            </button>
            <button 
              className={`resume-tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FiBook />
              Education
            </button>
          </div>

          <a href="/resume.pdf" className="btn btn-secondary download-btn" download>
            <FiDownload />
            Download CV
          </a>
        </motion.div>

        <div className="resume-timeline">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 20 }}
              className="timeline-items"
            >
              {currentItems.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {index < currentItems.length - 1 && <div className="marker-line"></div>}
                  </div>
                  
                  <div className="timeline-content card">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-org">{item.organization}</p>
                      </div>
                      <div className="timeline-meta">
                        <span className="meta-badge">
                          <FiCalendar size={14} />
                          {formatDate(item.start_date)} — {formatDate(item.end_date)}
                        </span>
                        {item.location && (
                          <span className="meta-badge">
                            <FiMapPin size={14} />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="timeline-description">{item.description}</p>
                    
                    {item.skills && item.skills.length > 0 && (
                      <div className="timeline-skills">
                        {item.skills.map((skill, i) => (
                          <span key={i} className="tag">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className="skills-overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="skills-title">Skills & Technologies</h3>
          <div className="skills-grid">
            {['PHP', 'Java', 'JavaScript', 'React.js', 'HTML', 'CSS', 'Laravel', 'MySQL', 'Supabase', 'RESTful API', 'Git', 'GitHub', 'Vercel', 'Figma', 'VS Code'].map((skill, index) => (
              <motion.div 
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
