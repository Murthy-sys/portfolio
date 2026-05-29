import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import BrowserPreview from './projects/BrowserPreview';
import PhonePreview from './projects/PhonePreview';

const projects = [
  {
    id: 1,
    title: 'Profile Evaluator',
    tagline: 'Career development platform',
    role: 'Front-End Developer',
    description:
      'A web app where users can check scores, build resumes, access learning material, and take assessments and certifications — all from a single portal.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind'],
    category: 'Web Application',
    year: '2026',
    links: { live: 'https://profile-evalutor-ui.onrender.com/', github: null },
    accent: { from: '#6366f1', to: '#8b5cf6' },
    preview: 'web',
    previewData: {
      domain: 'profile-evalutor.onrender.com',
      navItems: ['Assessments', 'Resume', 'Learn'],
      hero: {
        eyebrow: 'CAREER PLATFORM',
        title: 'Profile Evaluator',
        sub: 'Build your resume, assess your skills, and earn certifications in one place.',
      },
      cta: 'Get started',
      cards: [
        { title: 'Assessments', meta: '120+ tests' },
        { title: 'Resume',      meta: 'Templates' },
        { title: 'Certify',     meta: 'Industry' },
      ],
    },
  },
  {
    id: 2,
    num: '02',
    title: 'Lumo Rentals',
    tagline: 'Multi-vehicle booking platform',
    role: 'Full-Stack & Mobile Lead',
    description:
      'A travel platform for booking bikes, cars, and tempo vehicles, with web and mobile apps available on Android and iOS.',
    technologies: ['React.js', 'React Native', 'Java', 'Postgres', 'Payments'],
    category: 'Full-Stack · Mobile',
    year: '2025',
    links: {
      live: 'https://www.lumo.rentals/',
      playstore: 'https://play.google.com/store/apps/details?id=com.lumo&pcampaignid=web_share',
      appstore: 'https://apps.apple.com/in/app/lumo-rentals/id6747010129',
    },
    accent: { from: '#FFAA0A', to: '#FF7A00' },
    preview: 'mobile',
    previewData: {
      appName: 'Lumo',
      tagline: 'Nellore, India',
      variant: 'list',
      chips: ['Bikes', 'Cars', 'Tempo'],
      items: [
        { name: 'Royal Enfield 350',   rating: '4.8', price: '₹799/day' },
        { name: 'Honda City',          rating: '4.7', price: '₹2,499/day' },
        { name: 'Tata Ace Tempo',      rating: '4.6', price: '₹1,899/day' },
      ],
    },
  },
  {
    id: 3,
    num: '03',
    title: 'Good Plastics',
    tagline: 'Bioplastic sustainability site',
    role: 'Front-End Developer',
    description:
      'A website for a bioplastic manufacturer that makes biodegradable PHA alternatives to regular plastic. Covers their products, services, and consulting offerings.',
    technologies: ['React.js', 'TypeScript', 'Tailwind', 'Vite'],
    category: 'Web Application',
    year: '2026',
    links: { live: 'https://good-plastics.onrender.com', github: null },
    accent: { from: '#3d6e47', to: '#2d5a3d' },
    previewBg: '#faf7f2',
    preview: 'web',
    previewData: {
      domain: 'good-plastics.onrender.com',
      brandName: 'GOOD PLASTICS',
      navItems: ['Why Bioplastics', 'Technology', 'Services'],
      hero: {
        eyebrow: 'REDEFINING SUSTAINABILITY',
        title: 'Pioneering Plastic with Purpose.',
        sub: 'A customer-centric manufacturer offering a full suite of bioplastic capabilities — 100% biodegradable materials that leave no trace.',
      },
      cta: 'Get Started',
      cards: [
        { title: 'Nature',    meta: 'Regenerative' },
        { title: 'Circular',  meta: 'End-to-end' },
        { title: 'Materials', meta: 'PHA pellets' },
      ],
    },
  },
  {
    id: 4,
    num: '04',
    title: 'Spark',
    tagline: 'Dating platform',
    role: 'Mobile Developer',
    description:
      'A dating mobile app with swipe-based matching, chat, profile management, and location-based suggestions.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'Mobile App',
    year: '2026',
    links: {},
    accent: { from: '#f43f5e', to: '#ec4899' },
    preview: 'mobile',
    previewData: {
      appName: 'Spark',
      tagline: 'Nearby',
      variant: 'stack',
      cardStack: [
        { name: 'Alex',   age: 26, location: '3 km away',  from: '#818cf8', to: '#6366f1' },
        { name: 'Sofia',  age: 24, location: '1.2 km away', from: '#fb7185', to: '#ec4899' },
      ],
    },
  },
];

