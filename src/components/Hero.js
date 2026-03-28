import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.04, duration: 0.5, ease: "easeOut" }
    })
  };

  const subtitle = "Front-End Developer";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-seagreen-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-900 dark:to-seagreen-900/10">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-seagreen-200/20 dark:bg-seagreen-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-seagreen-300/10 dark:bg-seagreen-700/10 rounded-full blur-2xl"
        />
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] border border-seagreen-200/20 dark:border-seagreen-700/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] border border-dashed border-accent-200/15 dark:border-accent-700/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200, damping: 15 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-seagreen-500 to-accent-500 p-1 glow-seagreen"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-seagreen-50 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-4xl sm:text-5xl font-bold text-seagreen-600 dark:text-seagreen-400">
                  OM
                </div>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-r from-seagreen-400 to-accent-400 rounded-full blur-xl opacity-30"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-seagreen-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
              >
                Available for hire
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
              <span className="text-shimmer">
                Malisetti Obulamurthy
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 flex justify-center flex-wrap">
              {subtitle.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate Front-End Developer with <span className="text-seagreen-600 dark:text-seagreen-400 font-semibold">7+ years</span> of experience in creating 
            responsive, dynamic web applications using cutting-edge JavaScript 
            frameworks like <span className="text-seagreen-600 dark:text-seagreen-400 font-semibold">Vue.js</span> and <span className="text-seagreen-600 dark:text-seagreen-400 font-semibold">React.js</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(46, 139, 87, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-seagreen-500 to-accent-500 hover:from-seagreen-600 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-500 flex items-center gap-2"
            >
              Explore My Work
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group bg-transparent border-2 border-seagreen-500 text-seagreen-600 dark:text-seagreen-400 dark:border-seagreen-400 hover:bg-seagreen-500 hover:text-white dark:hover:bg-seagreen-500 font-semibold py-4 px-8 rounded-full transition-all duration-500 flex items-center gap-2"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Mail, href: "mailto:mmurthy7702@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://linkedin.com/in/malisetti-obulamurthy", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Murthy-sys", label: "GitHub" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-400 text-gray-600 dark:text-gray-300 hover:text-seagreen-600 dark:hover:text-seagreen-400 glow-seagreen"
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-seagreen-400 dark:border-seagreen-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-seagreen-400 dark:bg-seagreen-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
