/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#0B1426',
        },
        navy: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        indigo: {
          500: '#6366F1',
          600: '#4F46E5',
        },
        orange: {
          500: '#F97316',
          600: '#EA580C',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-blue': 'pulse-blue 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'peak-rise': 'peak-rise 1s ease-out forwards',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'particle-float': 'particle-float 15s infinite linear',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'blue-lg': '0 0 50px rgba(59, 130, 246, 0.5)',
        'peak': '0 25px 50px -12px rgba(30, 64, 175, 0.25)',
        'peak-lg': '0 35px 60px -12px rgba(30, 64, 175, 0.4)',
      },
      backgroundImage: {
        'gradient-blue-ocean': 'linear-gradient(135deg, #0B1426 0%, #1E40AF 25%, #3B82F6 50%, #60A5FA 75%, #DBEAFE 100%)',
        'gradient-blue-peak': 'linear-gradient(45deg, #0F172A 0%, #1E40AF 50%, #3B82F6 100%)',
        'gradient-blue-sky': 'linear-gradient(180deg, #60A5FA 0%, #DBEAFE 100%)',
        'gradient-blue-deep': 'linear-gradient(135deg, #0B1426 0%, #1E3A8A 100%)',
        'gradient-blue-electric': 'linear-gradient(45deg, #1E40AF 0%, #3B82F6 50%, #06B6D4 100%)',
      },
      clipPath: {
        'peak': 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
        'wave': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        'diagonal': 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
      }
    },
  },
  plugins: [],
};