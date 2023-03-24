/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter, sans-serif", { fontFeatureSettings: '"cv11", "ss01"' }],
    },
    extend: {
      colors: {
        primary: "#4B2B99",
        "primary-dark": "#130B22",
        "primary-light": "#6633CC",
        "primary-medium": "#442999",
        dark: "#333333",
      },
      gridTemplateColumns: {
        "1-2": "1fr 2fr",
      },
      boxShadow: {
        paper: "0 35px 55px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
