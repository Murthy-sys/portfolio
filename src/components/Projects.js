import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Monitor, Award, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Profile Evaluator",
      description: "A comprehensive single portal for professional needs where users can check scores, create resumes, learn, and take assessments and certifications.",
      longDescription: "Profile Evaluator is a complete professional development platform that serves as a one-stop solution for career growth. The platform includes features for skill assessment, resume building, learning resources, and professional certifications.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      features: [
        "Professional skill assessment and scoring",
        "Interactive resume builder with templates", 
        "Learning management system with courses",
        "Certification and assessment modules",
        "User progress tracking and analytics",
        "Responsive design for all devices"
      ],
      links: {
        live: "https://profile-evalutor-ui.onrender.com/",
        github: "#"
      },
      category: "Web Application",
      status: "Live",
      year: "2024"
    },
    {
      id: 2,
      title: "Lumo Rentals",
      description: "A comprehensive travel web platform for booking bikes, cars, and tempo vehicles according to user requirements with mobile apps available on both platforms.",
      longDescription: "Lumo Rentals is a full-featured travel rental platform that allows users to book various types of vehicles for their travel needs. The platform includes web and mobile applications with seamless booking experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "React Native", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      features: [
        "Multi-vehicle booking system (bikes, cars, tempo)",
        "Real-time availability checking",
        "Secure payment integration",
        "GPS tracking and navigation",
        "User reviews and ratings system",
        "Cross-platform mobile applications"
      ],
      links: {
        live: "https://www.lumo.rentals/",
        playstore: "https://play.google.com/store/apps/details?id=com.lumo&pcampaignid=web_share",
        appstore: "https://apps.apple.com/in/app/lumo-rentals/id6747010129"
      },
      category: "Full Stack + Mobile",
      status: "Live",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of my recent work in web development, mobile applications, and enterprise solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-purple-900/30 aspect-video flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        {project.category.includes('Mobile') ? (
                          <Smartphone className="w-10 h-10 text-white" />
                        ) : (
                          <Monitor className="w-10 h-10 text-white" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.links.live && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                      )}
                      {project.links.github && project.links.github !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-600" />
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <Zap className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.links.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </motion.a>
                  )}
                  
                  {project.links.playstore && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <Smartphone className="w-4 h-4" />
                      Play Store
                    </motion.a>
                  )}
                  
                  {project.links.appstore && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <Smartphone className="w-4 h-4" />
                      App Store
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 text-white">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring innovative ideas to life. 
              Let's discuss how we can create exceptional digital experiences together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
