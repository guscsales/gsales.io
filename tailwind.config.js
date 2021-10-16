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
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        '.small-circle': {
          content: "''",
          width: '4px',
          height: '4px',
          borderRadius: '9999px',
          backgroundColor: colors.coolGray[700],
          position: 'absolute',
          right: '-8px',
          top: 'calc(50% - 1px)',
          '@screen sm': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after'],
      });
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { fontSize: theme('fontSize.base') },
      });
    }),
  ],
};