const renderPreview = (project, darkMode) =>
  project.preview === 'mobile' ? (
    <PhonePreview project={project} darkMode={darkMode} />
  ) : (
    <BrowserPreview project={project} darkMode={darkMode} />
  );

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="PROJECTS"
          title="Selected"
          highlight="projects."
          description="A few things I've built recently."
        />

        <div className="space-y-32">
          {projects.map((p, index) => {
            const flip = index % 2 === 1;
            const accentGlow = `${p.accent.from}33`;
            const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
            const idx = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Compiler / build-log strip */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`mb-5 flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-wide holo-card rounded-lg px-3 py-2 w-fit max-w-full overflow-hidden ${darkMode ? 'text-ink-400' : 'text-ink-500'}`}
                >
                  <span className={darkMode ? 'text-neon-cyan' : 'text-cyan-600'}>$</span>
                  <span className={darkMode ? 'text-ink-300' : 'text-ink-600'}>compile</span>
                  <span className={darkMode ? 'text-white' : 'text-ink-900'}>{slug}_{idx}</span>
                  <span className={darkMode ? 'text-ink-600' : 'text-ink-400'}>—</span>
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className={darkMode ? 'text-emerald-400' : 'text-emerald-600'}
                  >
                    ✓ build passed
                  </motion.span>
                  <span className={`animate-blink ${darkMode ? 'text-neon-cyan' : 'text-cyan-600'}`}>▋</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6 + index * 0.6,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    flip ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                {/* Visual preview */}
                <TiltCard intensity={5} className="lg:col-span-7">
                  <div
                    className={`relative aspect-[16/11] rounded-3xl overflow-hidden holo-border ${
                      darkMode ? 'bg-ink-900' : 'bg-white'
                    }`}
                    style={{
                      boxShadow: `0 30px 80px -20px ${accentGlow}, 0 10px 30px -10px rgba(0,0,0,0.2)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {renderPreview(p, darkMode)}

                    {/* Corner badge */}
                    <div
                      className={`absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase backdrop-blur-md ${
                        darkMode
                          ? 'bg-ink-950/60 text-ink-200 border border-ink-800'
                          : 'bg-white/70 text-ink-700 border border-ink-200'
                      }`}
                      style={{ transform: 'translateZ(70px)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: p.accent.from }}
                      />
                      LIVE · {p.year}
                    </div>

                    {/* Link pill */}
                    {p.links.live && (
                      <motion.a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        style={{ transform: 'translateZ(70px)' }}
                        className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium backdrop-blur-md transition-colors ${
                          darkMode
                            ? 'bg-ink-950/60 text-white border border-ink-800 hover:bg-ink-900'
                            : 'bg-white/80 text-ink-900 border border-ink-200 hover:bg-white'
                        }`}
                      >
                        Visit
                        <ArrowUpRight className="w-3 h-3" />
                      </motion.a>
                    )}
                  </div>
                </TiltCard>

                {/* Details */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="h-px w-10"
                      style={{ background: p.accent.from }}
                    />
                    <span
                      className={`font-mono text-[10px] tracking-widest uppercase ${
                        darkMode ? 'text-ink-500' : 'text-ink-400'
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-semibold text-3xl sm:text-4xl tracking-tightest leading-tight mb-2 ${
                      darkMode ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-5 ${
                      darkMode ? 'text-ink-300' : 'text-ink-600'
                    }`}
                  >
                    {p.tagline}
                  </p>

                  {/* Meta grid */}
                  <dl className={`grid grid-cols-2 gap-y-3 gap-x-6 mb-6 pb-6 border-b ${
                    darkMode ? 'border-ink-800' : 'border-ink-200'
                  }`}>
                    <div>
                      <dt className={`font-mono text-[9px] tracking-widest uppercase mb-0.5 ${
                        darkMode ? 'text-ink-500' : 'text-ink-400'
                      }`}>Role</dt>
                      <dd className={`text-xs font-medium ${
                        darkMode ? 'text-ink-200' : 'text-ink-800'
                      }`}>{p.role}</dd>
                    </div>
                    <div>
                      <dt className={`font-mono text-[9px] tracking-widest uppercase mb-0.5 ${
                        darkMode ? 'text-ink-500' : 'text-ink-400'
                      }`}>Year</dt>
                      <dd className={`text-xs font-medium ${
                        darkMode ? 'text-ink-200' : 'text-ink-800'
                      }`}>{p.year}</dd>
                    </div>
                  </dl>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      darkMode ? 'text-ink-400' : 'text-ink-500'
                    }`}
                  >
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-md border ${
                          darkMode
                            ? 'border-ink-800 bg-ink-900/80 text-ink-300'
                            : 'border-ink-200 bg-ink-50 text-ink-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {p.links.live && (
                      <motion.a
                        whileHover={{ x: 4 }}
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: p.accent.from }}
                      >
                        Visit site
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </motion.a>
                    )}
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          darkMode ? 'text-ink-300 hover:text-white' : 'text-ink-600 hover:text-ink-900'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    )}
                    {p.links.playstore && (
                      <a
                        href={p.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          darkMode ? 'text-ink-300 hover:text-white' : 'text-ink-600 hover:text-ink-900'
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
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          darkMode ? 'text-ink-300 hover:text-white' : 'text-ink-600 hover:text-ink-900'
                        }`}
                      >
                        App Store
                      </a>
                    )}
                  </div>
                </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
