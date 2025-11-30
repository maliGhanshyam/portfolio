import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', color: '#333' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/ghanshyammali', color: '#0077b5' },
    { icon: FaEnvelope, url: 'mailto:ghanshyams.mali@gmail.com', color: '#ea4335' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div
          className="hero-gradient"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <HiCode className="badge-icon" />
            <span>Full Stack Developer</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm{' '}
            <span className="gradient-text">Ghanshyam Mali</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Full Stack Developer with 1.5 years of experience, skilled in React,
            Next.js, Node.js, SQL/NoSQL databases, REST APIs, AWS deployment,
            and CI/CD pipelines. Passionate about building scalable solutions
            and delivering high-performance applications.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="floating-shapes">
            <div className="shape shape-1" />
            <div className="shape shape-2" />
            <div className="shape shape-3" />
          </div>
          <div className="code-snippet">
            <div className="code-line">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">developer</span> = {'{'}
            </div>
            <div className="code-line">
              <span className="code-property">name:</span>{' '}
              <span className="code-string">'Ghanshyam Mali'</span>,
            </div>
            <div className="code-line">
              <span className="code-property">role:</span>{' '}
              <span className="code-string">'Full Stack Developer'</span>,
            </div>
            <div className="code-line">
              <span className="code-property">passion:</span>{' '}
              <span className="code-string">'Creating amazing web apps'</span>
            </div>
            <div className="code-line">{'}'};</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

