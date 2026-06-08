import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeInLeft, fadeInRight, viewport } from '../utils/animations';
import './Experience.css';

const workExperiences = [
  {
    title: 'Full Stack Developer',
    company: 'e-InnoSec Consulting LLC',
    location: 'Cedar Park, Texas',
    period: 'Jan 2026 - Present',
    description: [
      'Developed and maintained multi-tenant SaaS applications using NestJS, Next.js, MongoDB, and TypeScript, supporting 10,000+ users across multiple tenant organizations',
      'Designed and optimized REST APIs, reducing average response times by 35–50% through efficient MongoDB indexing, query optimization, and caching strategies',
      'Implemented JWT authentication, RBAC, tenant isolation, and audit logging, ensuring secure access control across 100+ tenant environments',
      'Built end-to-end features from database schema design to frontend dashboards, achieving 95%+ API test coverage and improving deployment reliability through Docker and CI/CD pipelines',
    ],
  },
  {
    title: 'Associate Software Developer',
    company: 'NeoSOFT Technology Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'July 2024 - Jan 2026',
    description: [
      'Built and deployed full-stack applications for payment aggregation platform, integrating Stripe payment APIs using React, Next.js, Node.js, Express, and PostgreSQL, supporting 10,000+ concurrent users',
      'Implemented Role-Based Access Control (RBAC) and modular architecture, reducing code duplication by 20% and improving maintainability by 15%',
      'Developed reusable React UI components, hooks, and utilities, eliminating 30% duplicate code and speeding up feature delivery',
      'Built complex forms using React Hook Form / Formik with Yup/Zod validation, reducing form-related bugs by ~45%',
      'Optimized performance using lazy loading, memoization, and API caching, achieving ~40% faster page loads and ~35% lower API overhead',
      'Supported CI/CD pipelines and deployments using AWS, Jenkins, and GitFlow, reducing manual deployment time by ~50%',
      'Worked in Agile/Scrum teams and contributed to unit testing with Jest and React Testing Library (up to ~75% coverage)',
    ],
  },
];

const educationItems = [
  {
    title: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    company: 'C-DAC, Mumbai',
    location: 'Mumbai, India',
    period: 'March 2023 - Sept 2023',
    description: [
      'Percentage: 68.25%',
      'Specialized in Advanced Computing and Software Development',
      'Completed comprehensive training in full-stack development',
    ],
  },
  {
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
    title: 'Diploma in Engineering',
    company: 'Shri. Bhagubhai Mafatlal Polytechnic (Autonomous)',
    location: 'Mumbai, India',
    period: 'Jan 2011 - May 2015',
    description: [
      'Percentage: 74.00%',
      'Foundation in Engineering and Technology',
    ],
  },
];

const TimelineItem = ({ item, index, icon: Icon }) => (
  <motion.div
    className="timeline-item"
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
      <Icon aria-hidden="true" />
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
        <h3 className="timeline-title">{item.title}</h3>
        <span className="timeline-company">{item.company}</span>
      </motion.div>
      <motion.div
        className="timeline-meta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <span className="timeline-period">
          <FaCalendarAlt aria-hidden="true" /> {item.period}
        </span>
        <span className="timeline-location">
          <FaMapMarkerAlt aria-hidden="true" /> {item.location}
        </span>
      </motion.div>
      <ul className="timeline-description">
        {item.description.map((desc, itemIndex) => (
          <motion.li
            key={desc}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + itemIndex * 0.05 }}
          >
            {desc}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const TimelineSection = ({ heading, items, icon, staggerDelay = 0.2 }) => (
  <div className="journey-block">
    <motion.h3
      className="journey-subheading"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5 }}
    >
      {heading}
    </motion.h3>

    <div className="experience-timeline">
      <motion.div
        className="timeline-line"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        variants={staggerContainer(staggerDelay)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {items.map((item, index) => (
          <TimelineItem
            key={`${item.title}-${item.period}`}
            item={item}
            index={index}
            icon={icon}
          />
        ))}
      </motion.div>
    </div>
  </div>
);

const Experience = () => (
  <section id="experience" className="experience">
    <FloatingOrbs />
    <div className="container">
      <AnimatedSectionHeader
        tag="Experience & Education"
        title="My Journey"
        description="Professional experience and educational background that shaped my career"
      />

      <TimelineSection
        heading="Experience"
        items={workExperiences}
        icon={FaBriefcase}
      />

      <TimelineSection
        heading="Education"
        items={educationItems}
        icon={FaGraduationCap}
        staggerDelay={0.15}
      />
    </div>
  </section>
);

export default Experience;
