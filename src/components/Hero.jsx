import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ profile }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="grid-pattern"></div>
      <div className="bg-glow hero-glow-1"></div>
      <div className="bg-glow hero-glow-2"></div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span>
            <span className="mono">Available for work</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="accent">{profile?.name || 'Faiq'}</span>
            <br />
            <span className="hero-role">{profile?.title || 'Full Stack Developer'}</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            {profile?.bio || 'Passionate developer crafting digital experiences that matter.'}
          </motion.p>

          <motion.div className="hero-meta" variants={itemVariants}>
            {profile?.location && (
              <span className="meta-item">
                <span className="meta-icon">📍</span>
                {profile.location}
              </span>
            )}
            {profile?.email && (
              <span className="meta-item">
                <span className="meta-icon">✉️</span>
                {profile.email}
              </span>
            )}
            {profile?.phone && (
              <span className="meta-item">
                <span className="meta-icon">📱</span>
                {profile.phone}
              </span>
            )}
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View My Work
              <FiArrowDown />
            </a>
            <a href="#resume" className="btn btn-secondary">
              <FiDownload />
              Resume
            </a>
            <a href={`mailto:${profile?.email || 'faiqramli123@gmail.com'}`} className="btn btn-secondary">
              <FiMail />
              Contact
            </a>
          </motion.div>



        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="avatar-container">
            <div className="avatar-ring"></div>
            <div className="avatar-ring avatar-ring-2"></div>
            <img 
              src={profile?.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Faiq'} 
              alt={profile?.name || 'Faiq'}
              className="avatar-image"
            />
          </div>
          <div className="floating-elements">
            <motion.div 
              className="floating-card floating-card-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="mono">{'<React />'}</span>
            </motion.div>
            <motion.div 
              className="floating-card floating-card-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="mono">{'Node.js'}</span>
            </motion.div>
            <motion.div 
              className="floating-card floating-card-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="mono">{'Supabase'}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={20} />
        </motion.div>
        <span className="mono">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
