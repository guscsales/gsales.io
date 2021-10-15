module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'serif'],
      heading: ['Poppins', 'sans-serif'],
      code: ['Courier Prime', 'monospace'],
    },
  },
};
