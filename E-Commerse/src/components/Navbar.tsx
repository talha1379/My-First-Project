import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
  ZapIcon } from
'lucide-react';
import { useCart } from '../data/cartContext';
const navLinks = [
{
  label: 'Home',
  path: '/'
},
{
  label: 'Products',
  path: '/products'
},
{
  label: 'About',
  path: '/about'
},
{
  label: 'Contact',
  path: '/contact'
}];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-16 shadow-lg shadow-black/20' : 'h-20'}`}
        style={{
          background: 'rgba(5, 10, 24, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <ZapIcon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wider">
              AHMAD<span className="text-primary">Store</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-heading text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-text-secondary'}`}>
              
                {link.label}
                {location.pathname === link.path &&
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              </Link>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-full text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
              <SearchIcon className="w-5 h-5" />
            </button>
            <Link
              to="/wishlist"
              className="relative p-2 rounded-full text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
              
              <HeartIcon className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full text-[10px] font-bold flex items-center justify-center text-white">
                0
              </span>
            </Link>
            <Link
              to="/cart"
              className="relative p-2 rounded-full text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
              
              <ShoppingCartIcon className="w-5 h-5" />
              {cartCount > 0 &&
              <motion.span
                key={cartCount}
                initial={{
                  scale: 0.5
                }}
                animate={{
                  scale: 1
                }}
                className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full text-[10px] font-bold flex items-center justify-center text-white">
                
                  {cartCount > 99 ? '99+' : cartCount}
                </motion.span>
              }
            </Link>
            <Link
              to="/login"
              className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
              
              <UserIcon className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white transition-colors">
            
            {mobileOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setMobileOpen(false)} />
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border md:hidden">
            
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-lg font-bold text-white">
                    AHMAD<span className="text-primary">Store</span>
                  </span>
                  <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-text-secondary hover:text-white">
                  
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) =>
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-heading text-sm font-medium transition-colors ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}>
                  
                      {link.label}
                    </Link>
                )}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                  to="/cart"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
                  
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span className="font-heading text-sm">
                      Cart ({cartCount})
                    </span>
                  </Link>
                  <Link
                  to="/wishlist"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
                  
                    <HeartIcon className="w-5 h-5" />
                    <span className="font-heading text-sm">Wishlist (0)</span>
                  </Link>
                  <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-white text-sm font-medium">
                  
                    <UserIcon className="w-4 h-4" />
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}