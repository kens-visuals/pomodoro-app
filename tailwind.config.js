/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E213F',
        'primary-dark': '#161932',
        secondary: '#FFFFFF',
        'secondary-dark': '#EFF1FA',
        text: '#D7E0FF',
        red: '#F87070',
        cyan: '#70F3F8',
        violet: '#D881F8',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        h1: ['6.25rem', { lineHeight: '7.5rem', letterSpacing: '-0.3125rem' }],
        h2: ['1.75rem', { lineHeight: '2.125rem' }],
        h3: ['1rem', { lineHeight: '1.1875rem', letterSpacing: '0.9375rem' }],
        h4: ['0.1875rem', { lineHeight: '1rem', letterSpacing: '0.3125rem' }],
        'body-1': ['0.875rem', { lineHeight: '1.125rem' }],
        'body-2': ['0.75rem', { lineHeight: '0.875rem' }],
      },
    },
  },
  plugins: [],
};
