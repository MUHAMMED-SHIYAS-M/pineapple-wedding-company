/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  '#FDF2F2',
          100: '#FDE8E8',
          200: '#F9C0C0',
          300: '#F09090',
          400: '#E05050',
          500: '#C02020',
          600: '#8B1010',
          700: '#6B1414',
          800: '#4A0E0E',
          900: '#2D0A0A',
          950: '#1A0505',
        },
        gold: {
          50:  '#FFFDF0',
          100: '#FFF8D6',
          200: '#FFEEAA',
          300: '#FFE070',
          400: '#D4AF37',
          500: '#B8952A',
          600: '#9A7B1E',
          700: '#7C6215',
          800: '#5E4A0E',
          900: '#3D3009',
        },
        champagne: '#F5E6C8',
        ivory:     '#FAF6F0',
        cream:     '#FDF8F0',
        warmgray:  '#8B7B6B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      animation: {
        'ken-burns':    'kenBurns 20s ease-out forwards',
        'fade-up':      'fadeUp 0.8s ease-out forwards',
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'pulse-slow':   'pulse 3s ease-in-out infinite',
        'scroll-bounce':'scrollBounce 2s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        kenBurns: {
          '0%':   { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1.25)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
        'gold-shimmer':  'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      zIndex: {
        60:  '60',
        70:  '70',
        80:  '80',
        90:  '90',
        100: '100',
      },
    },
  },
  plugins: [],
}
