import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSectionHeader from './AnimatedSectionHeader';
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
      <div className="contact-glow" aria-hidden="true" />

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
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
