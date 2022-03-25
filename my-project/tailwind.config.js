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
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 2s ease-out",
      },
    },
  },
};
