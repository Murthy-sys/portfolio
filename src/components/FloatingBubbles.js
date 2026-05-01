import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Tech bubbles laid out on a responsive grid (so they never overlap),
 * but each bubble drifts a few pixels independently to keep the
 * "floating in air" feel.
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

const sizeMap = {
  sm: { padX: 14, padY: 7,  font: 12 },
  md: { padX: 18, padY: 9,  font: 14 },
  lg: { padX: 22, padY: 11, font: 16 },
};

const FloatingBubbles = ({ items, darkMode }) => {
  const enriched = useMemo(
    () =>
      items.map((item, i) => {
        const rand = seededRandom(item.label + i);
        const { padX, padY, font } = sizeMap[item.size || 'md'];
        const float = {
          duration: 4 + rand() * 4,        // 4–8s
          delay: rand() * 2.5,
          yAmp: 6 + rand() * 6,            // 6–12px
          xAmp: 3 + rand() * 5,            // 3–8px
          rotAmp: (rand() - 0.5) * 4,      // ±2deg
        };
        return { ...item, padX, padY, font, float };
      }),
    [items]
  );

  return (
    <div className="relative w-full">
      {/* Soft ambient backdrops */}
      <div
        className="absolute -top-8 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.4), transparent 70%)' }}
      />

      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5 sm:gap-y-6 place-items-center py-10 sm:py-14">
        {enriched.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.6, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              delay: i * 0.04,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="will-change-transform"
          >
            <motion.div
              animate={{
                y: [0, -b.float.yAmp, 0, b.float.yAmp * 0.7, 0],
                x: [0, b.float.xAmp, 0, -b.float.xAmp, 0],
                rotate: [0, b.float.rotAmp, 0, -b.float.rotAmp, 0],
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
                className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: b.color }}
              />
              {b.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingBubbles;
