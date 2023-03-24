/** @type {import('prettier').Config}} */

module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: [require("prettier-plugin-tailwindcss")],
};
