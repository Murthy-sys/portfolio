import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Monitor, Leaf, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Profile Evaluator',
    tagline: 'Unified career development platform',
    description:
      'A single portal for professional needs — score assessments, resume building, learning paths, and certifications, delivered as a polished, responsive React experience.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind'],
    category: 'Web Application',
    year: '2024',
    links: { live: 'https://profile-evalutor-ui.onrender.com/', github: null },
    Icon: Monitor,
  },
  {
    id: 2,
    num: '02',
    title: 'Lumo Rentals',
    tagline: 'Multi-vehicle booking platform',
    description:
      'A full-stack travel rental platform spanning bikes, cars, and tempo vehicles with web and native mobile apps on both iOS and Android — payments, reviews, and GPS included.',
    technologies: ['React.js', 'React Native', 'Java', 'Postgress', 'Payments'],
    category: 'Full Stack · Mobile',
    year: '2024',
    links: {
      live: 'https://www.lumo.rentals/',
      playstore: 'https://play.google.com/store/apps/details?id=com.lumo&pcampaignid=web_share',
      appstore: 'https://apps.apple.com/in/app/lumo-rentals/id6747010129',
    },
    Icon: Smartphone,
  },
  {
    id: 3,
    num: '03',
    title: 'Good Plastics',
    tagline: 'Bioplastic sustainability platform',
    description:
      'A marketing and product site for a bioplastic manufacturer pioneering 100% biodegradable PHA alternatives that decompose safely in marine, freshwater, and soil environments — backed by two decades of industry expertise in circular-economy transitions.',
    technologies: ['React.js', 'TypeScript', 'Tailwind', 'Vite'],
    category: 'Web Application',
    year: '2025',
    links: { live: 'https://good-plastics.onrender.com', github: null },
    Icon: Leaf,
  },
  {
    id: 4,
    num: '04',
    title: 'Spark',
    tagline: 'Dating platform',
    description:
      'A modern dating mobile application where users discover meaningful connections through intuitive swipe-based matching, real-time chat, rich profile customization, and location-aware recommendations — crafted for a smooth, delightful mobile-first experience.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'Mobile App',
    year: '2025',
    links: {},
    Icon: Smartphone,
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`relative py-28 sm:py-36 ${darkMode ? 'bg-ink-900/50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="04 / SELECTED WORK"
          title="Projects that"
          highlight="ship & scale."
          description="A handful of recent endeavors spanning internal tooling, enterprise dashboards, and consumer platforms."
        />

        <div className="space-y-28">
          {projects.map((p, index) => {
            const flip = index % 2 === 1;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  flip ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Visual card */}
                <TiltCard className="lg:col-span-7 group">
                  <div
                    className={`relative rounded-3xl border overflow-hidden spotlight gradient-border ${
                      darkMode
                        ? 'bg-ink-900 border-ink-800'
                        : 'bg-white border-ink-200'
                    }`}
                  >
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-500/20 via-ink-900/40 to-glow-500/15 flex items-center justify-center">
                      <div className="absolute inset-0 grid-bg opacity-60" />
                      <div className="absolute inset-0 bg-radial-brand" />
                      <motion.div
                        whileHover={{ y: -6, rotate: 2 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                        className="relative text-center p-8"
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-glow-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/30">
                          <p.Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className={`font-display font-semibold text-2xl mb-1 ${
                          darkMode ? 'text-white' : 'text-ink-900'
                        }`}>
                          {p.title}
                        </h3>
                        <p className={`font-mono text-[10px] tracking-widest uppercase ${
                          darkMode ? 'text-ink-400' : 'text-ink-500'
                        }`}>
                          {p.category}
                        </p>
                      </motion.div>
                    </div>

                    {/* Bottom chrome */}
                    <div className={`flex items-center justify-between px-6 py-4 border-t ${
                      darkMode ? 'border-ink-800 bg-ink-900/80' : 'border-ink-200 bg-white'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="font-mono text-[10px] tracking-widest uppercase text-ink-400">
                          Live · {p.year}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {p.links.live && (
                          <a
                            href={p.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full border transition-colors ${
                              darkMode
                                ? 'border-ink-700 text-ink-300 hover:border-brand-500 hover:text-white'
                                : 'border-ink-200 text-ink-600 hover:border-brand-500 hover:text-ink-900'
                            }`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {p.links.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full border transition-colors ${
                              darkMode
                                ? 'border-ink-700 text-ink-300 hover:border-brand-500 hover:text-white'
                                : 'border-ink-200 text-ink-600 hover:border-brand-500 hover:text-ink-900'
                            }`}
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>

                {/* Details */}
                <div className="lg:col-span-5">
                  <div className="font-mono text-sm text-brand-400 mb-4">{p.num} —</div>
                  <h3 className={`font-display font-semibold text-3xl sm:text-4xl tracking-tightest leading-tight mb-3 ${
                    darkMode ? 'text-white' : 'text-ink-900'
                  }`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm font-medium mb-4 ${
                    darkMode ? 'text-ink-300' : 'text-ink-600'
                  }`}>
                    {p.tagline}
                  </p>
                  <p className={`text-base leading-relaxed mb-6 ${
                    darkMode ? 'text-ink-400' : 'text-ink-500'
                  }`}>
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                          darkMode
                            ? 'border-ink-800 bg-ink-900 text-ink-300'
                            : 'border-ink-200 bg-ink-50 text-ink-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {p.links.live && (
                      <motion.a
                        whileHover={{ x: 4 }}
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center gap-2 text-sm font-medium border-b pb-1 transition-colors ${
                          darkMode
                            ? 'border-ink-700 text-white hover:border-brand-400'
                            : 'border-ink-300 text-ink-900 hover:border-brand-500'
                        }`}
                      >
                        Visit site
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </motion.a>
                    )}
                    {p.links.playstore && (
                      <a
                        href={p.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium border-b pb-1 ${
                          darkMode ? 'border-ink-700 text-ink-300 hover:text-white' : 'border-ink-300 text-ink-600 hover:text-ink-900'
                        }`}
                      >
                        Play Store
                      </a>
                    )}
                    {p.links.appstore && (
                      <a
                        href={p.links.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium border-b pb-1 ${
                          darkMode ? 'border-ink-700 text-ink-300 hover:text-white' : 'border-ink-300 text-ink-600 hover:text-ink-900'
                        }`}
                      >
                        App Store
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
