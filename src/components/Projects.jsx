import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaNodeJs, FaLock, FaKey, FaClock, FaPlug, FaGlobe, FaRobot, FaShieldAlt } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRender,
  SiGithubactions,
  SiZod,
} from 'react-icons/si';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeInUp, viewport } from '../utils/animations';
import './Projects.css';

const POKEDEX_IMAGE = `${import.meta.env.BASE_URL}image.png`;
const VENTURELENS_IMAGE = `${import.meta.env.BASE_URL}venturelens.png`;

const ProjectImage = ({ project }) => {
  if (project.image) {
    return <img src={project.image} alt={project.title} />;
  }

  return (
    <div className="project-image-fallback" style={{ background: project.imageGradient }}>
      <span className="project-image-fallback-title">{project.title}</span>
      {project.imageSubtitle && (
        <span className="project-image-fallback-subtitle">{project.imageSubtitle}</span>
      )}
    </div>
  );
};

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

const ProjectActions = ({ github, live }) => {
  if (!github && (!live || live === '#')) return null;

  return (
    <div className="project-actions">
      {github && (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn project-action-github"
          aria-label="View GitHub repository"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaGithub className="project-action-icon" aria-hidden="true" />
          <span className="project-action-text">
            <span className="project-action-label">Source Code</span>
            <span className="project-action-sublabel">GitHub Repository</span>
          </span>
        </motion.a>
      )}
      {live && live !== '#' && (
        <motion.a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action-btn project-action-live"
          aria-label="Open live demo"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaGlobe className="project-action-icon" aria-hidden="true" />
          <span className="project-action-text">
            <span className="project-action-label">Live Demo</span>
            <span className="project-action-sublabel">View deployed app</span>
          </span>
          <FaExternalLinkAlt className="project-action-arrow" aria-hidden="true" />
        </motion.a>
      )}
    </div>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'VentureLens',
      image: VENTURELENS_IMAGE,
      imageSubtitle: 'AI-Powered Startup Validation SaaS',
      imageGradient: 'linear-gradient(135deg, #0f4c81 0%, #312e81 45%, #7c2d12 100%)',
      highlights: [
        'Production B2B SaaS where founders onboard tenants, submit ideas, and receive AI-generated validation reports — market analysis, SWOT, risk heatmaps, scores, MVP roadmaps, and 90-day GTM plans.',
        'Multi-tenant backend with request-scoped isolation, JWT auth (httpOnly cookies), four-tier RBAC, CSRF protection, rate limiting, and tenant-scoped repositories that prevent cross-tenant data leaks.',
        'Async BullMQ + Redis worker pipeline orchestrates LLM jobs via OpenRouter with Zod-validated JSON output, 3-tier caching, deduplication, and per-tenant AI quotas to control cost and abuse.',
        'Shipped a Next.js dashboard, public marketing site, and anonymous AI chat copilot — deployed on Render with MongoDB Atlas and hardened across 40+ frontend modules.',
      ],
      techStack: [
        {
          category: 'Frontend',
          items: [
            { name: 'Next.js 15', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
          ],
        },
        {
          category: 'Backend',
          items: [
            { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
            { name: 'BullMQ', icon: FaClock, color: '#f59e0b' },
            { name: 'REST API', icon: FaPlug, color: '#6366f1' },
            { name: 'OpenRouter', icon: FaRobot, color: '#22c55e' },
          ],
        },
        {
          category: 'Data & Security',
          items: [
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D' },
            { name: 'JWT Auth', icon: FaLock, color: '#f59e0b' },
            { name: 'RBAC', icon: FaShieldAlt, color: '#a78bfa' },
            { name: 'Zod', icon: SiZod, color: '#3B82F6' },
          ],
        },
        {
          category: 'DevOps',
          items: [
            { name: 'Render', icon: SiRender, color: '#46E3B7' },
            { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
          ],
        },
      ],
      live: 'https://venturelens-dhqq.onrender.com',
      featured: true,
    },
    {
      title: 'PokeDex Platform',
      highlights: [
        'Full-stack Pokédex built with Next.js 14 (App Router) and a NestJS REST API — MongoDB and PostgreSQL on the backend, TypeScript end to end.',
        'Secure sessions with JWT auth, HttpOnly cookies, refresh tokens, and CORS — plus a guest mode with per-feature limits and automatic cleanup on logout.',
        'Interactive battle simulator, Pokémon comparison, team analyzer, favorites, and battle history — synced with PokéAPI and live pagination.',
        'Deployed frontend and backend as separate Render services in a monorepo with MongoDB Atlas and environment-based production builds.',
      ],
      image: POKEDEX_IMAGE,
      techStack: [
        {
          category: 'Frontend',
          items: [
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
          ],
        },
        {
          category: 'Backend',
          items: [
            { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'REST API', icon: FaPlug, color: '#6366f1' },
          ],
        },
        {
          category: 'Database & Auth',
          items: [
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
            { name: 'JWT Auth', icon: FaLock, color: '#f59e0b' },
            { name: 'Refresh Tokens', icon: FaKey, color: '#a78bfa' },
          ],
        },
        {
          category: 'DevOps',
          items: [
            { name: 'Render', icon: SiRender, color: '#46E3B7' },
            { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
          ],
        },
      ],
      live: 'https://pokedex-nextjs.onrender.com',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects">
      <FloatingOrbs />
      <motion.div className="container">
        <AnimatedSectionHeader
          tag="Portfolio"
          title="Featured Projects"
          description="Selected builds that show how I approach SaaS architecture, AI integrations, and production-ready full-stack delivery"
        />

        <motion.div
          className="projects-grid"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project, index) => (
            <TiltCard
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <motion.div
                variants={fadeInUp}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="project-image">
                  <ProjectImage project={project} />
                </div>
                <motion.div
                  className="project-content"
                  animate={hoveredIndex === index ? { y: -4 } : { y: 0 }}
                >
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <ProjectActions github={project.github} live={project.live} />
                  </div>
                  <ul className="site-list project-highlights">
                    {(project.highlights || [project.description]).filter(Boolean).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="project-tech-stack">
                    <span className="project-tech-label">Tech Stack</span>
                    {(project.techStack || []).map((group) => (
                      <div key={group.category} className="project-tech-group">
                        <span className="tech-group-label">{group.category}</span>
                        <motion.div
                          className="project-technologies"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.04 } },
                          }}
                        >
                          {group.items.map((tech) => (
                            <motion.span
                              key={tech.name}
                              className="tech-tag"
                              style={{
                                '--tag-color': tech.color,
                                borderColor: `${tech.color}44`,
                              }}
                              variants={{
                                hidden: { opacity: 0, scale: 0.85 },
                                visible: { opacity: 1, scale: 1 },
                              }}
                              whileHover={{ scale: 1.06, y: -2 }}
                            >
                              <tech.icon className="tech-tag-icon" aria-hidden="true" />
                              {tech.name}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
