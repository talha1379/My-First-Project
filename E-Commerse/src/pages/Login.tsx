import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ZapIcon,
  ChromeIcon,
  GithubIcon,
  ArrowRightIcon } from
'lucide-react';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };
  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="min-h-screen bg-bg flex">
      
      {/* Left - Showcase */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-bg to-bg" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-primary/5 blur-[80px]" />
        <div className="relative z-10 text-center px-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3
            }}>
            
            <ZapIcon className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Welcome Back
            </h2>
            <p className="text-text-secondary text-lg max-w-md">
              Sign in to access your account, track orders, and continue
              shopping the best tech in Pakistan.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.15
          }}
          className="w-full max-w-md">
          
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <ZapIcon className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold text-white">
              AHMAD<span className="text-primary">Store</span>
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            Sign In
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-primary hover:text-primary-light transition-colors">
              
              Create one
            </Link>
          </p>

          {error &&
          <motion.div
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="mb-5 px-4 py-3 rounded-[10px] bg-danger/10 border border-danger/30 text-danger text-sm">
            
              {error}
            </motion.div>
          }

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Email
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-shadow" />
                
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Password
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-11 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-shadow" />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors">
                  
                  {showPassword ?
                  <EyeOffIcon className="w-4 h-4" /> :

                  <EyeIcon className="w-4 h-4" />
                  }
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border bg-surface text-primary focus:ring-primary/50" />
                
                <span className="text-sm text-text-secondary">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-primary hover:text-primary-light transition-colors">
                
                Forgot password?
              </button>
            </div>

            <motion.button
              whileTap={{
                scale: 0.97
              }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-colors disabled:opacity-60"
              style={{
                boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)'
              }}>
              
              {loading ?
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> :

              <>
                  Sign In
                  <ArrowRightIcon className="w-4 h-4" />
                </>
              }
            </motion.button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-bg text-text-muted">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-surface border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <ChromeIcon className="w-4 h-4" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-surface border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <GithubIcon className="w-4 h-4" />
                GitHub
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>);

}