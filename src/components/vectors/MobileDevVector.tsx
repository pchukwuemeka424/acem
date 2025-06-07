'use client';

import { motion } from 'framer-motion';

const MobileDevVector = () => {
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
      {/* Phone 1 */}
      <motion.rect
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        x="150"
        y="50"
        width="120"
        height="250"
        rx="25"
        fill="url(#phone-gradient-1)"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      
      {/* Phone 1 Screen */}
      <rect
        x="165"
        y="75"
        width="90"
        height="200"
        rx="15"
        fill="#1e293b"
      />
      
      {/* Phone 1 App Interface */}
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 70 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        x="175"
        y="90"
        height="25"
        rx="5"
        fill="#22c55e"
      />
      
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        cx="190"
        cy="140"
        r="20"
        fill="#3b82f6"
      />
      
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 50 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        x="185"
        y="180"
        height="8"
        rx="4"
        fill="#64748b"
      />
      
      <motion.rect
        initial={{ width: 0 }}
        animate={{ width: 60 }}
        transition={{ duration: 0.8, delay: 2 }}
        x="180"
        y="200"
        height="8"
        rx="4"
        fill="#64748b"
      />
      
      {/* Phone 2 */}
      <motion.rect
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        x="300"
        y="80"
        width="120"
        height="250"
        rx="25"
        fill="url(#phone-gradient-2)"
        stroke="#8b5cf6"
        strokeWidth="2"
      />
      
      {/* Phone 2 Screen */}
      <rect
        x="315"
        y="105"
        width="90"
        height="200"
        rx="15"
        fill="#0f172a"
      />
      
      {/* Phone 2 App Interface */}
      <motion.rect
        initial={{ height: 0 }}
        animate={{ height: 40 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        x="325"
        y="120"
        width="70"
        rx="5"
        fill="#f59e0b"
      />
      
      <motion.rect
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        x="335"
        y="180"
        width="50"
        height="20"
        rx="10"
        fill="#ef4444"
      />
      
      <motion.rect
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.9 }}
        x="335"
        y="220"
        width="50"
        height="20"
        rx="10"
        fill="#10b981"
      />
      
      {/* Floating Code Elements */}
      <motion.text
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        x="50"
        y="150"
        fill="#3b82f6"
        fontSize="14"
        fontFamily="monospace"
      >
        &lt;/&gt;
      </motion.text>
      
      <motion.text
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.4 }}
        x="450"
        y="200"
        fill="#8b5cf6"
        fontSize="18"
        fontFamily="monospace"
      >
        { }
      </motion.text>
      
      {/* Connection Lines */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        d="M270 175 Q 285 155 300 175"
        stroke="url(#connection-gradient)"
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
      />
      
      {/* Floating Icons */}
      <motion.circle
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ 
          duration: 2, 
          delay: 1,
          rotate: { repeat: Infinity, duration: 8, ease: "linear" }
        }}
        cx="100"
        cy="250"
        r="15"
        fill="url(#icon-gradient-1)"
      />
      
      <motion.polygon
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{ 
          duration: 2.5, 
          delay: 1.2,
          rotate: { repeat: Infinity, duration: 10, ease: "linear" }
        }}
        points="450,120 465,105 480,120 465,135"
        fill="url(#icon-gradient-2)"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="phone-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="phone-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faf5ff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="icon-gradient-1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </radialGradient>
        <radialGradient id="icon-gradient-2">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default MobileDevVector;
