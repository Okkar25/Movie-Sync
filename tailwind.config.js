/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        bookmarkLight: "#1e2a78",
        bookmarkDark: "#f4fa9c",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
