import React from 'react';
import { motion } from 'framer-motion';
import './ScrollIndicator.css';

const ScrollIndicator = ({ target = '#about' }) => (
  <motion.a
    href={target}
    className="scroll-indicator"
    aria-label="Scroll to content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <motion.span
      className="scroll-indicator-line"
      animate={{ scaleY: [0.4, 1, 0.4] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <span className="scroll-indicator-text">Scroll</span>
  </motion.a>
);

export default ScrollIndicator;
