/** @type {import('tailwindcss').Config} */

const { pink } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Poppins", "sans-serif"],
      mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
    },

    fontWeight: {

    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          blue: "#23AEE3",

        },
        background: {
          primary: "#0C111A",
        },

        foreground: {
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {

        mytheme: {

        },
      },
    ],
  },
};
