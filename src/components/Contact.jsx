import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
import GradientCard from './GradientCard';
import Magnetic from './Magnetic';
import FloatingOrbs from './FloatingOrbs';
import { staggerContainer, fadeInUp, viewport } from '../utils/animations';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ghanshyams.mali@gmail.com',
      link: 'mailto:ghanshyams.mali@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8999764387',
      link: 'tel:+918999764387',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Mumbai, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="contact">
      <FloatingOrbs />
      <motion.div
        className="contact-glow"
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container">
        <AnimatedSectionHeader
          tag="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear from you. Feel free to reach out through any of the contact methods below."
        />

        <motion.div
          className="contact-content"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div className="contact-items">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-item"
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="contact-icon"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <info.icon />
                </motion.div>
                <div className="contact-details">
                  <span className="contact-title">{info.title}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
                <span className="contact-arrow">
                  <FaArrowRight />
                </span>
              </motion.a>
            ))}
          </motion.div>

          <GradientCard className="contact-cta">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to build something great?
            </motion.h3>
            <motion.ul
              className="site-list contact-cta-list"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <li>Open to freelance projects and full-time roles</li>
              <li>Available for SaaS, enterprise, and full-stack collaborations</li>
            </motion.ul>
            <Magnetic strength={0.22} className="contact-cta-magnetic">
              <motion.a
                href="mailto:ghanshyams.mali@gmail.com"
                className="btn btn-primary contact-cta-btn"
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send a Message <FaArrowRight aria-hidden="true" />
              </motion.a>
            </Magnetic>
          </GradientCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
