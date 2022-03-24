module.exports = {
  content: ["./index.html", "./js/main.js", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      parisienne: "'Parisienne', serif",
      hubballi: "'Hubballi', mono",
      cormorant_garamond: "'Cormorant Garamond'",
    },
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 5s ease-in",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.red.300") },
        },
      }),
    },
  },
};
