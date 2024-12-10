/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": '#243cff',
        "azul-oscuro": '#0d1b3e'
      },
      spacing: {
        "42" :'170px', //se pueden agregar personalizados siempre entre '' o "" w-42  h-42 etc...
      },
      width: {
        "41" : '702px' // solo aplicaria a el ancho. w-42
      },
      screens: {
        "tablet" : '900px' // se aplicamos el screens aquí, extiende y no borra los otros screens.
      }
    },
  },
  plugins: [],
}

