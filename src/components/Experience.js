import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    id: 1,
    title: 'Technical Lead',
    company: 'Wissen Infotech Pvt. Ltd.',
    location: 'Bangalore, India',
    duration: '01/2022 — Present',
    achievements: [
      'Developed employee and manager modules of the internal service portal using React.js and Redux',
      'Built modular Vue components and managed state with Vuex for the DPSys project',
      'Worked on dashboards for the RAMP project',
      'Integrated REST APIs and implemented form validations across applications',
    ],
    technologies: ['React.js', 'Redux', 'Vue.js', 'Vuex', 'JavaScript', 'REST APIs'],
    isLatest: true,
  },
  {
    id: 2,
    title: 'Senior Analyst',
    company: 'Fidelity National Financial',
    location: 'Bangalore, India',
    duration: '07/2020 — 02/2022',
    achievements: [
      'Prepared management reports using analytical tools',
      'Worked with cross-functional teams on operational workflows',
      'Participated in requirement gathering and solution design sessions',
    ],
    technologies: ['Analytics', 'Reporting'],
  },
  {
    id: 3,
    title: 'Analyst',
    company: 'Fidelity National Financial',
    location: 'Bangalore, India',
    duration: '08/2017 — 01/2020',
    achievements: [
      'Collaborated with teams to improve operational processes',
      'Analyzed business requirements and supported technical solutions',
      'Gained foundational experience in the financial services domain',
    ],
    technologies: ['Business Analysis', 'Financial Services'],
  },
];

const Experience = ({ darkMode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 15%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className={`relative py-28 sm:py-36 ${
        darkMode ? 'bg-ink-900/50' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="CAREER"
          title="Work"
          highlight="history."
          description="Over 7 years across financial services and enterprise software."
        />

        <div ref={ref} className="relative">
          <div className={`absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px ${
            darkMode ? 'bg-ink-800' : 'bg-ink-200'
          }`} />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-brand-500 via-brand-400 to-glow-500 origin-top"
          />

          {experiences.map((exp, index) => {
            const onLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative mb-16 grid md:grid-cols-2 gap-6 md:gap-12 ${
                  onLeft ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 220 }}
                  className="absolute left-[18px] md:left-1/2 top-6 -translate-x-1/2 z-10"
                >
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br from-brand-400 to-glow-500 ring-4 ${
                      darkMode ? 'ring-ink-950' : 'ring-white'
                    }`} />
                    {exp.isLatest && (
                      <div className="absolute inset-0 rounded-full bg-brand-400 animate-pulse-ring" />
                    )}
                  </div>
                </motion.div>

                {/* Card */}
                <div className={`${onLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase mb-3 ${
                    darkMode ? 'text-ink-500' : 'text-ink-400'
                  }`}>
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                    {exp.isLatest && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-400 border border-brand-500/30">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <h3 className={`font-display font-semibold text-2xl sm:text-3xl mb-1 ${
                    darkMode ? 'text-white' : 'text-ink-900'
                  }`}>
                    {exp.title}
                  </h3>

                  <div className={`flex flex-wrap items-center gap-3 text-sm mb-4 ${onLeft ? 'md:justify-end' : ''}`}>
                    <span className="inline-flex items-center gap-1.5 text-brand-400">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className={darkMode ? 'text-ink-500' : 'text-ink-400'}>·</span>
                    <span className={`inline-flex items-center gap-1.5 ${
                      darkMode ? 'text-ink-500' : 'text-ink-400'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
                    {exp.achievements.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: onLeft ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.06 }}
                        className={`flex gap-2 ${onLeft ? 'md:flex-row-reverse md:text-right' : ''}`}
                      >
                        <span className="text-brand-400 mt-1 shrink-0">›</span>
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className={`mt-5 flex flex-wrap gap-2 ${onLeft ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                          darkMode
                            ? 'border-ink-800 bg-ink-900/70 text-ink-300'
                            : 'border-ink-200 bg-ink-50 text-ink-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* empty spacer for the other column */}
                <div className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className={`font-display font-semibold text-2xl mb-6 ${
            darkMode ? 'text-white' : 'text-ink-900'
          }`}>
            Education
          </h3>
          <div className={`flex items-start gap-5 p-6 rounded-2xl border ${
            darkMode ? 'bg-ink-900/60 border-ink-800' : 'bg-white border-ink-200'
          }`}>
            <div className="p-3 rounded-lg bg-gradient-to-br from-brand-500 to-glow-500 shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className={`font-display font-semibold text-lg ${
                darkMode ? 'text-white' : 'text-ink-900'
              }`}>
                B.Tech — Electronics &amp; Communications Engineering
              </p>
              <p className="text-sm text-brand-400 mt-0.5">
                Sri Venkateswara Institute of Technologies
              </p>
              <p className={`mt-1 font-mono text-xs tracking-wider ${
                darkMode ? 'text-ink-500' : 'text-ink-400'
              }`}>
                Anantapur · 04/2016
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
