import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ZapIcon,
  ChromeIcon,
  GithubIcon,
  ArrowRightIcon,
  AtSignIcon } from
'lucide-react';
function getPasswordStrength(pw: string): {
  level: number;
  label: string;
  color: string;
} {
  if (!pw)
  return {
    level: 0,
    label: '',
    color: ''
  };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const levels = [
  {
    level: 1,
    label: 'Weak',
    color: 'bg-danger'
  },
  {
    level: 2,
    label: 'Fair',
    color: 'bg-warning'
  },
  {
    level: 3,
    label: 'Good',
    color: 'bg-info'
  },
  {
    level: 4,
    label: 'Strong',
    color: 'bg-success'
  }];

  return levels[Math.max(0, score - 1)] || levels[0];
}
export function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const strength = getPasswordStrength(form.password);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.fullName || form.fullName.length < 2)
    errs.fullName = 'Name must be at least 2 characters';
    if (!form.username || form.username.length < 3)
    errs.username = 'Username must be at least 3 characters';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
    errs.email = 'Valid email required';
    if (!form.password || form.password.length < 8)
    errs.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword)
    errs.confirmPassword = 'Passwords do not match';
    if (!agreed) errs.terms = 'You must agree to the terms';
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
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
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
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
              Join AHMAD Store
            </h2>
            <p className="text-text-secondary text-lg max-w-md">
              Create your account and start shopping Pakistan's best selection
              of computers and electronics.
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
            Create Account
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary hover:text-primary-light transition-colors">
              
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Full Name"
              error={errors.fullName}
              icon={<UserIcon className="w-4 h-4" />}>
              
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                placeholder="Ahmad Khan"
                className="w-full pl-11 pr-4 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
              
            </FormField>

            <FormField
              label="Username"
              error={errors.username}
              icon={<AtSignIcon className="w-4 h-4" />}>
              
              <input
                type="text"
                value={form.username}
                onChange={(e) => update('username', e.target.value)}
                placeholder="ahmad_khan"
                className="w-full pl-11 pr-4 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
              
            </FormField>

            <FormField
              label="Email"
              error={errors.email}
              icon={<MailIcon className="w-4 h-4" />}>
              
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
              
            </FormField>

            <div>
              <FormField
                label="Password"
                error={errors.password}
                icon={<LockIcon className="w-4 h-4" />}>
                
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  placeholder="Min 8 characters"
                  className="w-full pl-11 pr-11 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-[38px] text-text-muted hover:text-white transition-colors">
                  
                  {showPassword ?
                  <EyeOffIcon className="w-4 h-4" /> :

                  <EyeIcon className="w-4 h-4" />
                  }
                </button>
              </FormField>
              {form.password &&
              <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 flex gap-1">
                    {[1, 2, 3, 4].map((i) =>
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${i <= strength.level ? strength.color : 'bg-surface-2'}`} />

                  )}
                  </div>
                  <span
                  className={`text-xs ${strength.level <= 1 ? 'text-danger' : strength.level <= 2 ? 'text-warning' : 'text-success'}`}>
                  
                    {strength.label}
                  </span>
                </div>
              }
            </div>

            <FormField
              label="Confirm Password"
              error={errors.confirmPassword}
              icon={<LockIcon className="w-4 h-4" />}>
              
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => update('confirmPassword', e.target.value)}
                placeholder="Repeat your password"
                className="w-full pl-11 pr-4 py-3 rounded-[10px] bg-surface border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
              
            </FormField>

            <div>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    setErrors((prev) => ({
                      ...prev,
                      terms: ''
                    }));
                  }}
                  className="mt-0.5 w-4 h-4 rounded border-border bg-surface text-primary focus:ring-primary/50" />
                
                <span className="text-sm text-text-secondary">
                  I agree to the{' '}
                  <button
                    type="button"
                    className="text-primary hover:underline">
                    
                    Terms & Conditions
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    className="text-primary hover:underline">
                    
                    Privacy Policy
                  </button>
                </span>
              </label>
              {errors.terms &&
              <p className="mt-1 text-xs text-danger">{errors.terms}</p>
              }
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
                  Create Account <ArrowRightIcon className="w-4 h-4" />
                </>
              }
            </motion.button>
          </form>

          <div className="mt-6">
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
                <ChromeIcon className="w-4 h-4" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] bg-surface border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <GithubIcon className="w-4 h-4" /> GitHub
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>);

}
function FormField({
  label,
  error,
  icon,
  children





}: {label: string;error?: string;icon: React.ReactNode;children: React.ReactNode;}) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-text-secondary mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted">
          {icon}
        </span>
        {children}
      </div>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>);

}