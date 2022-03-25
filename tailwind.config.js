const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./index.html', './src/**/*.tsx', './src/**/*.css'],
  plugins: [typography],
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
