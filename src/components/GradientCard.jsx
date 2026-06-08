import React from 'react';
import GradientBorder from './GradientBorder';
import './GradientCard.css';

const GradientCard = ({ children, className = '' }) => (
  <GradientBorder
    className={`gradient-card ${className}`}
    innerClassName="gradient-card-inner"
    animateOn="view"
    whileHover={{ scale: 1.01 }}
  >
    {children}
  </GradientBorder>
);

export default GradientCard;
