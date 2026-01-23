import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiGlobe, 
  FiInstagram, 
  FiYoutube,
  FiMail,
  FiExternalLink,
  FiDribbble,
  FiCodepen
} from 'react-icons/fi';
import './Links.css';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  globe: FiGlobe,
  instagram: FiInstagram,
  youtube: FiYoutube,
  mail: FiMail,
  dribbble: FiDribbble,
  codepen: FiCodepen,
  default: FiExternalLink
};

const Links = ({ links }) => {
  const getIcon = (iconName) => {
    const Icon = iconMap[iconName?.toLowerCase()] || iconMap.default;
    return <Icon size={24} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="links" className="section links-section">
      <div className="grid-pattern"></div>
      <div className="bg-glow links-glow"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="links-header"
        >
          <span className="section-label mono">04. Connect</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Find me on these platforms or reach out directly. I'm always open to discussing new opportunities, creative ideas, or just having a chat.
          </p>
        </motion.div>

        <motion.div 
          className="links-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                '--link-color': link.color || 'var(--accent)'
              }}
            >
              <div className="link-icon">
                {getIcon(link.icon)}
              </div>
              <div className="link-content">
                <span className="link-title">{link.title}</span>
                <span className="link-url">{link.url?.replace(/^https?:\/\//, '').split('/')[0]}</span>
              </div>
              <FiExternalLink className="link-arrow" size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="contact-content">
            <h3 className="contact-title">Have a project in mind?</h3>
            <p className="contact-description">
              I'm currently available for freelance work and exciting opportunities. Let's create something amazing together!
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:faiqramli123@gmail.com" className="btn btn-primary">
              <FiMail />
              Send Email
            </a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Links;
