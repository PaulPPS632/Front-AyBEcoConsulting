/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/swiper/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        "verde-petroleo": "#01343F",
      },
    },
  },
};
