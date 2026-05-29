import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ParticleUniverse from './components/ParticleUniverse';

// Resolve the saved/preferred theme synchronously so the very first paint
// (preloader included) matches — no dark flash for light-theme visitors.
const resolveInitialTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch (e) {
    /* localStorage unavailable */
  }
  return true; // default to dark
};

function App() {
  const [darkMode, setDarkMode] = useState(resolveInitialTheme);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    applyTheme(darkMode);

    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    applyTheme(next);
  };

  return (
    <>
      <CustomCursor />

      {/* Immersive WebGL data-network universe (both themes) */}
      <ParticleUniverse darkMode={darkMode} />
      {/* Scrim: sits above the canvas, below content -> keeps text legible */}
      <div className={darkMode ? 'universe-dim' : 'universe-dim universe-dim--light'} />
      <div className={darkMode ? 'universe-vignette' : 'universe-vignette universe-vignette--light'} />
      {darkMode && <div className="universe-grain" />}

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" darkMode={darkMode} />}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-neon-cyan via-brand-400 to-neon-pink shadow-neon-cyan"
        style={{ scaleX }}
      />

      <div className={`relative min-h-screen transition-colors duration-500 ${
        darkMode ? 'text-ink-100' : 'text-ink-900'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </motion.main>

        <Footer darkMode={darkMode} />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
