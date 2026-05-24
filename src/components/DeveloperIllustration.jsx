import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './DeveloperIllustration.css';

const DEVELOPER_IMAGE = `${import.meta.env.BASE_URL}Gemini_Generated_Image_uhyfw3uhyfw3uhyf.png`;

const DeveloperIllustration = ({ parallax = { x: 0, y: 0 } }) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="dev-illustration">
      <div
        className="dev-scene"
        style={{
          transform: `translate3d(${parallax.x * 0.06}px, ${parallax.y * 0.04}px, 0)`,
        }}
      >
        <motion.div
          className="dev-scene-inner"
          animate={reduceMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Ambient monitor highlights — opacity never drops below 0.45 */}
          <span className="dev-glow dev-glow--left" aria-hidden="true" />
          <span className="dev-glow dev-glow--center" aria-hidden="true" />
          <span className="dev-glow dev-glow--right" aria-hidden="true" />

          <motion.img
            src={DEVELOPER_IMAGE}
            alt="Ghanshyam Mali — Full Stack Developer at work"
            className="dev-hero-image"
            initial={reduceMotion ? false : { opacity: 0.88, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            loading="eager"
          />

          {/* Light sweep — transform only, fixed low opacity in CSS */}
          {!reduceMotion && (
            <motion.span
              className="dev-shine"
              aria-hidden="true"
              animate={{ x: ['-80%', '140%'] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 4,
              }}
            />
          )}

          <span className="dev-vignette" aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperIllustration;
