import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, highlight, description, darkMode, align = 'left' }) => {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col max-w-3xl mb-14 ${alignCls}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-4 font-display font-semibold tracking-tightest text-4xl sm:text-5xl lg:text-6xl leading-[1.05] ${
          darkMode ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-glow-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 text-base sm:text-lg max-w-2xl ${
            darkMode ? 'text-ink-400' : 'text-ink-500'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
