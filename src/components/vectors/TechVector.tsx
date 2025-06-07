'use client';

import { motion } from 'framer-motion';

const TechVector = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      width="500"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Laptop */}
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        x="100"
        y="200"
        width="300"
        height="180"
        rx="10"
        fill="url(#laptop-gradient)"
        stroke="#2563eb"
        strokeWidth="2"
      />
      
      {/* Screen */}
      <rect
        x="120"
        y="220"
        width="260"
        height="140"
        rx="5"
        fill="#1e293b"
      />
      
      {/* Code Lines */}
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1, delay: 1.2 }}
        x="140"
        y="240"
        height="8"
        rx="4"
        fill="#22c55e"
      />
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 150 }}
        transition={{ duration: 1, delay: 1.4 }}
        x="140"
        y="260"
        height="8"
        rx="4"
        fill="#3b82f6"
      />
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 180 }}
        transition={{ duration: 1, delay: 1.6 }}
        x="140"
        y="280"
        height="8"
        rx="4"
        fill="#f59e0b"
      />
      
      {/* Floating Elements */}
      <motion.circle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 2, 
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        cx="450"
        cy="100"
        r="30"
        fill="url(#element-gradient-1)"
      />
      
      <motion.polygon
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ 
          duration: 3, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        points="50,150 80,150 65,120"
        fill="url(#element-gradient-2)"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="laptop-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <radialGradient id="element-gradient-1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <radialGradient id="element-gradient-2">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default TechVector;
