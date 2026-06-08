/** Shared motion variants — professional easing, scroll-friendly */

export const easeOut = [0.22, 1, 0.36, 1];
export const easeInOut = [0.65, 0, 0.35, 1];

export const viewport = {
  once: true,
  margin: '-60px',
  amount: 0.2,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const blurReveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(14px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: easeOut },
  },
};

export const letterReveal = {
  hidden: { opacity: 0, y: 40, rotateX: -80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, delay: i * 0.04, ease: easeOut },
  }),
};

export const wordReveal = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const scrollSection = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

export const springHover = { type: 'spring', stiffness: 400, damping: 22 };

export const floatAnimation = {
  y: [0, -14, 0],
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
};

export const pulseGlow = {
  opacity: [0.4, 0.75, 0.4],
  scale: [1, 1.06, 1],
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
};
