/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: "#7de2d1",
          background: "#fffafb",
          pink: "#ed47bb",
          dark: "#050038",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
