module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#000000',
      'secondary': '#ffffff',
    },
    backgroundColor: {
      'primary': '#000000',
      'secondary': '#ffffff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
