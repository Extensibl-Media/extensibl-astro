/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: "#7de2d1",
          background: "#fffafb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
