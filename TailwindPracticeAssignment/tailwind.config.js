const { randHsl } = require("@ngneat/falso")

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        'PT-serif': ['PT Serif', 'serif']
       },
      gridTemplateRows: {
        home: `135px 1fr`,
      },
      colors:{
        'primary': '#0d6cff',
        'body': '#f0f0f0',
        'body-secondary': '#fafaf9',
        'secondary': '#6a6a6b',
        'glow': '#c1ddfa',
        'header': '#262828',
        'card': '#fffffe',
        'cardPink': '#fc9af5',
        'cardOrange': '#fdc390',
        'cardBlue': '#92e3ff',
        'cardPurple': '#be9cff',
        'cardRed': '#fd8c90',
        'cardGreen': '#6eec6c',
      },
      boxShadow:{
        'card-shadow': '0 0 20px 0 rgba(0,0,0,0.005)',
      }

    },
  },
  plugins: [],
}