import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaRocket, FaShieldAlt } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import CountUp from './CountUp';
import Magnetic from './Magnetic';
import FloatingOrbs from './FloatingOrbs';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from '../utils/animations';
import './About.css';

const summaryBullets = [
  'Full Stack Developer with 3+ years building scalable multi-tenant SaaS and enterprise web applications.',
  'Proficient in React.js, Next.js, NestJS, Node.js, PostgreSQL, and MongoDB.',
  'Expertise in REST APIs, JWT authentication, RBAC, tenant isolation, and AWS (EC2/S3) deployments.',
  'Performance optimization through MongoDB indexing, API caching, and query optimization.',
  'Docker, CI/CD pipelines, and automated testing for production-ready delivery.',
  'Currently at e-InnoSec Consulting LLC — developing SaaS platforms supporting 10,000+ users.',
  'Previously at NeoSOFT Technology — payment aggregation, Stripe integration, and reusable React libraries (20% less duplication, ~50% faster deployments).',
];

const features = [
  {
    icon: FaCloud,
    title: 'Multi-Tenant SaaS',
    bullets: [
      'NestJS + Next.js + MongoDB with tenant isolation and audit logging',
      'RBAC across 100+ tenant environments',
      'Platforms supporting 10,000+ users',
    ],
  },
  {
    icon: FaRocket,
    title: 'Performance & Optimization',
    bullets: [
      'MongoDB indexing, API caching, and query optimization',
      'Lazy loading and memoization for faster UI',
      '35–50% faster API responses and ~40% faster page loads',
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Security & DevOps',
    bullets: [
      'JWT authentication with refresh tokens and RBAC',
      'Docker containerization and Jenkins CI/CD',
      'AWS (EC2/S3) deployments with 95%+ API test coverage',
    ],
  },
];

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience', decimals: 0 },
  { value: 10, suffix: 'K+', label: 'Users Supported' },
  { value: 95, suffix: '%+', label: 'API Test Coverage' },
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
        description="I build scalable multi-tenant SaaS and enterprise web applications—from database schema design to production-ready dashboards."
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
            <motion.ul className="site-list about-summary" variants={fadeInUp}>
              {summaryBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </motion.ul>
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
            className="about-features-list"
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {features.map((feature) => (
              <Magnetic key={feature.title} block strength={0.18}>
                <motion.div
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
                    <feature.icon aria-hidden="true" />
                  </motion.div>
                  <h4>{feature.title}</h4>
                  <ul className="site-list feature-list">
                    {feature.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
