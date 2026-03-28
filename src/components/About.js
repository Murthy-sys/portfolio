import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: "Full Name", value: "Malisetti Obulamurthy" },
    { icon: MapPin, label: "Location", value: "Tarimela, Anantapur, India 515611" },
    { icon: Phone, label: "Phone", value: "+91 7702327702" },
    { icon: Mail, label: "Email", value: "mmurthy7702@gmail.com" },
    { icon: Calendar, label: "Experience", value: "8.7+ Years" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech in ECE" },
  ];

  const stats = [
    { number: "8.7+", label: "Years Experience" },
    { number: "4+", label: "Projects Completed" },
    { number: "2", label: "Major Platforms" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-0 w-72 h-72 border border-seagreen-100/40 dark:border-seagreen-800/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-0 w-48 h-48 border border-accent-100/30 dark:border-accent-800/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-seagreen-500 to-accent-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seagreen-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I am a passionate Front-End Developer with over 7 years of expertise in crafting 
                  responsive, dynamic web applications. My journey in web development has been driven 
                  by a constant desire to learn and implement cutting-edge technologies.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  Specializing in JavaScript frameworks like Vue.js and React.js, I have successfully 
                  delivered clean, efficient code for enterprise applications. My experience spans across 
                  various domains including financial services, employee management systems, and 
                  regulatory compliance platforms.
                </motion.p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-3 p-4 bg-seagreen-50/50 dark:bg-seagreen-900/10 rounded-xl hover:bg-seagreen-50 dark:hover:bg-seagreen-900/20 transition-all duration-400 border border-transparent hover:border-seagreen-200 dark:hover:border-seagreen-800/30"
                  >
                    <div className="flex-shrink-0 p-2 bg-seagreen-100 dark:bg-seagreen-800/30 rounded-lg">
                      <info.icon className="w-5 h-5 text-seagreen-600 dark:text-seagreen-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 * index, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-seagreen-50 to-accent-50 dark:from-gray-800 dark:to-seagreen-900/20 rounded-xl hover:shadow-lg transition-all duration-400 border border-seagreen-100/50 dark:border-seagreen-800/20 glow-seagreen"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-seagreen-600 to-accent-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-seagreen-500 to-accent-500 p-8 rounded-2xl text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Developed interactive employee and manager modules using React.js and Redux",
                  "Created modular Vue components and managed workflows with Vuex",
                  "Integrated REST APIs and enhanced UI performance through validations",
                  "Delivered clean, efficient front-end code for enterprise applications"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0 animate-pulse" />
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
