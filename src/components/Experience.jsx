import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewport } from '../utils/animations';
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

  return (
    <section id="experience" className="experience">
      <FloatingOrbs />
      <div className="container">
        <AnimatedSectionHeader
          tag="Experience & Education"
          title="My Journey"
          description="Professional experience and educational background that shaped my career"
        />

        <div className="experience-timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${exp.type}`}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <motion.div
                  className="timeline-marker"
                  whileHover={{ scale: 1.08, rotate: 8 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, duration: 0.5 }}
                >
                  {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </motion.div>
                <motion.div
                  className="timeline-content"
                  whileHover={{ x: 12, borderColor: 'rgba(99,102,241,0.5)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="timeline-header"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </motion.div>
                  <motion.div
                    className="timeline-meta"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="timeline-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="timeline-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </motion.div>
                  <ul className="timeline-description">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + itemIndex * 0.05 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
