import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: "Full Name", value: "Malisetti Obulamurthy" },
    { icon: MapPin, label: "Location", value: "Tarimela, Anantapur, India 515611" },
    { icon: Phone, label: "Phone", value: "+91 7702327702" },
    { icon: Mail, label: "Email", value: "mmurthy7702@gmail.com" },
    { icon: Calendar, label: "Experience", value: "7+ Years" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech in ECE" },
  ];

  const stats = [
    { number: "7+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Major Platforms" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am a passionate Front-End Developer with over 7 years of expertise in crafting 
                  responsive, dynamic web applications. My journey in web development has been driven 
                  by a constant desire to learn and implement cutting-edge technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Specializing in JavaScript frameworks like Vue.js and React.js, I have successfully 
                  delivered clean, efficient code for enterprise applications. My experience spans across 
                  various domains including financial services, employee management systems, and 
                  regulatory compliance platforms.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-gray-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-purple-500 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed interactive employee and manager modules using React.js and Redux</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Created modular Vue components and managed workflows with Vuex</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated REST APIs and enhanced UI performance through validations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered clean, efficient front-end code for enterprise applications</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
