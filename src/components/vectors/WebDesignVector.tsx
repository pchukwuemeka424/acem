'use client';

import { motion } from 'framer-motion';

const WebDesignVector = () => {
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
      {/* Monitor */}
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        x="100"
        y="80"
        width="300"
        height="200"
        rx="15"
        fill="url(#monitor-gradient)"
        stroke="#6366f1"
        strokeWidth="3"
      />
      
      {/* Screen */}
      <rect
        x="120"
        y="100"
        width="260"
        height="160"
        rx="8"
        fill="#0f172a"
      />
      
      {/* Website Elements */}
      <motion.rect
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        x="140"
        y="120"
        width="220"
        height="30"
        rx="5"
        fill="#3b82f6"
      />
      
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 1, delay: 1.3 }}
        x="140"
        y="170"
        height="15"
        rx="7"
        fill="#64748b"
      />
      
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 150 }}
        transition={{ duration: 1, delay: 1.5 }}
        x="140"
        y="195"
        height="15"
        rx="7"
        fill="#64748b"
      />
      
      {/* Buttons */}
      <motion.rect
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        x="140"
        y="220"
        width="60"
        height="25"
        rx="12"
        fill="#22c55e"
      />
      
      <motion.rect
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        x="220"
        y="220"
        width="60"
        height="25"
        rx="12"
        fill="#f59e0b"
      />
      
      {/* Stand */}
      <rect
        x="230"
        y="280"
        width="40"
        height="60"
        fill="url(#stand-gradient)"
      />
      
      <rect
        x="180"
        y="330"
        width="140"
        height="15"
        rx="7"
        fill="url(#base-gradient)"
      />
      
      {/* Design Tools */}
      <motion.circle
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ 
          duration: 2, 
          delay: 0.5,
          rotate: { repeat: Infinity, duration: 10, ease: "linear" }
        }}
        cx="80"
        cy="180"
        r="25"
        fill="url(#tool-gradient-1)"
      />
      
      <motion.rect
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        x="420"
        y="150"
        width="30"
        height="30"
        rx="5"
        fill="url(#tool-gradient-2)"
      />
      
      {/* Floating Elements */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        d="M50 100 Q 100 50 150 100 T 250 100"
        stroke="#8b5cf6"
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="monitor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="stand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="base-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
        <radialGradient id="tool-gradient-1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
        <radialGradient id="tool-gradient-2">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default WebDesignVector;
