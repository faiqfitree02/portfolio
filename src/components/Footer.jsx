import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-text">F</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h4 className="footer-nav-title">Navigation</h4>
              <a href="#home">Home</a>
              <a href="#resume">Resume</a>
              <a href="#projects">Projects</a>
              <a href="#links">Contact</a>
            </div>

            <div className="footer-nav">
              <h4 className="footer-nav-title">Connect</h4>
              <a href="https://github.com/faiqfitree02" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/faiqfitri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-social">
            <a 
              href="https://github.com/faiqfitree02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/faiqfitri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {profile?.name || 'Faiq'}. All rights reserved.
          </p>
          <motion.button 
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
