import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaJava,
  FaCode,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMaterialdesign,
  SiJenkins,
  SiPostman,
  SiSpring,
  SiDocker,
  SiGithub,
} from 'react-icons/si';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#ffffff' },
      { name: 'Redux', icon: SiRedux, level: 85, color: '#764ABC' },
      { name: 'Material UI', icon: SiMaterialdesign, level: 85, color: '#007FFF' },
      { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
      { name: 'HTML', icon: FaHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 90, color: '#ffffff' },
      { name: 'Nest.js', icon: SiNestjs, level: 90, color: '#E0234E' },
      { name: 'REST APIs', icon: FaNodeJs, level: 90, color: '#6366f1' },
      { name: 'Java', icon: FaJava, level: 80, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpring, level: 80, color: '#6DB33F' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, level: 90, color: '#47A248' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'AWS (EC2, S3)', icon: FaAws, level: 80, color: '#FF9900' },
      { name: 'Jenkins CI/CD', icon: SiJenkins, level: 75, color: '#D24939' },
      { name: 'Docker', icon: SiDocker, level: 80, color: '#2496ED' },
      { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 90, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, level: 85, color: '#FF6C37' },
      { name: 'VS Code', icon: FaCode, level: 90, color: '#007ACC' },
      { name: 'Cursor', icon: FaCode, level: 85, color: '#a78bfa' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container skills-container">
      <AnimatedSectionHeader
        tag="Skills"
        title="Technologies I Work With"
        description="Frontend, backend, database, and DevOps tools from my resume—built for production-grade SaaS applications."
      />

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article key={category.title} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon aria-hidden="true" />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
