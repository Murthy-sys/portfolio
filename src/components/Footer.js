import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();

  const socials = [
    { Icon: Github,   href: 'https://github.com/Murthy-sys',                      label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/malisetti-obulamurthy',      label: 'LinkedIn' },
    { Icon: Mail,     href: 'mailto:mmurthy7702@gmail.com',                       label: 'Email' },
  ];

  const links = [
    { name: 'About',      href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Work',       href: '#projects' },
    { name: 'Contact',    href: '#contact' },
  ];

  return (
    <footer className={`relative overflow-hidden border-t ${
      darkMode ? 'bg-ink-950 border-ink-800' : 'bg-[#fafafa] border-ink-200'
    }`}>
      <div className="absolute inset-0 bg-radial-brand opacity-60 pointer-events-none" />

      {/* Oversized name watermark */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className={`font-display font-semibold tracking-tightest text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.9] pb-4 ${
            darkMode ? 'text-white' : 'text-ink-900'
          }`}
          style={{ letterSpacing: '-0.04em' }}
        >
          OBULAMURTHY
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 border-t border-ink-800/40">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-400 mb-3">
              CONTACT
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
              Open to new opportunities and interesting collaborations worldwide.
            </p>
            <a
              href="mailto:mmurthy7702@gmail.com"
              className={`font-display text-lg font-medium underline-offset-4 hover:underline ${
                darkMode ? 'text-white' : 'text-ink-900'
              }`}
            >
              mmurthy7702@gmail.com
            </a>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-400 mb-3">
              NAVIGATE
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className={`text-sm transition-colors ${
                      darkMode ? 'text-ink-300 hover:text-white' : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-400 mb-3">
              SOCIAL
            </div>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className={`p-2.5 rounded-full border transition-colors ${
                    darkMode
                      ? 'border-ink-800 text-ink-300 hover:border-brand-500 hover:text-white'
                      : 'border-ink-200 text-ink-600 hover:border-brand-500 hover:text-ink-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t ${
          darkMode ? 'border-ink-800' : 'border-ink-200'
        }`}>
          <p className={`font-mono text-[11px] tracking-wider uppercase ${
            darkMode ? 'text-ink-500' : 'text-ink-400'
          }`}>
            © {year} MALISETTI OBULAMURTHY — ALL RIGHTS RESERVED
          </p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase transition-colors ${
              darkMode ? 'text-ink-400 hover:text-white' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
