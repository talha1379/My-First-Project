
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          glow: 'rgba(37, 99, 235, 0.35)',
        },
        bg: '#050A18',
        surface: {
          DEFAULT: '#0D1526',
          2: '#111E35',
        },
        border: 'rgba(255,255,255,0.08)',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'text-muted': '#475569',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#06B6D4',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        button: '9999px',
        'button-secondary': '8px',
        input: '10px',
        modal: '20px',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(37, 99, 235, 0.4)',
        'glow-blue-sm': '0 0 15px rgba(37, 99, 235, 0.25)',
        'glow-white': '0 0 20px rgba(248, 250, 252, 0.1)',
        modal: '0 25px 80px rgba(0,0,0,0.6)',
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        shimmer: 'shimmer 1.5s infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(37, 99, 235, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
