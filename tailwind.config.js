/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006633',
        secondary: '#33CC33',
        bodytextcolor: '#A3A3A3',
        Titlecolor: '#1F1E17'
      }
    },
  },
  plugins: [],
}
