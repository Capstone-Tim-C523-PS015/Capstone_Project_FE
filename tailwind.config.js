/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
