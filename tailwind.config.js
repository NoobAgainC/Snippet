const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        blink: 'blinkKey 1.15s step-start 0s infinite',
        popIn: 'popInKey 0.5s linear 0s 1 forwards'
      },
      keyframes: {
        blinkKey: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        popInKey: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(0)' }
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
