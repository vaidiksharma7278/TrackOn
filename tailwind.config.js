/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#fffefe",
        green: "#8dffa8",
        yellow: "#e1ff31",
      },
      fontSize: {
        "10xl": "32rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: false,
  },
}
