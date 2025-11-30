import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind? I'd love to hear from you. Feel free to reach out
            through any of the contact methods below.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-items">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-item"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <span className="contact-title">{info.title}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

