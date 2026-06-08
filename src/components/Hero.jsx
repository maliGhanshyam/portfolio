import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import ParticleBackground from './ParticleBackground';
import DeveloperIllustration from './DeveloperIllustration';
import ScrollIndicator from './ScrollIndicator';
import GradientBorder from './GradientBorder';
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

const easePro = [0.22, 1, 0.36, 1];

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easePro },
  },
};

const codeLineReveal = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: easePro },
  },
};

const codeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const HeroTitle = ({ name }) => {
  const words = name.split(/\s+/);

  return (
    <h1 className="hero-title" aria-label={name}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="hero-title-word-wrap">
          <motion.span
            className="hero-title-word gradient-text"
            initial={{ y: '108%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.35 + i * 0.14,
              ease: easePro,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
      <motion.span
        className="hero-title-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.75, ease: easePro }}
      />
    </h1>
  );
};

const HeroVisual = ({ parallax }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 620);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 600);
    return () => clearInterval(blink);
  }, []);

  return (
    <GradientBorder
      className="hero-visual-gradient"
      innerClassName="hero-visual-card"
      borderRadius={16}
      animateOn="mount"
      delay={0.55}
      spinDuration={10}
      spinOpacity={0.7}
      whileHover={{ scale: 1.01 }}
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
          <motion.div key={li} className="code-line" variants={codeLineReveal}>
            {line}
          </motion.div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <span className={`code-cursor ${showCursor ? 'visible' : ''}`}>|</span>
        )}
      </motion.div>
      <DeveloperIllustration parallax={parallax} />
    </GradientBorder>
  );
};

const Hero = () => {
  const name = 'Ghanshyam Mali';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/ghanshyammali', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:ghanshyams.mali@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <ParticleBackground count={22} />
        <div className="hero-grid" />
        <motion.div
          className="hero-gradient hero-gradient-1"
          style={{ x: smoothX, y: smoothY }}
        />
        <motion.div
          className="hero-gradient hero-gradient-2"
          animate={{ opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="hero-container"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content">
          <motion.div variants={heroFadeUp}>
            <GradientBorder
              className="hero-badge-gradient"
              innerClassName="hero-badge"
              borderRadius={50}
              animateOn="mount"
              delay={0.1}
              spinDuration={6}
              spinOpacity={0.55}
            >
              <HiCode className="badge-icon" aria-hidden="true" />
              <span>Full Stack Developer</span>
              <motion.span
                className="badge-dot"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </GradientBorder>
          </motion.div>

          <motion.div variants={heroFadeUp}>
            <HeroTitle name={name} />
          </motion.div>

          <motion.div variants={heroFadeUp}>
            <GradientBorder
              className="hero-panel-gradient"
              innerClassName="hero-panel"
              borderRadius={18}
              animateOn="mount"
              delay={0.45}
              spinDuration={12}
              spinOpacity={0.45}
            >
              <p className="hero-subtitle">
                Full Stack Developer with 3+ years of experience, skilled in React,
                Next.js, Node.js, SQL/NoSQL databases, REST APIs, AWS deployment,
                and CI/CD pipelines. Passionate about building scalable solutions
                and delivering high-performance applications.
              </p>

              <div className="hero-buttons">
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  whileHover={{ y: -2, boxShadow: '0 10px 28px rgba(99,102,241,0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: easePro }}
                >
                  View My Work
                  <FaArrowRight className="btn-icon" aria-hidden="true" />
                </motion.a>
                <GradientBorder
                  className="hero-btn-gradient"
                  innerClassName="hero-btn-inner"
                  borderRadius={50}
                  animateOn="mount"
                  delay={0.6}
                  spinDuration={5}
                  spinOpacity={0.75}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.a
                    href="#contact"
                    className="btn btn-secondary btn-in-gradient"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: easePro }}
                  >
                    <FaDownload aria-hidden="true" /> Download Resume
                  </motion.a>
                </GradientBorder>
              </div>
            </GradientBorder>
          </motion.div>

          <motion.div className="hero-social" variants={heroFadeUp}>
            {socialLinks.map((social, index) => (
              <GradientBorder
                key={social.label}
                className="hero-social-gradient"
                innerClassName="hero-social-inner"
                borderRadius={50}
                animateOn="mount"
                delay={1 + index * 0.1}
                spinDuration={7}
                spinOpacity={0.5}
                whileHover={{ scale: 1.06, y: -3 }}
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              </GradientBorder>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.95, ease: easePro }}
        >
          <HeroVisual parallax={mousePosition} />
        </motion.div>
      </motion.div>

      <ScrollIndicator target="#about" />
    </section>
  );
};

export default Hero;
