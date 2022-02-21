const { randHsl } = require("@ngneat/falso")

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
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
      },

    },
  },
  plugins: [],
}