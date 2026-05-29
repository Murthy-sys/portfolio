import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = ({ darkMode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const firstName = 'Malisetti';
  const lastName = 'Obulamurthy';

  const letterVariant = {
    hidden: { y: '110%' },
    visible: (i) => ({
      y: '0%',
      transition: {
        delay: 1.5 + i * 0.035,
        duration: 0.7,
        ease: [0.77, 0, 0.18, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 grid-bg opacity-70" />
      {/* Legibility wash so the headline reads cleanly over the particle field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(80% 70% at 35% 45%, rgba(4,5,12,0.78), rgba(4,5,12,0.25) 60%, transparent 85%)'
            : 'radial-gradient(80% 70% at 35% 45%, rgba(238,242,251,0.85), rgba(238,242,251,0.35) 60%, transparent 85%)',
        }}
      />

      {/* HUD corner brackets for a holographic interface feel */}
      <div className={`pointer-events-none absolute top-24 left-6 w-12 h-12 border-l border-t ${darkMode ? 'border-neon-cyan/40' : 'border-brand-500/40'}`} />
      <div className={`pointer-events-none absolute top-24 right-6 w-12 h-12 border-r border-t ${darkMode ? 'border-neon-cyan/40' : 'border-brand-500/40'}`} />
      <div className={`pointer-events-none absolute bottom-10 left-6 w-12 h-12 border-l border-b ${darkMode ? 'border-neon-pink/40' : 'border-fuchsia-500/40'}`} />
      <div className={`pointer-events-none absolute bottom-10 right-6 w-12 h-12 border-r border-b ${darkMode ? 'border-neon-pink/40' : 'border-fuchsia-500/40'}`} />

      <motion.div
        style={{ y }}
        className="absolute -top-40 -right-20 w-[32rem] h-[32rem] rounded-full opacity-40 blur-3xl bg-brand-600/30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-40 -left-32 w-[36rem] h-[36rem] rounded-full opacity-30 blur-3xl bg-neon-cyan/20"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="eyebrow mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              OPEN TO NEW OPPORTUNITIES
            </motion.div>

            <h1 className="font-display font-semibold tracking-tightest leading-[0.95] text-5xl sm:text-7xl lg:text-[8rem]">
              <span className="block overflow-hidden">
                <span className="inline-block">
                  {firstName.split('').map((c, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariant}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {c}
                    </motion.span>
                  ))}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block aurora-text neon-text">
                  {lastName.split('').map((c, i) => (
                    <motion.span
                      key={i}
                      custom={i + firstName.length}
                      variants={letterVariant}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {c}
                    </motion.span>
                  ))}
                </span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className={`h-px flex-1 max-w-[80px] ${darkMode ? 'bg-ink-700' : 'bg-ink-300'}`} />
              <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-brand-400">
                Front-End Developer
              </span>
              <div className={`h-px flex-1 max-w-[80px] ${darkMode ? 'bg-ink-700' : 'bg-ink-300'}`} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className={`mt-8 max-w-2xl text-base sm:text-lg leading-relaxed ${
                darkMode ? 'text-ink-300' : 'text-ink-600'
              }`}
            >
              Front-end developer with{' '}
              <span className="text-brand-400 font-medium">8+ years</span> of experience building
              web and mobile applications using{' '}
              <span className={darkMode ? 'text-white font-medium' : 'text-ink-900 font-medium'}>
                React, Vue, and JavaScript
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-ink-950 font-medium text-sm overflow-hidden shadow-2xl shadow-brand-500/20"
              >
                <span className="relative z-10">View Selected Work</span>
                <ArrowDown className="relative z-10 w-4 h-4 -rotate-45" />
              </MagneticButton>

              {/* <MagneticButton
                as="a"
                href="#contact"
                className={`inline-flex items-center gap-3 px-7 py-3.5 rounded-full border text-sm font-medium transition-colors ${
                  darkMode
                    ? 'border-ink-700 text-ink-100 hover:border-ink-500'
                    : 'border-ink-300 text-ink-900 hover:border-ink-500'
                }`}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </MagneticButton> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-12 flex items-center gap-5"
            >
              <span className={`font-mono text-[10px] tracking-widest uppercase ${
                darkMode ? 'text-ink-500' : 'text-ink-400'
              }`}>
                FOLLOW
              </span>
              {[
                { Icon: Github,   href: 'https://github.com/Murthy-sys' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/murthy-malisetti-b2893122b/' },
                { Icon: Mail,     href: 'mailto:mmurthy7702@gmail.com' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`transition-colors ${
                    darkMode ? 'text-ink-400 hover:text-white' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8, duration: 0.9 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative p-6 rounded-2xl overflow-hidden holo-card holo-border"
            >
              <span className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full animate-pulse ${darkMode ? 'bg-neon-cyan shadow-neon-cyan' : 'bg-brand-500'}`} />
              <div className="flex items-center gap-2 mb-4">
                <span className={`font-mono text-[10px] tracking-widest uppercase ${darkMode ? 'text-neon-cyan' : 'text-brand-600'}`}>
                  ◇ At a glance
                </span>
              </div>
              <dl className="space-y-5">
                {[
                  { k: 'Experience', v: '8+ yrs' },
                  { k: 'Stack',      v: 'React · Vue · JS' },
                  { k: 'Location',   v: 'India (Remote)' },
                  { k: 'Focus',      v: 'Enterprise UI' },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between text-sm">
                    <dt className={darkMode ? 'text-ink-400' : 'text-ink-500'}>{row.k}</dt>
                    <dd className={`font-medium ${darkMode ? 'text-white' : 'text-ink-900'}`}>
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className={`mt-6 pt-5 border-t ${darkMode ? 'border-ink-800/60' : 'border-ink-200'}`}>
                <p className={`font-display text-sm ${darkMode ? 'text-ink-200' : 'text-ink-700'}`}>
                  Currently Working on Wissen AIDE framework with SpecDev at Wissen Infotech.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`font-mono text-[10px] tracking-widest uppercase ${
            darkMode ? 'text-ink-500' : 'text-ink-400'
          }`}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-px h-10 bg-gradient-to-b ${
              darkMode ? 'from-ink-500 to-transparent' : 'from-ink-400 to-transparent'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
