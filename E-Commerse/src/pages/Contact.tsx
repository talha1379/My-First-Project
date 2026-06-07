import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon,
  MessageCircleIcon,
  CheckCircleIcon,
  ChevronDownIcon } from
'lucide-react';
const fadeUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true
  }
};
const subjects = [
'Order Issue',
'Product Inquiry',
'Technical Support',
'Partnership',
'Other'];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const update = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: ''
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
    errs.email = 'Valid email required';
    if (!form.subject) errs.subject = 'Please select a subject';
    if (!form.message || form.message.length < 20)
    errs.message = 'Message must be at least 20 characters';
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };
  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen pt-24 pb-16 bg-bg">
      
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-text-secondary">Contact</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Have a question or need help? We'd love to hear from you. Our team
              is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div {...fadeUp} className="lg:col-span-2 space-y-5">
            {[
            {
              icon: PhoneIcon,
              label: 'Phone',
              value: '+92 349 9344466',
              href: 'tel:+923499344466'
            },
            {
              icon: MailIcon,
              label: 'Email',
              value: 'talhaahmad1379@gmail.com',
              href: 'mailto:talhaahmad1379@gmail.com'
            },
            {
              icon: MapPinIcon,
              label: 'Address',
              value: 'KPK, Pakistan',
              href: undefined
            },
            {
              icon: ClockIcon,
              label: 'Hours',
              value: 'Mon–Sat 10:00 AM – 8:00 PM PKT',
              href: undefined
            }].
            map((item) =>
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-card p-5"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ?
                <a
                  href={item.href}
                  className="text-sm text-white hover:text-primary transition-colors">
                  
                      {item.value}
                    </a> :

                <p className="text-sm text-white">{item.value}</p>
                }
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
              {
                icon: MessageCircleIcon,
                label: 'WhatsApp',
                href: 'https://wa.me/923499344466',
                color: 'text-success'
              },
              {
                icon: PhoneIcon,
                label: 'Call',
                href: 'tel:+923499344466',
                color: 'text-primary'
              },
              {
                icon: MailIcon,
                label: 'Email',
                href: 'mailto:talhaahmad1379@gmail.com',
                color: 'text-info'
              }].
              map((action) =>
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-card text-center hover:bg-white/[0.03] transition-colors"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                  <span className="text-xs text-text-secondary">
                    {action.label}
                  </span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeUp}
            transition={{
              delay: 0.1
            }}
            className="lg:col-span-3 rounded-card p-6 sm:p-8"
            style={{
              background: 'rgba(13, 21, 38, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
            
            {submitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="flex flex-col items-center justify-center py-12 text-center">
              
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-5">
                  <CheckCircleIcon className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary text-sm max-w-sm mb-6">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                  });
                }}
                className="px-6 py-2.5 rounded-full border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                
                  Send Another Message
                </button>
              </motion.div> :

            <>
                <h2 className="font-heading text-xl font-bold text-white mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Full Name
                      </label>
                      <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-[10px] bg-surface-2 border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    
                      {errors.name &&
                    <p className="mt-1 text-xs text-danger">
                          {errors.name}
                        </p>
                    }
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Email
                      </label>
                      <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-[10px] bg-surface-2 border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    
                      {errors.email &&
                    <p className="mt-1 text-xs text-danger">
                          {errors.email}
                        </p>
                    }
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                      value={form.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-[10px] bg-surface-2 border border-border text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                      
                        <option value="" className="text-text-muted">
                          Select a subject
                        </option>
                        {subjects.map((s) =>
                      <option key={s} value={s}>
                            {s}
                          </option>
                      )}
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                    {errors.subject &&
                  <p className="mt-1 text-xs text-danger">
                        {errors.subject}
                      </p>
                  }
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">
                      Message
                    </label>
                    <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-[10px] bg-surface-2 border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" />
                  
                    <div className="flex items-center justify-between mt-1">
                      {errors.message &&
                    <p className="text-xs text-danger">{errors.message}</p>
                    }
                      <p className="text-xs text-text-muted ml-auto">
                        {form.message.length}/1000
                      </p>
                    </div>
                  </div>

                  <motion.button
                  whileTap={{
                    scale: 0.97
                  }}
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors disabled:opacity-60"
                  style={{
                    boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)'
                  }}>
                  
                    {loading ?
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> :

                  <>
                        <SendIcon className="w-4 h-4" /> Send Message
                      </>
                  }
                  </motion.button>
                </form>
              </>
            }
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          {...fadeUp}
          className="rounded-card overflow-hidden h-72 mb-8"
          style={{
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307000!2d71.5!3d34.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e35d3%3A0x14f981e60f0e2e40!2sKhyber%20Pakhtunkhwa!5e0!3m2!1sen!2spk!4v1"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: 'invert(90%) hue-rotate(180deg)'
            }}
            allowFullScreen
            loading="lazy"
            title="AHMAD Store Location" />
          
        </motion.div>
      </div>
    </motion.main>);

}