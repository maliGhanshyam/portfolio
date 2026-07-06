import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';
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
      'Lead a team of 3 full-stack developers and 2 interns while staying hands-on — sprint planning, code reviews, and shipping features on a multi-tenant SaaS platform',
      'Designed RBAC, JWT authentication, tenant isolation, and audit logging from the ground up, securing 10,000+ users across 10+ organizations',
      'Architected the core platform with NestJS, Next.js, MongoDB, and TypeScript, scaling cleanly as new tenants onboard',
      'Built an embeddable JavaScript SDK (script-tag integration) so client sites can capture consent and user data in real time, backed by a self-service dashboard',
      'Cut average API response times by 35–50% through MongoDB indexing, query tuning, and caching strategies',
      'Own deployments across dev, demo, and production on AWS with Docker, PM2, and CI/CD pipelines',
    ],
  },
  {
    title: 'Associate Software Developer',
    company: 'NeoSOFT Technology Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'July 2024 - Jan 2026',
    description: [
      'Shipped a full-stack payment aggregation platform with Stripe Connect Custom accounts, React, Next.js, Node.js, Express, and PostgreSQL',
      'Designed merchant onboarding flows and dashboards across 6+ regions (US, UK, Japan, Germany, Sweden, and more) with region-specific compliance and payouts',
      'Introduced RBAC and modular architecture — 20% less code duplication and 15% easier to maintain',
      'Created reusable React components, hooks, and utilities that sped up feature work and removed 30% of duplicate UI code',
      'Built complex onboarding and payout forms with React Hook Form/Formik and Yup/Zod validation, cutting form bugs by ~45%',
      'Improved page loads ~40% and lowered API overhead ~35% with lazy loading, memoization, and API caching',
      'Ran CI/CD and releases through AWS, Jenkins, and GitFlow — roughly half the manual deployment time',
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
      'Intensive full-stack and systems programming program',
      'Percentage: 68.25%',
    ],
  },
  {
    title: 'Bachelor of Engineering',
    company: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: 'June 2015 - June 2018',
    description: [
      'Engineering foundation with focus on software and systems',
      'Percentage: 65.00%',
    ],
  },
  {
    title: 'Diploma in Engineering',
    company: 'Shri. Bhagubhai Mafatlal Polytechnic (Autonomous)',
    location: 'Mumbai, India',
    period: 'Jan 2011 - May 2015',
    description: [
      'Early engineering training in technology and applied sciences',
      'Percentage: 74.00%',
    ],
  },
];

const certificationItems = [
  {
    title: 'Scrum Fundamentals Certified (SFC)',
    company: 'SCRUMstudy',
    location: 'Online',
    period: 'Dec 2024',
    description: [
      'Foundational certification in Scrum roles, events, and artifacts',
      'Supports agile delivery practices used across client and product teams',
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

      <TimelineSection
        heading="Certifications"
        items={certificationItems}
        icon={FaCertificate}
        staggerDelay={0.1}
      />
    </div>
  </section>
);

export default Experience;
