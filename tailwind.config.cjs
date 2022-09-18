/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",

        // neutral
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        headings: ["DM Serif Display", "serif"],
        body: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
