import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, Cloud, GitBranch, Smartphone, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: Layout,
      color: "from-seagreen-500 to-accent-500",
      skills: [
        { name: "Vue.js", level: 95 },
        { name: "React.js", level: 90 },
        { name: "React Native", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      title: "State Management",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Redux", level: 88 },
        { name: "Vuex", level: 90 },
        { name: "Context API", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Git", level: 88 },
        { name: "Project Management Tools", level: 85 },
        { name: "Agile Methodologies", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-seagreen-100/20 dark:bg-seagreen-900/10 rounded-full blur-3xl"
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
            Technical <span className="bg-gradient-to-r from-seagreen-500 to-accent-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seagreen-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise in modern web technologies and development tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-400 border border-seagreen-100/50 dark:border-seagreen-800/20 glow-seagreen"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="text-xs font-semibold text-seagreen-600 dark:text-seagreen-400"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-2.5 rounded-full bg-gradient-to-r ${category.color} relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competencies Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-seagreen-500 to-accent-500 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Technical Competencies</h3>
            <p className="text-seagreen-100">
              Specialized in creating scalable, maintainable, and user-friendly web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Web Development", desc: "Responsive & Modern" },
              { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform Apps" },
              { icon: GitBranch, title: "Version Control", desc: "Git & Collaboration" },
              { icon: Code, title: "Clean Code", desc: "Best Practices" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-400"
              >
                <item.icon className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-seagreen-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
