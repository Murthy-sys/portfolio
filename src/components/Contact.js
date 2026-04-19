import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import MagneticButton from './MagneticButton';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail,   label: 'EMAIL',    value: 'mmurthy7702@gmail.com', href: 'mailto:mmurthy7702@gmail.com' },
    { icon: Phone,  label: 'PHONE',    value: '+91 7702327702',        href: 'tel:+917702327702' },
    { icon: MapPin, label: 'LOCATION', value: 'Anantapur, India',      href: '#' },
  ];

  const inputCls = `w-full bg-transparent border-b pb-3 pt-5 text-sm font-medium outline-none transition-colors placeholder:transition-colors ${
    darkMode
      ? 'text-white border-ink-800 focus:border-brand-400 placeholder:text-ink-600'
      : 'text-ink-900 border-ink-200 focus:border-brand-500 placeholder:text-ink-400'
  }`;

  const labelCls = `block font-mono text-[10px] tracking-widest uppercase mb-1 ${
    darkMode ? 'text-ink-500' : 'text-ink-400'
  }`;

  return (
    <section
      id="contact"
      className={`relative py-28 sm:py-36 ${darkMode ? 'bg-ink-950' : 'bg-[#fafafa]'}`}
    >
      <div className="absolute inset-0 bg-radial-brand opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="05 / CONTACT"
          title="Let's build"
          highlight="something lasting."
          description="I'm open to roles, collaborations, and consulting engagements. Drop a note — I'll reply within a day."
        />

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-5">
              {contactInfo.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className={`spotlight group flex items-center gap-4 p-5 rounded-xl border transition-colors ${
                    darkMode
                      ? 'bg-ink-900/50 border-ink-800 hover:border-brand-500/50'
                      : 'bg-white border-ink-200 hover:border-brand-500/50'
                  }`}
                >
                  <div className={`p-2.5 rounded-md ${
                    darkMode ? 'bg-ink-800 text-brand-400' : 'bg-brand-50 text-brand-600'
                  }`}>
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className={`font-mono text-[10px] tracking-widest ${
                      darkMode ? 'text-ink-500' : 'text-ink-400'
                    }`}>
                      {c.label}
                    </div>
                    <div className={`text-sm font-medium ${
                      darkMode ? 'text-white' : 'text-ink-900'
                    }`}>
                      {c.value}
                    </div>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                    darkMode ? 'text-ink-500' : 'text-ink-400'
                  }`} />
                </motion.a>
              ))}
            </div>

            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-ink-900 border-ink-800' : 'bg-white border-ink-200'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400">
                  ACCEPTING NEW PROJECTS
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-ink-300' : 'text-ink-600'
              }`}>
                I typically respond within 24 hours on business days. For urgent
                engagements, calling is fastest.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className={`relative p-8 sm:p-10 rounded-3xl border overflow-hidden ${
              darkMode ? 'bg-ink-900/70 border-ink-800' : 'bg-white border-ink-200'
            }`}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-5" />
                  <h4 className={`font-display font-semibold text-xl mb-2 ${
                    darkMode ? 'text-white' : 'text-ink-900'
                  }`}>
                    Message received
                  </h4>
                  <p className={darkMode ? 'text-ink-400' : 'text-ink-500'}>
                    Thanks for reaching out — I'll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelCls}>NAME</label>
                      <input
                        id="name" name="name" type="text" required
                        value={formData.name} onChange={handleChange}
                        placeholder="Your full name" className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>EMAIL</label>
                      <input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="you@domain.com" className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelCls}>SUBJECT</label>
                    <input
                      id="subject" name="subject" type="text" required
                      value={formData.subject} onChange={handleChange}
                      placeholder="Project inquiry / collaboration / role" className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>MESSAGE</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      value={formData.message} onChange={handleChange}
                      placeholder="Tell me a bit about what you're working on…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton
                      as="button"
                      type="submit"
                      disabled={isSubmitting}
                      className={`group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium transition-opacity ${
                        isSubmitting
                          ? 'bg-ink-500 text-white'
                          : 'bg-white text-ink-950 shadow-xl shadow-brand-500/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </MagneticButton>
                  </div>
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
