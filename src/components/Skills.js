import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Wrench, Globe, Smartphone, GitBranch, Code } from 'lucide-react';
import SectionHeading from './SectionHeading';
import FloatingBubbles from './FloatingBubbles';

const techBubbles = [
  { label: 'React',         color: '#61dafb', size: 'lg' },
  { label: 'Vue.js',        color: '#41b883', size: 'lg' },
  { label: 'JavaScript',    color: '#f7df1e', size: 'lg' },
  { label: 'React Native',  color: '#61dafb', size: 'md' },
  { label: 'Redux',         color: '#764abc', size: 'md' },
  { label: 'Vuex',          color: '#41b883', size: 'sm' },
  { label: 'Pinia',         color: '#ffd859', size: 'sm' },
  { label: 'Tailwind',      color: '#38bdf8', size: 'md' },
  { label: 'Node.js',       color: '#3c873a', size: 'md' },
  { label: 'REST APIs',     color: '#6366f1', size: 'sm' },
  { label: 'HTML5',         color: '#e34f26', size: 'sm' },
  { label: 'CSS3',          color: '#1572b6', size: 'sm' },
  { label: 'Git',           color: '#f05033', size: 'sm' },
  { label: 'Vite',          color: '#a855f7', size: 'sm' },
  { label: 'Jest',          color: '#c63d14', size: 'sm' },
];

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: Layout,
    skills: [
      { name: 'Vue.js',       level: 95 },
      { name: 'React.js',     level: 92 },
      { name: 'React Native', level: 82 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript',   level: 95 },
    ],
  },
  {
    title: 'State & Data',
    icon: Database,
    skills: [
      { name: 'Redux / Toolkit', level: 90 },
      { name: 'Vuex / Pinia',    level: 92 },
      { name: 'Context API',     level: 88 },
      { name: 'REST / GraphQL',  level: 85 },
    ],
  },
  {
    title: 'Tooling & Process',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub',   level: 92 },
      { name: 'Vite / Webpack', level: 85 },
      { name: 'Agile / Scrum',  level: 92 },
      { name: 'Jira / Azure',   level: 88 },
    ],
  },
];

const competencies = [
  { icon: Globe,      title: 'Web Development',   desc: 'Responsive web apps' },
  { icon: Smartphone, title: 'Mobile Apps',       desc: 'React Native' },
  { icon: GitBranch,  title: 'Version Control',   desc: 'Git and GitHub' },
  { icon: Code,       title: 'Agile',             desc: 'Scrum ceremonies' },
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`relative py-28 sm:py-36 ${darkMode ? 'bg-ink-950' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="SKILLS"
          title="Tech"
          highlight="stack."
          description="Tools and technologies I use to build web and mobile applications."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`spotlight relative p-7 rounded-2xl border ${
                darkMode ? 'bg-ink-900/60 border-ink-800' : 'bg-white border-ink-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg ${
                  darkMode ? 'bg-ink-800 text-brand-400' : 'bg-brand-50 text-brand-600'
                }`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className={`font-display font-semibold text-lg ${
                  darkMode ? 'text-white' : 'text-ink-900'
                }`}>
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-ink-200' : 'text-ink-700'
                      }`}>
                        {s.name}
                      </span>
                      <span className="font-mono text-[10px] text-brand-400">
                        {s.level}%
                      </span>
                    </div>
                    <div className={`h-1 rounded-full overflow-hidden ${
                      darkMode ? 'bg-ink-800' : 'bg-ink-100'
                    }`}>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: s.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: 'left' }}
                        className="h-full bg-gradient-to-r from-brand-500 via-brand-400 to-glow-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competencies banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative mt-12 rounded-3xl p-8 sm:p-10 overflow-hidden ${
            darkMode ? 'bg-ink-900 border border-ink-800' : 'bg-white border border-ink-200'
          }`}
        >
          <div className="absolute inset-0 bg-radial-brand opacity-80 pointer-events-none" />
          <div className="relative grid md:grid-cols-4 gap-6">
            {competencies.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1 ${
                  darkMode ? 'bg-ink-800 text-brand-400' : 'bg-brand-50 text-brand-600'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className={`font-display font-semibold text-lg ${
                  darkMode ? 'text-white' : 'text-ink-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`mt-1 text-sm ${darkMode ? 'text-ink-400' : 'text-ink-500'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating tech bubbles */}
        <div className="relative mt-16">
          <div className="text-center mb-6">
            <span className={`font-mono text-[10px] tracking-widest uppercase ${
              darkMode ? 'text-ink-500' : 'text-ink-400'
            }`}>
              The stack
            </span>
          </div>
          <FloatingBubbles items={techBubbles} darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
