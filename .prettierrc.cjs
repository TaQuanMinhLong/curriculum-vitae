/** @type {import('prettier').Config}} */

module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-astro"),
  ],
  astroAllowShorthand: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
