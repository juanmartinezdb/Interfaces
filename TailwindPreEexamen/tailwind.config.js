/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#7dd3fc',
        'azul-oscuro': '#1e40af',
      },
      // para cualquier espaciado
      spacing: {
        'paco': '220px'
      },
      // aplica solo al ancho
      width: {
        'chancho': '130px'
      },
      screens: {
        'tablet' : '900px'
      }
    },
  },
  plugins: [],
  darkMode : 'class',
}

