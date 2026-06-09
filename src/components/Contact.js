import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import MagneticButton from './MagneticButton';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Web3Forms access key — generated at https://web3forms.com using the
  // inbox address (mmurthy7702@gmail.com); emails are delivered there.
  // Public by design (it only routes to your inbox), but kept in an env var.
  const ACCESS_KEY =
    process.env.REACT_APP_WEB3FORMS_KEY ||
    'e54ab7b9-789e-4108-a68f-c6f86b385ade';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    const subject = formData.subject?.trim()
      ? formData.subject.trim()
      : `Portfolio enquiry from ${formData.name || 'a visitor'}`;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: formData.name || 'Portfolio visitor',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Honeypot is left empty by real users; bots fill it.
          botcheck: '',
        }),
      });
      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error — please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail,   label: 'EMAIL',    value: 'mmurthy7702@gmail.com', href: 'mailto:mmurthy7702@gmail.com' },
    { icon: Phone,  label: 'PHONE',    value: '+91 7702327702',        href: 'tel:+917702327702' },
    { icon: MapPin, label: 'LOCATION', value: 'Anantapur, India',      href: '#' },
  ];

  const inputCls = `w-full rounded-lg px-3.5 py-3 text-sm font-medium outline-none transition-colors placeholder:transition-colors ${
    darkMode
      ? 'text-white bg-white/[0.04] border border-white/12 focus:border-neon-cyan/70 focus:bg-white/[0.07] placeholder:text-ink-400'
      : 'text-ink-900 bg-white border border-ink-200 focus:border-brand-500 placeholder:text-ink-400'
  }`;

  const labelCls = `block font-mono text-[10px] tracking-widest uppercase mb-1.5 ${
    darkMode ? 'text-ink-300' : 'text-ink-500'
  }`;

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-transparent"
    >
      <div className="absolute inset-0 bg-radial-brand opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          darkMode={darkMode}
          eyebrow="CONTACT"
          title="Get in"
          highlight="touch."
          description="Have a question or a project in mind? Send a message and I'll get back to you."
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
                  className="spotlight group flex items-center gap-4 p-5 rounded-xl transition-colors holo-card"
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

            <div className="p-6 rounded-2xl holo-card">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-400">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-ink-300' : 'text-ink-600'
              }`}>
                I usually reply within a day. For anything urgent, a call is the fastest
                way to reach me.
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
            <div className="relative p-8 sm:p-10 rounded-3xl overflow-hidden holo-card holo-border">
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
                    Message sent
                  </h4>
                  <p className={darkMode ? 'text-ink-300' : 'text-ink-500'}>
                    Thanks for reaching out — it landed in{' '}
                    <span className="text-brand-400 font-medium">mmurthy7702@gmail.com</span>.
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot — hidden from users, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
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

                  {errorMsg && (
                    <p className="text-sm text-rose-400 font-medium" role="alert">
                      {errorMsg}
                    </p>
                  )}

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
