import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate Full Stack Developer
          </h2>
          <p className="section-description">
            I'm a dedicated developer with a passion for creating exceptional
            digital experiences. With expertise in both frontend and backend
            technologies, I bring ideas to life through clean code and innovative
            solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>Who I Am</h3>
            <p>
              I'm Ghanshyam Mali, a Full Stack Developer with 1.5 years of experience,
              skilled in React, Next.js, Node.js, SQL/NoSQL databases, REST APIs,
              AWS deployment, and CI/CD pipelines. I have a strong focus on responsive
              UI development, reusable component architecture, performance optimization,
              and delivering scalable solutions across the full software development lifecycle.
            </p>
            <p>
              Currently working as an Associate Software Developer at NeoSOFT Technology,
              I specialize in building full-stack applications for payment aggregator and
              pharma platforms. My expertise includes implementing RBAC, modular architecture,
              and creating reusable component libraries that significantly reduce development
              time and improve code quality.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30%</span>
                <span className="stat-label">UI Efficiency Gain</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">35%</span>
                <span className="stat-label">Performance Improvement</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

