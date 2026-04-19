import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Calendar, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const personalInfo = [
  { icon: User,           label: 'Name',       value: 'Malisetti Obulamurthy' },
  { icon: MapPin,         label: 'Location',   value: 'Anantapur, India' },
  { icon: Phone,          label: 'Phone',      value: '+91 7702327702' },
  { icon: Mail,           label: 'Email',      value: 'mmurthy7702@gmail.com' },
  { icon: Calendar,       label: 'Experience', value: '8.7+ Years' },
  { icon: GraduationCap,  label: 'Degree',     value: 'B.Tech, ECE' },
];

const stats = [
  { number: '7+', label: 'Years Experience' },
  { number: '6+',  label: 'Projects Shipped' },
  { number: '100%', label: 'Client Retention' },
];

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`relative py-28 sm:py-36 ${darkMode ? 'bg-ink-950' : 'bg-[#fafafa]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="01 / ABOUT"
          title="Building interfaces with"
          highlight="precision & craft."
          description="I design and engineer user interfaces at the intersection of usability and performance, translating complex enterprise workflows into intuitive experiences."
        />

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
              I'm a front-end engineer with nearly a decade of experience shaping web and mobile
              products across financial services, aviation compliance, and consumer travel. I care
              deeply about interaction detail, accessibility, and the quiet engineering that makes
              complex UIs feel effortless.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
              Currently leading UI initiatives at{' '}
              <span className={darkMode ? 'text-white font-medium' : 'text-ink-900 font-medium'}>
                Wissen Infotech
              </span>{' '}
              — designing modular component systems in Vue and architecting dashboards in React
              that teams across time zones depend on daily.
            </p>

            {/* Contact grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-6">
              {personalInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={`spotlight flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                    darkMode
                      ? 'border-ink-800 bg-ink-900/40 hover:border-ink-700'
                      : 'border-ink-200 bg-white hover:border-ink-300'
                  }`}
                >
                  <div className={`p-2 rounded-md ${
                    darkMode ? 'bg-ink-800 text-brand-400' : 'bg-brand-50 text-brand-600'
                  }`}>
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className={`font-mono text-[10px] tracking-widest uppercase ${
                      darkMode ? 'text-ink-500' : 'text-ink-400'
                    }`}>
                      {info.label}
                    </p>
                    <p className={`text-sm font-medium truncate ${
                      darkMode ? 'text-ink-100' : 'text-ink-900'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: stats + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`relative p-6 rounded-xl overflow-hidden spotlight border ${
                    darkMode
                      ? 'bg-ink-900/60 border-ink-800'
                      : 'bg-white border-ink-200'
                  }`}
                >
                  <div className="font-display font-semibold text-4xl sm:text-5xl tracking-tightest bg-gradient-to-br from-brand-300 to-glow-400 bg-clip-text text-transparent">
                    {s.number}
                  </div>
                  <div className={`mt-2 font-mono text-[10px] tracking-widest uppercase ${
                    darkMode ? 'text-ink-400' : 'text-ink-500'
                  }`}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`relative p-7 rounded-2xl overflow-hidden ${
                darkMode ? 'bg-ink-900 border border-ink-800' : 'bg-white border border-ink-200'
              }`}
            >
              <div className="absolute inset-0 opacity-60 pointer-events-none bg-radial-brand" />
              <h3 className={`relative font-display font-semibold text-xl mb-4 ${
                darkMode ? 'text-white' : 'text-ink-900'
              }`}>
                Professional Highlights
              </h3>
              <ul className={`relative space-y-3 text-sm ${
                darkMode ? 'text-ink-300' : 'text-ink-600'
              }`}>
                {[
                  'Built interactive employee & manager modules with React + Redux',
                  'Architected modular Vue components and Vuex workflows for DPSys',
                  'Designed RAMP dashboards evaluating aviation airworthiness',
                  'Integrated REST APIs, elevating UI performance and validation coverage',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex gap-3"
                  >
                    <span className="font-mono text-brand-400 text-xs mt-0.5">
                      0{i + 1}
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
