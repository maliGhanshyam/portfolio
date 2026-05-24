import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import ParticleBackground from './ParticleBackground';
import DeveloperIllustration from './DeveloperIllustration';
import { staggerContainer, fadeInUp } from '../utils/animations';
import './Hero.css';

const CODE_LINES = [
  <>
    <span className="code-keyword">const</span>{' '}
    <span className="code-variable">developer</span> = {'{'}
  </>,
  <>
    <span className="code-property">name:</span>{' '}
    <span className="code-string">'Ghanshyam Mali'</span>,
  </>,
  <>
    <span className="code-property">mode:</span>{' '}
    <span className="code-string">'building cool products'</span>,
  </>,
  <> {'}'};</>,
];

const codeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const HeroVisual = ({ parallax }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 480);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      className="hero-visual-card"
      initial={{ opacity: 0.92, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ boxShadow: '0 24px 70px rgba(99,102,241,0.25)' }}
    >
      <div className="code-header">
        <span className="code-dot red" />
        <span className="code-dot yellow" />
        <span className="code-dot green" />
        <span className="code-filename">dashboard.jsx</span>
      </div>
      <motion.div
        className="code-body code-body-compact"
        variants={codeStagger}
        initial="hidden"
        animate="visible"
      >
        {CODE_LINES.slice(0, visibleLines).map((line, li) => (
          <motion.div
            key={li}
            className="code-line"
            variants={fadeInUp}
          >
            {line}
          </motion.div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <span className={`code-cursor ${showCursor ? 'visible' : ''}`}>|</span>
        )}
      </motion.div>
      <DeveloperIllustration parallax={parallax} />
    </motion.div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const name = 'Ghanshyam Mali';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 24,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/ghanshyammali' },
    { icon: FaEnvelope, url: 'mailto:ghanshyams.mali@gmail.com' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <ParticleBackground count={35} />
        <div className="hero-grid" />
        <motion.div
          className="hero-gradient hero-gradient-1"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="hero-gradient hero-gradient-2"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="hero-container"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={fadeInUp}>
          <motion.div
            className="hero-badge"
            variants={fadeInUp}
            whileHover={{ scale: 1.04, borderColor: 'rgba(129,140,248,0.6)' }}
          >
            <motion.span
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
            >
              <HiCode className="badge-icon" aria-hidden="true" />
            </motion.span>
            <span>Full Stack Developer</span>
            <span className="badge-dot" />
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            <motion.span
              className="gradient-text"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              {name}
            </motion.span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Full Stack Developer with 1.5 years of experience, skilled in React,
            Next.js, Node.js, SQL/NoSQL databases, REST APIs, AWS deployment,
            and CI/CD pipelines. Passionate about building scalable solutions
            and delivering high-performance applications.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeInUp}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 32px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -3, borderColor: '#a5b4fc' }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload aria-hidden="true" /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={fadeInUp}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.url}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0.9, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual parallax={mousePosition} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
