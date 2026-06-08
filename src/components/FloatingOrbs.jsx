import React from 'react';
import { motion } from 'framer-motion';
import { floatAnimation, pulseGlow } from '../utils/animations';
import './FloatingOrbs.css';

const ORBS = [
  { size: 320, top: '8%', left: '-5%', color: 'rgba(99,102,241,0.18)', delay: 0 },
  { size: 240, top: '60%', right: '-3%', color: 'rgba(139,92,246,0.14)', delay: 1.2 },
  { size: 180, bottom: '12%', left: '20%', color: 'rgba(236,72,153,0.1)', delay: 0.6 },
];

const FloatingOrbs = ({ className = '' }) => (
  <div className={`floating-orbs ${className}`} aria-hidden="true">
    {ORBS.map((orb, i) => (
      <motion.div
        key={i}
        className="floating-orb"
        style={{
          width: orb.size,
          height: orb.size,
          top: orb.top,
          left: orb.left,
          right: orb.right,
          bottom: orb.bottom,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
        }}
        animate={{
          y: floatAnimation.y,
          x: [0, i % 2 === 0 ? 20 : -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: orb.delay,
        }}
      />
    ))}
    <motion.div
      className="floating-orb floating-orb-accent"
      animate={pulseGlow}
    />
  </div>
);

export default FloatingOrbs;
