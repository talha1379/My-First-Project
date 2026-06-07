import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, ShoppingBagIcon } from 'lucide-react';
export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        className="text-center">
        
        <motion.h1
          className="font-display text-8xl sm:text-9xl font-black text-white/5 select-none"
          animate={{
            textShadow: [
            '2px 0 #2563EB, -2px 0 #EF4444',
            '-2px 0 #2563EB, 2px 0 #EF4444',
            '2px 0 #2563EB, -2px 0 #EF4444']

          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 3
          }}
          style={{
            WebkitTextStroke: '2px rgba(37,99,235,0.3)'
          }}>
          
          404
        </motion.h1>
        <h2 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-white">
          Page Lost in Cyberspace
        </h2>
        <p className="mt-2 text-text-secondary text-sm max-w-sm mx-auto">
          Oops. The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-primary text-white font-semibold text-sm hover:bg-primary-light transition-colors">
            
            <HomeIcon className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
            
            <ShoppingBagIcon className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </motion.div>
    </main>);

}