import React from 'react';
import { motion } from 'framer-motion';
import { blurReveal, wordReveal, staggerContainer, viewport } from '../utils/animations';

const AnimatedSectionHeader = ({ tag, title, description }) => {
  const titleWords = title.split(/\s+/).filter(Boolean);

  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.1)}
    >
      <motion.span className="section-tag" variants={blurReveal}>
        {tag}
      </motion.span>
      <h2 className="section-title" aria-label={title}>
        {titleWords.map((word, i) => (
          <motion.span key={`${word}-${i}`} className="title-word" variants={wordReveal}>
            {word}
          </motion.span>
        ))}
      </h2>
      <motion.div
        className="section-title-line"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      {description && (
        <motion.p className="section-description" variants={blurReveal}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedSectionHeader;
