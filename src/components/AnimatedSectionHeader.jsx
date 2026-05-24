import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '../utils/animations';

const AnimatedSectionHeader = ({ tag, title, description }) => {
  const titleWords = title.split(/\s+/).filter(Boolean);

  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.08)}
    >
      <motion.span className="section-tag" variants={fadeInUp}>
        {tag}
      </motion.span>
      <h2 className="section-title" aria-label={title}>
        {titleWords.map((word, i) => (
          <motion.span key={`${word}-${i}`} className="title-word" variants={fadeInUp}>
            {word}
          </motion.span>
        ))}
      </h2>
      {description && (
        <motion.p className="section-description" variants={fadeInUp}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedSectionHeader;
