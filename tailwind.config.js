const colors = require("tailwindcss/colors");

// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",

      sm: "767px",
      // => @media (min-width: 640px) { ... }

      md: "991px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      // xl: "1280px",
      // // => @media (min-width: 1280px) { ... }
      //
      // "2xl": "1536px",
      // // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      padding: "1.5rem",
      center: true,
    },
    colors: {
      ...colors,
      black: '#0c0c0c',
      "gray-dark": "#616d7e",
      red: "#ff4202",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      full: "9999px",
      lg: "10px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
