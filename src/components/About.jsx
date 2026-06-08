import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import CountUp from './CountUp';
import FloatingOrbs from './FloatingOrbs';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from '../utils/animations';
import './About.css';

const features = [
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code following best practices and design patterns.',
  },
  {
    icon: FaRocket,
    title: 'Fast Development',
    description: 'Delivering high-quality solutions quickly with modern tools and frameworks.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Solutions',
    description: 'Creating unique and creative solutions to complex problems.',
  },
];

const stats = [
  { value: 1.5, suffix: '+', label: 'Years Experience', decimals: 1 },
  { value: 30, suffix: '%', label: 'UI Efficiency Gain' },
  { value: 35, suffix: '%', label: 'Performance Improvement' },
];

const listStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const About = () => (
  <section id="about" className="about">
    <FloatingOrbs />
    <motion.div
      className="decorative-circle decorative-circle-1"
      aria-hidden="true"
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="decorative-circle decorative-circle-2"
      aria-hidden="true"
      animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />

    <div className="container">
      <AnimatedSectionHeader
        tag="About Me"
        title="Passionate Full Stack Developer"
        description="I'm a dedicated developer with a passion for creating exceptional digital experiences. With expertise in both frontend and backend technologies, I bring ideas to life through clean code and innovative solutions."
      />

      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer(0.2)}
      >
        <motion.div className="about-text" variants={fadeInLeft}>
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h3 variants={fadeInUp}>Who I Am</motion.h3>
            <motion.p variants={fadeInUp}>
              I'm Ghanshyam Mali, a Full Stack Developer with 1.5 years of experience,
              skilled in React, Next.js, Node.js, SQL/NoSQL databases, REST APIs,
              AWS deployment, and CI/CD pipelines. I have a strong focus on responsive
              UI development, reusable component architecture, performance optimization,
              and delivering scalable solutions across the full software development lifecycle.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Currently working as an Associate Software Developer at NeoSOFT Technology,
              I specialize in building full-stack applications for payment aggregator and
              pharma platforms. My expertise includes implementing RBAC, modular architecture,
              and creating reusable component libraries that significantly reduce development
              time and improve code quality.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span className="stat-number">
                  <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="about-features" variants={fadeInRight}>
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(99,102,241,0.55)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              >
                <motion.div
                  className="feature-icon"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <feature.icon />
                </motion.div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
