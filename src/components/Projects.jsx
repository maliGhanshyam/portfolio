import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaNodeJs, FaLock, FaKey, FaClock, FaPlug, FaGlobe } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiMaterialdesign,
  SiRender,
  SiGithubactions,
} from 'react-icons/si';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeInUp, viewport } from '../utils/animations';
import './Projects.css';

const POKEDEX_IMAGE = `${import.meta.env.BASE_URL}image.png`;

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
      title: 'Pokedex Platform',
      highlights: [
        'Built a full-stack Pokédex application with Next.js, TypeScript, and NestJS, implementing JWT authentication with refresh token rotation for secure user sessions across 500+ registered users.',
        'Integrated a third-party Pokémon REST API using Node.js cron jobs for automated data synchronization and normalization, achieving 99.9% data consistency and eliminating manual updates for 1,000+ Pokémon records.',
        'Developed a responsive, scalable UI with debounced search, reusable Material UI components, and modular architecture—improving search performance by ~30% and reducing redundant component code by ~40%.',
        'Deployed a production-ready application on Render with an automated CI/CD pipeline, PostgreSQL persistence, environment-based configuration, and stable backend integration for reliable production performance.',
      ],
      image: POKEDEX_IMAGE,
      techStack: [
        {
          category: 'Frontend',
          items: [
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'Material UI', icon: SiMaterialdesign, color: '#007FFF' },
          ],
        },
        {
          category: 'Backend',
          items: [
            { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'REST API', icon: FaPlug, color: '#6366f1' },
            { name: 'Cron Jobs', icon: FaClock, color: '#22c55e' },
          ],
        },
        {
          category: 'Database & Auth',
          items: [
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
            { name: 'Env Config', icon: SiGithubactions, color: '#8b5cf6' },
          ],
        },
      ],
      github: 'https://github.com',
      live: 'https://pokedex-nextjs.onrender.com/',
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
          description="A collection of projects showcasing my skills and expertise in web development"
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
                  <img src={project.image} alt={project.title} />
                </div>
                <motion.div
                  className="project-content"
                  animate={hoveredIndex === index ? { y: -4 } : { y: 0 }}
                >
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <ProjectActions github={project.github} live={project.live} />
                  </div>
                  <ul className="project-highlights">
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
