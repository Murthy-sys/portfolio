import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Murthy-sys', label: 'GitHub', color: 'hover:text-seagreen-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-accent-400' },
    { icon: Mail, href: 'mailto:mmurthy7702@gmail.com', label: 'Email', color: 'hover:text-teal-400' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gray-900 dark:bg-dark-950 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-seagreen-500 via-accent-400 to-teal-500" />

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 bg-seagreen-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-seagreen-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-white">
                OM
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-seagreen-400 to-accent-400 bg-clip-text text-transparent">
                Obulamurthy
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Front-End Developer with 7+ years of experience crafting beautiful, 
              performant web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-seagreen-400" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-seagreen-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-seagreen-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Mail className="w-4 h-4 text-seagreen-400" /> Contact Info
            </h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-seagreen-500" />
                mmurthy7702@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4 h-4 text-seagreen-500 flex items-center justify-center text-xs">📍</span>
                Tarimela, Anantapur, India
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-seagreen-500 to-accent-500 text-white font-medium rounded-lg shadow-lg hover:shadow-seagreen-500/20 transition-all duration-300 text-sm"
            >
              <Mail className="w-4 h-4" /> Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm flex items-center gap-1"
            >
              © {currentYear} Malisetti Obulamurthy. Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-seagreen-500 fill-seagreen-500" />
              </motion.span>
              using React & Tailwind CSS
            </motion.p>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gradient-to-r from-seagreen-500 to-accent-500 text-white rounded-lg shadow-md hover:shadow-seagreen-500/30 transition-shadow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
