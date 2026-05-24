import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, viewport } from '../utils/animations';

const variantsMap = {
  up: fadeInUp,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
};

const ScrollReveal = ({
  children,
  className = '',
  as: Component = motion.div,
  direction = 'up',
  delay = 0,
  ...props
}) => {
  const MotionTag = Component === motion.div ? motion.div : motion(Component);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantsMap[direction] || fadeInUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const ScrollStagger = ({ children, className = '', stagger = 0.1 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren: 0.05 },
      },
    }}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
