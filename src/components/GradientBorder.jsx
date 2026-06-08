import React from 'react';
import { motion } from 'framer-motion';
import './GradientBorder.css';

const easePro = [0.22, 1, 0.36, 1];

const GradientBorder = ({
  children,
  className = '',
  innerClassName = '',
  borderRadius = 20,
  animateOn = 'mount',
  delay = 0,
  spinDuration = 8,
  spinOpacity = 0.6,
  whileHover,
}) => {
  const motionProps =
    animateOn === 'view'
      ? {
          initial: { opacity: 0, y: 30, scale: 0.97 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.7, delay, ease: easePro },
        }
      : {
          initial: { opacity: 0, y: 24, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.8, delay, ease: easePro },
        };

  return (
    <motion.div
      className={`gradient-border ${className}`}
      style={{ borderRadius }}
      whileHover={whileHover}
      {...motionProps}
    >
      <motion.div
        className="gradient-border-spin"
        style={{ opacity: spinOpacity }}
        animate={{ rotate: 360 }}
        transition={{ duration: spinDuration, repeat: Infinity, ease: 'linear' }}
      />
      <div
        className={`gradient-border-inner ${innerClassName}`}
        style={{ borderRadius: Math.max(borderRadius - 2, 0) }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GradientBorder;
