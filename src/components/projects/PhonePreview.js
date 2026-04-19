import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Heart, X, MapPin } from 'lucide-react';

const PhonePreview = ({ project, darkMode }) => {
  const { accent, previewData } = project;
  const { appName, tagline, chips = [], items = [], cardStack, variant = 'list' } = previewData;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        background: darkMode
          ? `radial-gradient(120% 80% at 50% 0%, ${accent.from}22, transparent 60%), #0e0e13`
          : `radial-gradient(120% 80% at 50% 0%, ${accent.from}1A, transparent 60%), #f4f4f5`,
      }}
    >
      {/* Soft glow ring behind phone */}
      <div
        className="absolute inset-0 opacity-60 blur-2xl"
        style={{
          background: `radial-gradient(40% 40% at 50% 50%, ${accent.from}44, transparent)`,
        }}
      />

      {/* Dual phone layout */}
      <div className="relative flex items-center gap-5 scale-[0.86] sm:scale-90">
        {/* Left phone (offset back) */}
        <motion.div
          className="w-[150px] h-[300px] rounded-[28px] p-[3px] shadow-2xl opacity-70"
          style={{
            background: `linear-gradient(180deg, ${accent.from}44, ${accent.to}22)`,
            transform: 'translateZ(10px) rotate(-7deg) translateX(20px)',
          }}
        >
          <div className={`w-full h-full rounded-[26px] overflow-hidden ${
            darkMode ? 'bg-ink-950' : 'bg-white'
          }`}>
            <div
              className="h-24 flex items-end justify-center p-3"
              style={{
                background: `linear-gradient(180deg, ${accent.from}66, ${accent.to}22)`,
              }}
            >
              <div className={`font-display font-semibold text-xs ${darkMode ? 'text-white' : 'text-white'}`}>
                {appName}
              </div>
            </div>
            <div className="p-3 space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-6 rounded-md ${
                    darkMode ? 'bg-ink-800' : 'bg-ink-100'
                  }`}
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main phone */}
        <motion.div
          className={`relative w-[180px] h-[360px] rounded-[36px] p-[3px] shadow-2xl ${
            darkMode ? 'bg-ink-800' : 'bg-ink-900'
          }`}
          style={{
            transform: 'translateZ(50px)',
            boxShadow: `0 40px 60px -20px ${accent.from}44, 0 20px 40px -10px rgba(0,0,0,0.3)`,
          }}
        >
          <div
            className={`relative w-full h-full rounded-[32px] overflow-hidden flex flex-col ${
              darkMode ? 'bg-ink-950' : 'bg-white'
            }`}
          >
            {/* Notch */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-16 h-4 bg-black rounded-full z-20" />

            {/* Status bar */}
            <div
              className={`flex items-center justify-between px-5 pt-2.5 pb-1 text-[8px] font-semibold ${
                darkMode ? 'text-white' : 'text-ink-900'
              }`}
            >
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-1.5 rounded-[1px] border border-current relative">
                  <span
                    className="absolute inset-0.5 rounded-[0.5px]"
                    style={{ background: accent.from }}
                  />
                </span>
              </span>
            </div>

            {/* App header */}
            <div
              className="px-4 pt-4 pb-3 flex items-center justify-between"
              style={{ transform: 'translateZ(10px)' }}
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-md"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    }}
                  />
                  <span
                    className={`font-display font-semibold text-sm ${
                      darkMode ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {appName}
                  </span>
                </div>
                {tagline && (
                  <div
                    className={`text-[8px] mt-0.5 ${
                      darkMode ? 'text-ink-400' : 'text-ink-500'
                    }`}
                  >
                    {tagline}
                  </div>
                )}
              </div>
              <MapPin
                className={darkMode ? 'text-ink-400 w-3 h-3' : 'text-ink-400 w-3 h-3'}
              />
            </div>

            {/* Variant: list (Lumo-style) */}
            {variant === 'list' && (
              <>
                <div
                  className={`mx-4 mb-3 flex items-center gap-2 px-2 h-6 rounded-lg ${
                    darkMode ? 'bg-ink-900' : 'bg-ink-100'
                  }`}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <Search className={darkMode ? 'text-ink-500 w-2.5 h-2.5' : 'text-ink-400 w-2.5 h-2.5'} />
                  <span
                    className={`text-[8px] ${
                      darkMode ? 'text-ink-500' : 'text-ink-400'
                    }`}
                  >
                    Search rentals…
                  </span>
                </div>

                <div
                  className="px-4 flex gap-1.5 mb-3"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  {chips.map((c, i) => (
                    <span
                      key={c}
                      className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${
                        i === 0
                          ? 'text-white'
                          : darkMode
                          ? 'bg-ink-900 text-ink-400 border border-ink-800'
                          : 'bg-ink-100 text-ink-600'
                      }`}
                      style={
                        i === 0
                          ? {
                              background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                            }
                          : {}
                      }
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div
                  className="px-4 space-y-2 flex-1"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {items.map((it, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 2 }}
                      className={`flex items-center gap-2 p-2 rounded-lg ${
                        darkMode
                          ? 'bg-ink-900/80 border border-ink-800'
                          : 'bg-white border border-ink-200'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-md shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${accent.from}${
                            i === 1 ? 'aa' : ''
                          }, ${accent.to}${i === 2 ? '88' : ''})`,
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-[9px] font-semibold truncate ${
                            darkMode ? 'text-white' : 'text-ink-900'
                          }`}
                        >
                          {it.name}
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star
                            className="w-2 h-2"
                            style={{ color: accent.from }}
                            fill="currentColor"
                          />
                          <span
                            className={`text-[7px] ${
                              darkMode ? 'text-ink-400' : 'text-ink-500'
                            }`}
                          >
                            {it.rating}
                          </span>
                          <span
                            className={`text-[7px] mx-1 ${
                              darkMode ? 'text-ink-600' : 'text-ink-300'
                            }`}
                          >
                            ·
                          </span>
                          <span
                            className={`text-[7px] ${
                              darkMode ? 'text-ink-400' : 'text-ink-500'
                            }`}
                          >
                            {it.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* Variant: stack (Spark-style) */}
            {variant === 'stack' && (
              <div className="flex-1 px-4 pt-1 pb-3 flex flex-col items-center">
                <div
                  className="relative w-full h-[210px]"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {cardStack.map((c, i) => {
                    const isTop = i === cardStack.length - 1;
                    return (
                      <motion.div
                        key={i}
                        whileHover={isTop ? { rotate: -3, y: -2 } : {}}
                        className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                        style={{
                          transform: `translateY(${i * 6}px) scale(${1 - (cardStack.length - 1 - i) * 0.03})`,
                          zIndex: i,
                          background: `linear-gradient(160deg, ${c.from}, ${c.to})`,
                        }}
                      >
                        <div className="w-full h-full relative p-3 flex flex-col justify-end">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="relative">
                            <div className="text-[11px] font-semibold text-white">
                              {c.name}, {c.age}
                            </div>
                            <div className="flex items-center gap-1 text-[8px] text-white/80 mt-0.5">
                              <MapPin className="w-2 h-2" />
                              {c.location}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  className="flex gap-3 mt-4"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                      darkMode ? 'bg-ink-800' : 'bg-white'
                    }`}
                  >
                    <X
                      className={darkMode ? 'w-3.5 h-3.5 text-rose-400' : 'w-3.5 h-3.5 text-rose-500'}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    }}
                  >
                    <Heart className="w-3.5 h-3.5 text-white" fill="currentColor" />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Home indicator */}
            <div className="h-5 flex items-center justify-center">
              <div
                className={`w-20 h-1 rounded-full ${
                  darkMode ? 'bg-ink-700' : 'bg-ink-300'
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhonePreview;
