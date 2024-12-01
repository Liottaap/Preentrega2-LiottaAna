/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Aquí busca archivos donde se usen clases de Tailwind
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#423127",
      secondary: '#f7f3ed'
    },
  },
  plugins: [],

};