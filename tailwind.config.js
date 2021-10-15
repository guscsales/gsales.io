const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'serif'],
      heading: ['Poppins', 'sans-serif'],
      code: ['Courier Prime', 'monospace'],
    },
    extend: {
      width: {
        112: '25rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { fontSize: theme('fontSize.base') },
      });
    }),
  ],
};
