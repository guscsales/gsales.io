const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
    './src/sagebox/**/*.{js,ts,jsx,tsx}',
  ],
  jit: true,
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
    plugin(({ addBase, theme }) => {
      addBase({
        body: { fontSize: theme('fontSize.base') },
      });
    }),
  ],
};
