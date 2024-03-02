/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html', './dist/**/*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '550px',
      md: '800px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

