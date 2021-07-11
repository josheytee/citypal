module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing': "url('@/assets/img/home.png')",
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}  