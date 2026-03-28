import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, title: "Email", value: "mmurthy7702@gmail.com", link: "mailto:mmurthy7702@gmail.com", color: "from-seagreen-500 to-emerald-500" },
    { icon: Phone, title: "Phone", value: "+91 7702327702", link: "tel:+917702327702", color: "from-accent-500 to-teal-500" },
    { icon: MapPin, title: "Location", value: "Tarimela, Anantapur, India 515611", link: "#", color: "from-teal-500 to-cyan-500" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-seagreen-200/20 dark:bg-seagreen-800/10 rounded-full blur-3xl"
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
            Get In <span className="bg-gradient-to-r from-seagreen-500 to-accent-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seagreen-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you're a company looking for a developer, or you're someone who
                has a project in mind, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="flex items-center gap-4 p-6 bg-seagreen-50/50 dark:bg-seagreen-900/10 rounded-xl hover:bg-seagreen-50 dark:hover:bg-seagreen-900/20 transition-all duration-400 cursor-pointer group border border-transparent hover:border-seagreen-200 dark:hover:border-seagreen-800/30 glow-seagreen"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`p-4 bg-gradient-to-r ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-400`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-seagreen-500 to-accent-500 p-6 rounded-xl text-white shadow-lg"
            >
              <h4 className="font-bold text-lg mb-2">⚡ Response Time</h4>
              <p className="text-seagreen-100">
                I typically respond within 24 hours during business days.
                For urgent matters, feel free to call me directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-seagreen-50/30 dark:bg-gray-800/50 p-8 rounded-2xl border border-seagreen-100/50 dark:border-seagreen-800/20 glow-seagreen">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: 2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-seagreen-500 mx-auto mb-4" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                          className="w-full pl-10 pr-4 py-3 border border-seagreen-200 dark:border-seagreen-800/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-seagreen-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name" />
                      </div>
                    </motion.div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                          className="w-full pl-10 pr-4 py-3 border border-seagreen-200 dark:border-seagreen-800/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-seagreen-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required
                      className="w-full px-4 py-3 border border-seagreen-200 dark:border-seagreen-800/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-seagreen-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleInputChange} required
                        className="w-full pl-10 pr-4 py-3 border border-seagreen-200 dark:border-seagreen-800/30 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-seagreen-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello..." />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(46,139,87,0.3)" }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-seagreen-500 to-accent-500 hover:from-seagreen-600 hover:to-accent-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-400 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" />Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
