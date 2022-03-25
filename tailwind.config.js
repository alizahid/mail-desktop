const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.tsx', './src/**/*.css'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.teal
      }
    },
    fontFamily: {
      body: ['Satoshi', 'sans-serif']
    }
  }
}
