import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home',       href: '#hero',       id: 'hero' },
  { name: 'About',      href: '#about',      id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills',     href: '#skills',     id: 'skills' },
  { name: 'Work',       href: '#projects',   id: 'projects' },
  { name: 'Contact',    href: '#contact',    id: 'contact' },
];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = navItems.find((n) => {
        const el = document.getElementById(n.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? darkMode
            ? 'glass-dark'
            : 'glass-light'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#hero')}
            whileHover={{ letterSpacing: '0.12em' }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 font-display text-sm font-semibold tracking-widest"
          >
            <span className="inline-flex w-7 h-7 rounded-md bg-gradient-to-br from-brand-500 to-glow-500 items-center justify-center text-white text-xs font-bold shadow-lg shadow-brand-500/30">
              OM
            </span>
            <span className={darkMode ? 'text-ink-100' : 'text-ink-900'}>
              OBULAMURTHY
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              const active = activeSection === item.id;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    darkMode
                      ? active ? 'text-white' : 'text-ink-300 hover:text-white'
                      : active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  <span className="font-mono text-[10px] mr-1 text-brand-400">
                    0{i + 1}.
                  </span>
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-2 right-2 -bottom-1 h-[2px] bg-gradient-to-r from-brand-500 to-glow-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              aria-label="Toggle theme"
              className={`p-2 rounded-full border transition-colors ${
                darkMode
                  ? 'border-ink-700 text-glow-400 hover:border-glow-500/60 hover:bg-ink-800/50'
                  : 'border-ink-200 text-brand-600 hover:border-brand-500/60 hover:bg-brand-50'
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <button
              onClick={() => setIsMobileOpen((s) => !s)}
              className={`md:hidden p-2 rounded-lg border ${
                darkMode ? 'border-ink-700 text-ink-200' : 'border-ink-200 text-ink-700'
              }`}
              aria-label="Menu"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`md:hidden overflow-hidden border-t ${
                darkMode ? 'border-ink-800' : 'border-ink-200'
              }`}
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(item.href)}
                    className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg text-sm font-medium ${
                      darkMode
                        ? 'text-ink-200 hover:bg-ink-800/60'
                        : 'text-ink-700 hover:bg-ink-100'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-brand-400">0{i + 1}.</span>
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
