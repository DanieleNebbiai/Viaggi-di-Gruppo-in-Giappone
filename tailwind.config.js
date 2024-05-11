/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'landscape': "url('./images/landscape.jpeg')",
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
