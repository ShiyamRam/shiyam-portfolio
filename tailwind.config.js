/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: ["animate-fade-in-up", "group-hover:animate-gloss-swipe"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        russo: ["'Russo One'", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out both",
        "gloss-swipe": "glossSwipe 1s ease-in-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glossSwipe: {
          "0%": { left: "-75%" },
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
