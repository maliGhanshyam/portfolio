import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { staggerContainer, blurReveal } from '../utils/animations';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/maliGhanshyam', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/ghanshyammali', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:ghanshyams.mali@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.div className="footer-section" variants={blurReveal}>
            <h3 className="footer-logo">Ghanshyam Mali</h3>
            <p className="footer-description">
              Full Stack Developer specializing in multi-tenant SaaS, NestJS, Next.js,
              and MongoDB—building secure, high-performance web applications.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-section" variants={blurReveal}>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-section" variants={blurReveal}>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <FaEnvelope /> ghanshyams.mali@gmail.com
              </p>
              <p>Mumbai, India</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Ghanshyam Mali. Made with{' '}
            <motion.span
              className="heart-icon-wrap"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="heart-icon" />
            </motion.span>{' '}
            using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

