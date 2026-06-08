import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeInUp, viewport } from '../utils/animations';
import './Projects.css';

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

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Pokedex Platform',
      description:
        'Built a full-stack Pokédex platform using Next.js, TypeScript and NestJS with PostgreSQL, implementing secure JWT authentication with refresh token flow for protected user sessions. Integrated an open-source Pokémon API using automated scheduled cron jobs to fetch and normalize data, achieving 99.9% data consistency and eliminating manual synchronization effort. Designed a scalable and responsive UI with debounced search and reusable Material UI components, improving search performance by ~30% and reducing repetitive UI development by ~40%. Deployed the platform on Render with a full CI/CD pipeline, ensuring smooth deployments, backend integration, and stable production performance with persistent PostgreSQL storage.',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Pokedex+Platform',
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'Material UI', 'JWT Authentication', 'CI/CD'],
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
                <motion.div
                  className="project-image"
                  animate={hoveredIndex === index ? { scale: 1.02 } : { scale: 1 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={hoveredIndex === index ? { scale: 1.12 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="project-links"
                      initial="hidden"
                      animate={hoveredIndex === index ? 'visible' : 'hidden'}
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                      }}
                    >
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="GitHub"
                          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="Live Demo"
                          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="project-content"
                  animate={hoveredIndex === index ? { y: -4 } : { y: 0 }}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <motion.div
                    className="project-technologies"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
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
