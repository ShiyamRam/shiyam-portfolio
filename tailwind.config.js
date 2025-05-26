/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        russo: ["'Russo One'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
