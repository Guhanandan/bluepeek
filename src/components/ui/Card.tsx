import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  peak?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = true, glass = false, peak = false, glow = false }: CardProps) {
  const baseClasses = 'rounded-2xl border transition-all duration-500 relative overflow-hidden';
  const glassClasses = glass 
    ? 'glass-blue border-blue-200/30' 
    : 'bg-white border-slate-200/50 shadow-lg';
  const hoverClasses = hover ? 'hover-lift hover:shadow-peak-lg' : '';
  const peakClasses = peak ? 'peak-shadow' : '';
  const glowClasses = glow ? 'hover-glow' : '';

  return (
    <motion.div 
      className={`${baseClasses} ${glassClasses} ${hoverClasses} ${peakClasses} ${glowClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-blue-electric opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
      )}
      {children}
    </motion.div>
  );
}