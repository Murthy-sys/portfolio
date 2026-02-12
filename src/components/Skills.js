import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, Cloud, GitBranch, Smartphone, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
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
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Redux", level: 88 },
        { name: "Vuex", level: 90 },
        { name: "Context API", level: 85 }
      ]
    },
    // {
    //   title: "Backend & APIs",
    //   icon: Code,
    //   color: "from-purple-500 to-pink-500",
    //   skills: [
    //     { name: "NestJS", level: 40 },
    //     { name: "Node.js", level: 40 },
    //     { name: "REST APIs", level: 50 },
    //     { name: "API Testing with Postman", level: 95 }
    //   ]
    // },
    // {
    //   title: "Databases",
    //   icon: Database,
    //   color: "from-orange-500 to-red-500",
    //   skills: [
    //     { name: "MongoDB", level: 40 },
    //   ]
    // },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git", level: 88 },
        { name: "Project Management Tools", level: 85 },
        { name: "Agile Methodologies", level: 90 }
      ]
    }
    // {
    //   title: "Cloud & DevOps",
    //   icon: Cloud,
    //   color: "from-teal-500 to-blue-500",
    //   skills: [
    //     { name: "AWS (Beginner)", level: 40 },
    //     { name: "CI/CD", level: 40 }
    //   ]
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-4"></div>
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
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Technical Competencies</h3>
            <p className="text-primary-100">
              Specialized in creating scalable, maintainable, and user-friendly web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Web Development</h4>
              <p className="text-sm text-primary-100">Responsive & Modern</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Mobile Development</h4>
              <p className="text-sm text-primary-100">Cross-platform Apps</p>
            </div>
            <div className="text-center">
              <GitBranch className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Version Control</h4>
              <p className="text-sm text-primary-100">Git & Collaboration</p>
            </div>
            <div className="text-center">
              <Code className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Clean Code</h4>
              <p className="text-sm text-primary-100">Best Practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
