module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing': "url('@/assets/img/soft.png')",
      }),
      colors: {
        primary: {
          light: '#b3bcf5',
          DEFAULT: '#F59E0B',
          dark: '#202e78',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}  