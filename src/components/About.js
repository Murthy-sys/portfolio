import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Calendar, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import profileImage from '../IMG_5330.jpg';

const personalInfo = [
  { icon: User,           label: 'Name',       value: 'Malisetti Obulamurthy' },
  { icon: MapPin,         label: 'Location',   value: 'Anantapur, India' },
  { icon: Phone,          label: 'Phone',      value: '+91 7702327702' },
  { icon: Mail,           label: 'Email',      value: 'mmurthy7702@gmail.com' },
  { icon: Calendar,       label: 'Experience', value: '8+ Years' },
  { icon: GraduationCap,  label: 'Degree',     value: 'B.Tech, ECE' },
];

const stats = [
  { number: '8+',  label: 'Years Experience' },
  { number: '5+',  label: 'Projects Shipped' },
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
          eyebrow="ABOUT"
          title="A bit"
          highlight="about me."
          description="Front-end developer focused on building reliable web and mobile applications."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <TiltCard intensity={4}>
                <div
                  className={`relative aspect-[4/5] rounded-3xl overflow-hidden gradient-border ${
                    darkMode ? 'bg-ink-900' : 'bg-white'
                  }`}
                  style={{
                    boxShadow:
                      '0 30px 80px -20px rgba(99,102,241,0.25), 0 10px 30px -10px rgba(0,0,0,0.25)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Soft brand-tinted backdrop visible behind the contained image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: darkMode
                        ? 'radial-gradient(circle at 50% 30%, rgba(99,102,241,0.25), rgba(14,14,19,1) 70%)'
                        : 'radial-gradient(circle at 50% 30%, rgba(99,102,241,0.12), rgba(244,244,245,1) 70%)',
                    }}
                  />

                  <img
                    src={profileImage}
                    alt="Malisetti Obulamurthy"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ transform: 'translateZ(0)' }}
                  />

                  {/* Soft gradient bottom for caption legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-right available badge */}
                  <div
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase backdrop-blur-md bg-black/40 text-white border border-white/10"
                    style={{ transform: 'translateZ(60px)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AVAILABLE
                  </div>

                  {/* Bottom caption */}
                  <div
                    className="absolute inset-x-0 bottom-0 p-5 text-white"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <p className="font-display font-semibold text-lg leading-tight">
                      Malisetti Obulamurthy
                    </p>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/70 mt-1">
                      Bangalore · India
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>

          {/* Right: narrative + contact + stats + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-5">
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
                I'm a front-end developer with over 8 years of experience building web and mobile
                applications. I've worked across financial services and enterprise software,
                primarily with React, Vue, and JavaScript.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
                Currently a Technical Lead at{' '}
                <span className={darkMode ? 'text-white font-medium' : 'text-ink-900 font-medium'}>
                  Wissen Infotech
                </span>
                , working on Vue and React applications for internal portals and enterprise
                dashboards.
              </p>
            </div>

            {/* Stats */}
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

            {/* Contact grid */}
            <div className="grid sm:grid-cols-2 gap-3">
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
                  'Built employee and manager modules for internal portals using React and Redux',
                  'Developed modular Vue components and managed state with Vuex',
                  'Worked on dashboards for the RAMP project',
                  'Integrated REST APIs and added form validations across applications',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex gap-3"
                  >
                    <span className="text-brand-400 mt-1.5 shrink-0">›</span>
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
