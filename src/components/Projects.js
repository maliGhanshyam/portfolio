import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A collection of projects showcasing my skills and expertise in web
            development
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

