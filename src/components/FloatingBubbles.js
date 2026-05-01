import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Floating tech bubbles. Positions are deterministic (hash-based) so layout
 * is stable between renders, while animations have varied phase + duration
 * to feel organic and "airborne".
 */
const seededRandom = (seed) => {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6D2B79F5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const FloatingBubbles = ({ items, darkMode }) => {
  const placed = useMemo(() => {
    return items.map((item, i) => {
      const rand = seededRandom(item.label + i);
      const size = item.size || 'md'; // sm | md | lg
      const sizeMap = {
        sm: { padX: 12, padY: 6,  font: 11 },
        md: { padX: 16, padY: 8,  font: 13 },
        lg: { padX: 22, padY: 10, font: 16 },
      };
      const { padX, padY, font } = sizeMap[size];

      // Distribute across a 6-column virtual grid with jitter
      const cols = 6;
      const rows = 3;
      const col = i % cols;
      const row = Math.floor(i / cols) % rows;
      const baseX = (col / (cols - 1)) * 100;
      const baseY = (row / (rows - 1)) * 100;

      const x = Math.max(2, Math.min(98, baseX + (rand() - 0.5) * 14));
      const y = Math.max(5, Math.min(95, baseY + (rand() - 0.5) * 22));

      const float = {
        duration: 5 + rand() * 5,
        delay: rand() * 3,
        yAmp: 12 + rand() * 16,
        xAmp: 6 + rand() * 12,
      };

      return { ...item, x, y, padX, padY, font, float };
    });
  }, [items]);

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] overflow-hidden">
      {/* Soft ambient backdrops */}
      <div
        className="absolute -top-10 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.4), transparent 70%)' }}
      />

      {placed.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { delay: i * 0.04, duration: 0.6 },
            scale:   { delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            left: `${b.x}%`,
            top:  `${b.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute will-change-transform"
        >
          <motion.div
            animate={{
              y: [0, -b.float.yAmp, 0, b.float.yAmp * 0.6, 0],
              x: [0, b.float.xAmp, 0, -b.float.xAmp * 0.7, 0],
            }}
            transition={{
              duration: b.float.duration,
              delay: b.float.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
            data-cursor="hover"
            className={`inline-flex items-center gap-2 rounded-full font-mono font-medium tracking-wide whitespace-nowrap backdrop-blur-md cursor-default ${
              darkMode
                ? 'bg-ink-900/60 border border-ink-700/60 text-ink-100 shadow-lg shadow-brand-900/20'
                : 'bg-white/80 border border-ink-200 text-ink-800 shadow-lg shadow-brand-200/30'
            }`}
            style={{
              padding: `${b.padY}px ${b.padX}px`,
              fontSize: `${b.font}px`,
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: b.color }}
            />
            {b.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
