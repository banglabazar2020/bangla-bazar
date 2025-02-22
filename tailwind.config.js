/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4caf50", // Grocery green
        secondary: "#f8bbd0", // Light pink
        accent: "#ff5722", // Bright orange
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
