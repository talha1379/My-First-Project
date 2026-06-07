import React from 'react';
import { Link } from 'react-router-dom';
import {
  ZapIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon } from
'lucide-react';
const quickLinks = [
{
  label: 'Home',
  path: '/'
},
{
  label: 'Products',
  path: '/products'
},
{
  label: 'About Us',
  path: '/about'
},
{
  label: 'Contact',
  path: '/contact'
},
{
  label: 'Order Tracking',
  path: '/orders/demo'
}];

const categories = [
'CPUs',
'Graphics Cards',
'RAMs',
'SSDs',
'Motherboards',
'Keyboards',
'Mice',
'LCDs',
'Gaming Accessories'];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ZapIcon className="w-5 h-5 text-primary" />
              <span className="font-display text-lg font-bold text-white tracking-wider">
                AHMAD<span className="text-primary">Store</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Pakistan's premium online electronics store. Shop CPUs, GPUs,
              RAMs, SSDs and gaming gear with fast delivery across KPK.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors">
                
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors">
                
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) =>
              <li key={link.path}>
                  <Link
                  to={link.path}
                  className="text-text-secondary text-sm hover:text-primary transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) =>
              <li key={cat}>
                  <Link
                  to="/products"
                  className="text-text-secondary text-sm hover:text-primary transition-colors">
                  
                    {cat}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2.5 text-text-secondary text-sm">
                <PhoneIcon className="w-4 h-4 text-primary flex-shrink-0" />
                +92 349 9344466
              </li>
              <li className="flex items-center gap-2.5 text-text-secondary text-sm">
                <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
                talhaahmad1379@gmail.com
              </li>
              <li className="flex items-center gap-2.5 text-text-secondary text-sm">
                <MapPinIcon className="w-4 h-4 text-primary flex-shrink-0" />
                KPK, Pakistan
              </li>
            </ul>

            <h4 className="font-heading text-xs font-semibold text-white mb-2 uppercase tracking-wider">
              Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-bg border border-border rounded-l-input text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary/50" />
              
              <button className="px-3 py-2 bg-primary rounded-r-input text-white hover:bg-primary-light transition-colors">
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} AHMAD Store. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Power Your World with the Best in Tech
          </p>
        </div>
      </div>
    </footer>);

}