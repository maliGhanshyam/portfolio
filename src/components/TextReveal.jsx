import React from 'react';
import { motion } from 'framer-motion';
import { letterReveal } from '../utils/animations';

const TextReveal = ({
  text,
  className = '',
  as: Tag = 'span',
  delay = 0,
  by = 'letter',
}) => {
  const parts = by === 'word' ? text.split(/\s+/) : text.split('');

  return (
    <Tag className={className} aria-label={text}>
      {parts.map((part, i) => (
        <motion.span
          key={`${part}-${i}`}
          className={by === 'word' ? 'reveal-word' : 'reveal-letter'}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterReveal}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          {by === 'word' ? `${part}${i < parts.length - 1 ? '\u00A0' : ''}` : part === ' ' ? '\u00A0' : part}
        </motion.span>
      ))}
    </Tag>
  );
};

export default TextReveal;
