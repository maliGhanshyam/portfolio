import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Associate Software Developer',
      company: 'NeoSOFT Technology Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'July 2024 - Present',
      description: [
        'Delivered full-stack application for payment aggregator and pharma platforms using React, Next.js, Node.js, Express, PostgreSQL',
        'Implemented RBAC, modular architecture, and cleaner folder structure, reducing repetitive code by ~15–20%',
        'Built a reusable UI component library, cutting duplicate UI effort by ~30%',
        'Improved performance through lazy loading, memoization, optimized API calls, resulting in smoother page load and reduced API overhead by ~35%',
        'Automated CI/CD with AWS + Jenkins, reducing manual deployment steps by ~40%',
      ],
    },
    {
      type: 'education',
      title: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
      company: 'C-DAC, Mumbai',
      location: 'Mumbai, India',
      period: 'March 2023 - September 2023',
      description: [
        'Percentage: 68.25%',
        'Specialized in Advanced Computing and Software Development',
        'Completed comprehensive training in full-stack development',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering',
      company: 'Savitribai Phule Pune University',
      location: 'Pune, India',
      period: 'June 2015 - June 2018',
      description: [
        'Percentage: 65.00%',
        'Focused on Computer Science and Engineering principles',
      ],
    },
    {
      type: 'education',
      title: 'Diploma in Engineering',
      company: 'Shri. Bhagubhai Mafatlal Polytechnic (An Autonomous Institute)',
      location: 'Mumbai, India',
      period: 'January 2011 - May 2015',
      description: [
        'Percentage: 74.00%',
        'Foundation in Engineering and Technology',
      ],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Experience & Education</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-description">
            Professional experience and educational background that shaped my
            career
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="timeline-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

