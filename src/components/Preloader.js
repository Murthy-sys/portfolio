import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const name = 'MALISETTI';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.9, ease: [0.77, 0, 0.18, 1] },
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
    >
      <div className="relative flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
            className="font-mono text-xs tracking-[0.4em] text-ink-400 inline-block"
          >
            PORTFOLIO / 2025
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
              className="font-display text-5xl sm:text-7xl font-semibold text-white inline-block"
            >
              {ch}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
          className="origin-left h-[2px] w-48 mt-6 bg-gradient-to-r from-brand-500 to-glow-500"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
