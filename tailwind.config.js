/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    textColor: {
      word: "#244535",
      white: "#ffffff",
      black: "#000000",
      gray: "#52525b",
      light: "#15803d",
    },
    bgColor: {
      word: "#244535",
      white: "#ffffff",
      black: "#000000",
      gray: "#222222",
      darkGray: "#171717",
    },
  },
  plugins: [],
};
