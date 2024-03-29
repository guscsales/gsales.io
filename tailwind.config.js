const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    './src/libs/ui/**/*.{js,ts,jsx,tsx,css,svg}',
    './src/app/**/*.{js,ts,jsx,tsx,css,svg}',
    './src/common/**/*.{js,ts,jsx,tsx,css,svg}',
    './src/domains/**/*.{js,ts,jsx,tsx,css,svg}',
  ],
  jit: true,
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
      },
      screens: {
        DEFAULT: '100%',
        lg: '62.25rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-main)'],
        blast: ['var(--font-blast)'],
        code: ['var(--font-code)'],
      },
      backgroundImage: {
        'green-to-purple': `linear-gradient(253deg, ${colors.purple['500']} 0%, ${colors.emerald['200']} 61.46%)`,
        'zero-to-white':
          'linear-gradient(289deg, rgba(250, 250, 250, 0.60) 0%, rgba(250, 250, 250, 0.00) 100%)',
        'white-to-zero':
          'linear-gradient(316deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.60) 100%)',
        'zero-to-black':
          'linear-gradient(289deg, rgba(24,24,27, 0.60) 0%, rgba(24,24,27, 0.00) 100%)',
        'black-to-zero':
          'linear-gradient(316deg, rgba(24,24,27, 0.00) 0%, rgba(24,24,27, 0.60) 100%)',
        'blue-green-to-zero':
          'linear-gradient(155deg, #60A5FA 0%, rgba(167, 243, 208, 0.1) 75%, rgba(0, 0, 0, 0) 100%)',
        'zero-to-blue-green':
          'linear-gradient(19deg, rgba(0, 0, 0, 0) 0%, rgba(167, 243, 208, 0.1) 25%, #60A5FA 100%)',
        'red-to-pink': `linear-gradient(47deg, ${colors.red['500']} 0%, ${colors.pink['500']} 100%)`,
      },
      boxShadow: {
        'dark-scroll': '0 0 0.25rem rgba(250, 250, 250, 0.06)', // Zinc 50/6%
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.transition-base': {
          transition: 'all 140ms ease-in-out',
        },
      });
    }),
  ],
});
