// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-darker': '#020617',
        'brand-surface': '#020818',
        'brand-accent': '#22c55e',
        'brand-accentHover': '#16a34a',
      },
      fontFamily: {
        logo: ['Oswald', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
