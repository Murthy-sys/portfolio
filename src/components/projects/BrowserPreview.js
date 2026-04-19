import React from 'react';
import { motion } from 'framer-motion';

const BrowserPreview = ({ project, darkMode }) => {
  const { accent, previewData, previewBg } = project;
  const { domain, navItems = [], hero, cta, cards = [], brandName } = previewData;

  const surface = previewBg || (darkMode ? '#0e0e13' : '#ffffff');
  const hasCustomBg = !!previewBg;
  // Treat custom-bg previews as "light" regardless of app theme
  const onLight = hasCustomBg ? true : !darkMode;

  return (
    <div
      className="relative w-full h-full flex flex-col"
      style={{
        background: `radial-gradient(120% 80% at 50% -10%, ${accent.from}${
          onLight ? '14' : '22'
        }, transparent 60%), ${surface}`,
      }}
    >
      {/* Browser chrome */}
      <div
        className={`flex items-center gap-3 px-4 h-9 border-b ${
          onLight ? 'border-ink-200 bg-ink-50' : 'border-ink-800 bg-ink-900/70'
        }`}
        style={{ transform: 'translateZ(20px)' }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div
          className={`flex-1 mx-4 h-5 rounded-md px-3 flex items-center text-[10px] font-mono truncate ${
            onLight ? 'bg-white text-ink-500 border border-ink-200' : 'bg-ink-800 text-ink-400'
          }`}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2"
            style={{ background: accent.from }}
          />
          {domain}
        </div>
        <div
          className={`w-12 h-[2px] rounded-full ${
            onLight ? 'bg-ink-300' : 'bg-ink-700'
          }`}
        />
      </div>

      {/* Nav */}
      <div
        className="flex items-center justify-between px-6 pt-4"
        style={{ transform: 'translateZ(30px)' }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="w-4 h-4 rounded-[5px]"
            style={{
              background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
            }}
          />
          <span
            className={`font-display font-semibold tracking-tight ${
              brandName ? 'text-[10px] tracking-[0.1em]' : 'text-xs'
            } ${onLight ? 'text-ink-900' : 'text-white'}`}
          >
            {brandName || project.title.split(' ')[0]}
          </span>
        </div>
        <div className="flex gap-4">
          {navItems.map((n) => (
            <span
              key={n}
              className={`text-[9px] font-medium ${
                onLight ? 'text-ink-500' : 'text-ink-400'
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div
        className="flex-1 px-6 pt-6 pb-5 flex flex-col justify-center"
        style={{ transform: 'translateZ(40px)' }}
      >
        <span
          className="font-mono text-[8px] tracking-[0.2em] uppercase mb-2"
          style={{ color: accent.from }}
        >
          {hero.eyebrow}
        </span>
        <h3
          className="font-display font-semibold text-2xl sm:text-3xl leading-tight tracking-tight mb-2"
          style={
            hasCustomBg
              ? { color: accent.from }
              : { color: onLight ? '#0e0e13' : '#ffffff' }
          }
        >
          {hero.title}
        </h3>
        <p
          className={`text-[11px] max-w-[85%] leading-snug mb-4 ${
            onLight ? 'text-ink-500' : 'text-ink-400'
          }`}
        >
          {hero.sub}
        </p>

        <div className="flex items-center gap-2">
          <motion.span
            whileHover={{ y: -2 }}
            className="inline-flex items-center text-[9px] font-semibold px-3 py-1.5 rounded-full text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
              boxShadow: `0 8px 20px -6px ${accent.from}66`,
            }}
          >
            {cta} →
          </motion.span>
          <span
            className={`text-[9px] font-medium ${
              onLight ? 'text-ink-400' : 'text-ink-500'
            }`}
          >
            Learn more
          </span>
        </div>

        {/* Preview cards row */}
        {cards.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-5">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className={`rounded-lg p-2 border ${
                  onLight
                    ? 'border-ink-200 bg-white/90'
                    : 'border-ink-800 bg-ink-900/80'
                }`}
                style={{ transform: `translateZ(${50 + i * 6}px)` }}
              >
                <div
                  className="w-5 h-5 rounded-md mb-1.5"
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}${
                      i === 1 ? '99' : ''
                    }, ${accent.to}${i === 2 ? '66' : ''})`,
                  }}
                />
                <div
                  className={`text-[8px] font-semibold ${
                    onLight ? 'text-ink-900' : 'text-white'
                  }`}
                >
                  {c.title}
                </div>
                <div
                  className={`text-[7px] mt-0.5 ${
                    onLight ? 'text-ink-400' : 'text-ink-500'
                  }`}
                >
                  {c.meta}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowserPreview;
