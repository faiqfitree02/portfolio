import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'AI Chatbot Certification Completed',
    issuer: 'Nebula Ventures Sdn. Bhd.',
    description:
      'Certification focused on AI chatbot fundamentals, AI-driven communication, and practical chatbot implementation.',
    focus: ['AI Chatbots', 'Communication', 'Implementation']
  },
  {
    id: 2,
    title: 'Laravel Intermediate Training Program',
    issuer: 'KOKUIS BHD / TARSOFT SDN BHD',
    description:
      'Completed intermediate Laravel training focused on modern web application development.',
    focus: ['Laravel', 'Web Development', 'Backend']
  },
  {
    id: 3,
    title: 'BlackBerry Security Awareness Training',
    issuer: 'MCMC & BlackBerry Cybersecurity Center of Excellence | Online',
    description:
      'Completed online cybersecurity awareness training covering security fundamentals and user awareness.',
    focus: ['Cybersecurity', 'Security Awareness', 'Online Training']
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
    <section id="certifications" className="section certifications-section">
      <div className="grid-pattern"></div>
      <div className="bg-glow certifications-glow"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mono">03. Certifications</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Training and certifications that strengthen my foundation in AI, web development, and cybersecurity.
          </p>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.id}
              className="certification-card card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="certification-icon">
                <FiAward size={24} />
              </div>

              <div className="certification-content">
                <h3 className="certification-title">{certification.title}</h3>
                <p className="certification-issuer">{certification.issuer}</p>
                <p className="certification-description">
                  <FiCheckCircle size={16} />
                  {certification.description}
                </p>
              </div>

              <div className="certification-tags">
                {certification.focus.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
