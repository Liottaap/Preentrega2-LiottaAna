/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Aquí busca archivos donde se usen clases de Tailwind
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#081b45",
      secondary: '#f7f3ed',
      whitesmoke: '#f5f5f5',
    },
  },
  plugins: [],

};