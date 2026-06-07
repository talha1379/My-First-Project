import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ZapIcon,
  TargetIcon,
  EyeIcon,
  ShieldCheckIcon,
  AwardIcon,
  RocketIcon,
  HeadphonesIcon,
  UsersIcon,
  PackageIcon,
  StarIcon,
  ClockIcon } from
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
const stats = [
{
  label: 'Products',
  value: '500+',
  icon: PackageIcon
},
{
  label: 'Customers',
  value: '2,000+',
  icon: UsersIcon
},
{
  label: 'Years',
  value: '3+',
  icon: ClockIcon
},
{
  label: 'Avg Rating',
  value: '4.8★',
  icon: StarIcon
}];

const values = [
{
  title: 'Authenticity',
  desc: 'Every product is 100% genuine with manufacturer warranty.',
  icon: ShieldCheckIcon
},
{
  title: 'Quality',
  desc: 'We curate only the best brands and products for our customers.',
  icon: AwardIcon
},
{
  title: 'Speed',
  desc: 'Fast processing and delivery across KPK within 1-3 business days.',
  icon: RocketIcon
},
{
  title: 'Support',
  desc: '24/7 customer support via WhatsApp, email, and phone.',
  icon: HeadphonesIcon
}];

const team = [
{
  name: 'Ahmad Talha',
  role: 'Founder & CEO',
  avatar: 'AT'
},
{
  name: 'Hassan Ali',
  role: 'Head of Operations',
  avatar: 'HA'
},
{
  name: 'Ayesha Noor',
  role: 'Customer Experience Lead',
  avatar: 'AN'
}];

export function About() {
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-text-secondary">About Us</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              About <span className="text-primary">AHMAD Store</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Pakistan's most trusted destination for computers and electronics.
              Power your world with the best in tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  AHMAD Store was born from a simple frustration — finding
                  genuine, quality computer hardware in KPK was unnecessarily
                  difficult. In 2023, we set out to change that.
                </p>
                <p>
                  What started as a small operation selling CPUs and RAM modules
                  has grown into a comprehensive electronics destination serving
                  thousands of customers across Pakistan. We believe everyone
                  deserves access to premium tech at fair prices.
                </p>
                <p>
                  Today, we stock over 500 products from the world's leading
                  brands, with a commitment to authenticity, fast delivery, and
                  exceptional customer service that sets us apart.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{
                delay: 0.15
              }}>
              
              <div
                className="rounded-card aspect-video overflow-hidden relative"
                style={{
                  background: 'rgba(13, 21, 38, 0.7)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop"
                  alt="Technology workspace"
                  className="w-full h-full object-cover opacity-60" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <ZapIcon className="w-16 h-16 text-primary/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
            {
              title: 'Our Mission',
              icon: TargetIcon,
              text: 'To make premium technology accessible to everyone in Pakistan through genuine products, competitive pricing, and an unmatched shopping experience.'
            },
            {
              title: 'Our Vision',
              icon: EyeIcon,
              text: "To be Pakistan's most visually impressive and technically robust online electronics destination — where every interaction feels premium and every purchase is seamless."
            }].
            map((item, i) =>
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{
                delay: i * 0.1
              }}
              className="rounded-card p-8"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) =>
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{
                delay: i * 0.08
              }}
              className="text-center rounded-card p-6"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="font-heading text-3xl font-bold text-white text-center mb-10">
            
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) =>
            <motion.div
              key={val.title}
              {...fadeUp}
              transition={{
                delay: i * 0.08
              }}
              className="rounded-card p-6 text-center group"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors">
                  <val.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="font-heading text-3xl font-bold text-white text-center mb-10">
            
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) =>
            <motion.div
              key={member.name}
              {...fadeUp}
              transition={{
                delay: i * 0.1
              }}
              className="text-center rounded-card p-6"
              style={{
                background: 'rgba(13, 21, 38, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
              
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-primary">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  {member.role}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            className="font-heading text-3xl font-bold text-white text-center mb-10">
            
            Find Us
          </motion.h2>
          <motion.div
            {...fadeUp}
            className="rounded-card overflow-hidden h-80"
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
      </section>
    </motion.main>);

}