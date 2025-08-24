import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '1200px',
      },
    },
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#12229D',
          light: '#F6F7FF',
          lighter: '#F6F7FF'
        },
        dark: {
          DEFAULT: '#2A2A2A',
          light: '#171717',
        },
        gray: {
          light: '#F7F7F7',
          DEFAULT: '#A3A3A3',
        },
      },
      boxShadow: {
        custom: '0 -2px 0.1px 0 #193298',
        'custom-primary': 'inset 0 -2px 0.1px 0 #375DFB',
        'custom-inner': 'inset 0 -2px 0.1px 0 #193298',
        'custom-inner-white': 'inset 0 -2px 0.1px 0 #F0F0F0',
        'custom-light': '0 -1px 0.05px 0 rgba(25, 50, 152, 0.5)',
        'custom-heavy': '0 4px 24.7px 0 #375DFB0D',
        'custom-spread': '0 -2px 0.1px 2px rgba(25, 50, 152, 0.1)',
      },
      dropShadow: {
        custom: '0 2px 2px 0 #0000000D',
        'custom-heavy': '0 4px 24.7px 0 #375DFB0D',
      },
      backgroundImage: {
        'home-bg': "url('/images/home-hero-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
