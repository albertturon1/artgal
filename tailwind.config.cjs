/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      minWidth: {
        "1/3": "33.3%",
        "1/2": "50%",
        "3/5": "60%",
        "2/3": "66.6%",
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.3%",
        "2/3": "66.6%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
