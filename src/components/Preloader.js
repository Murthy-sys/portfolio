import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ darkMode = true }) => {
  const name = 'MALISETTI';

  const bootLines = [
    'INITIALIZING INTERFACE',
    'CALIBRATING PARTICLE FIELD',
    'RENDERING HOLOGRAPHIC LAYER',
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        clipPath: 'inset(0 0 100% 0)',
        transition: { duration: 0.9, ease: [0.77, 0, 0.18, 1] },
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-[#04050c]' : 'bg-[#eef2fb]'
      }`}
    >
      {/* Ambient scanline + glow backdrop */}
      <div className="absolute inset-0 aurora-bg opacity-30" />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        style={{ boxShadow: '0 0 12px rgba(34,211,238,0.7)' }}
      />

      <div className="relative flex flex-col items-center">
        {/* Rotating ring emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-16 h-16 mb-8"
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-neon-cyan/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border border-neon-pink/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
            style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
          />
          <span className={`absolute inset-0 grid place-items-center font-display text-xs font-bold ${darkMode ? 'text-white' : 'text-ink-900'}`}>
            OM
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
            className="font-mono text-[10px] tracking-[0.5em] text-neon-cyan inline-block"
          >
            DIGITAL UNIVERSE / 2026
          </motion.span>
        </div>

        <div className="flex overflow-hidden mt-3">
          {name.split('').map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{
                delay: 0.15 + i * 0.04,
                duration: 0.6,
                ease: [0.77, 0, 0.18, 1],
              }}
              className={`font-display text-5xl sm:text-7xl font-semibold inline-block neon-text ${darkMode ? 'text-white' : 'text-ink-900'}`}
            >
              {ch}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
          className="origin-left h-[2px] w-56 mt-6 bg-gradient-to-r from-neon-cyan via-brand-400 to-neon-pink"
          style={{ boxShadow: '0 0 12px rgba(34,211,238,0.6)' }}
        />

        {/* Boot log */}
        <div className="mt-6 h-4 flex items-center gap-3">
          {bootLines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0.4] }}
              transition={{ delay: 0.5 + i * 0.28, duration: 0.8 }}
              className="font-mono text-[9px] tracking-widest uppercase text-ink-500"
            >
              {line}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
