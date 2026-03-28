import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Technical Lead",
      company: "Wissen Infotech Pvt. Ltd.",
      location: "Bangalore, India",
      duration: "01/2022 - Current",
      type: "Full-time",
      achievements: [
        "Developed interactive employee and manager modules for internal service portal using React.js and Redux",
        "Created reusable components and integrated Redux for effective state management",
        "Ensured responsive UI across browsers by integrating REST APIs",
        "Designed modular Vue components and managed workflows with Vuex for DPSys project",
        "Participated in Agile ceremonies to foster team collaboration",
        "Focused on dynamic, data-driven UI to improve design lifecycle management",
        "Designed dashboards for RAMP project to evaluate engine airworthiness efficiently",
        "Enhanced UI performance through rigorous validations and seamless API integrations"
      ],
      technologies: ["React.js", "Redux", "Vue.js", "Vuex", "REST APIs", "JavaScript", "HTML5", "CSS3"],
      isLatest: true
    },
    {
      id: 2,
      title: "Senior Analyst",
      company: "Fidelity National Financial India",
      location: "Bangalore, India",
      duration: "07/2020 - 02/2022",
      type: "Full-time",
      achievements: [
        "Developed comprehensive reports for management using advanced analytical tools",
        "Collaborated with cross-functional teams to improve operational processes and efficiencies",
        "Implemented data-driven solutions to optimize business workflows",
        "Participated in requirement gathering and solution design sessions"
      ],
      technologies: ["Analytics Tools", "Data Visualization", "Process Optimization"],
      isLatest: false
    },
    {
      id: 3,
      title: "Analyst",
      company: "Fidelity National Financial India",
      location: "Bangalore, India",
      duration: "08/2017 - 01/2020",
      type: "Full-time",
      achievements: [
        "Collaborated with teams to improve operational processes and efficiencies",
        "Analyzed business requirements and provided technical solutions",
        "Supported various projects with analytical and technical expertise",
        "Gained foundational experience in financial services domain"
      ],
      technologies: ["Business Analysis", "Process Improvement", "Technical Documentation"],
      isLatest: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-seagreen-50/30 dark:bg-dark-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-32 h-32 bg-seagreen-200/20 dark:bg-seagreen-800/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-seagreen-500 to-accent-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seagreen-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Over 7 years of experience in front-end development and technical leadership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-seagreen-500 to-accent-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <motion.div
                  whileInView={{ scale: [0, 1.3, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-5 h-5 bg-gradient-to-r from-seagreen-500 to-accent-500 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"
                >
                  {exp.isLatest && (
                    <div className="absolute inset-0 rounded-full bg-seagreen-500 animate-ping opacity-40"></div>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-400 border border-seagreen-100/50 dark:border-seagreen-800/20 glow-seagreen"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-seagreen-600 dark:text-seagreen-400 font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                    {exp.isLatest && (
                      <span className="bg-gradient-to-r from-seagreen-500 to-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <ChevronRight className="w-3 h-3 text-seagreen-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="bg-seagreen-50 dark:bg-seagreen-900/20 text-seagreen-700 dark:text-seagreen-300 px-2 py-1 rounded-md text-xs font-medium border border-seagreen-200/50 dark:border-seagreen-700/30 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg border border-seagreen-100/50 dark:border-seagreen-800/20 max-w-2xl mx-auto glow-seagreen"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-seagreen-500 to-accent-500 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-seagreen-600 dark:text-seagreen-400 font-semibold mb-2">
                  Electrical, Electronics And Communications Engineering
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Sri Venkateswara Institute of Technologies</span>
                  <span>•</span>
                  <span>Anantapur</span>
                  <span>•</span>
                  <span>04/2016</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
