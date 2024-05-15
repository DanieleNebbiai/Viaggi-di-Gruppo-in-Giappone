/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        landscape: "url('./images/landscape.jpeg')",
      },
      animation: {
        fade: "fadeIn 2s ease-in-out forwards", // Increased duration for visibility
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
