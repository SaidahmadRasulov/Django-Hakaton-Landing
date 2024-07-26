/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_indigo: "#781FE3",
        dark_yellow: "#CAFF00",
      },
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        bruno: ["Bruno Ace SC", "sans-serif"],
        chopsic: ["Chopsic", "sans-serif"],
        moonhouse: ["moonhouse", "sans-serif"],
      },
    },
  },
  plugins: [],
};
