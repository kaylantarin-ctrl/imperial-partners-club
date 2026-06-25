/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EF',
        'cream-alt': '#F1ECE1',
        gold: '#A6823C',
        'gold-soft': '#B79A5E',
        'gold-deep': '#856630',
        ink: '#171A20',
        'ink-2': '#1d2129',
        body: '#34322c',
        muted: '#7c776c',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: { wrap: '1240px' },
    },
  },
  plugins: [],
};
