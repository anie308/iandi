/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        desktoplink: "#232C38",
        mobilelink: "#333333",
      },
      flex: {
        2: "2 2 0%",
      },

      transitionProperty: {
        top: "top",
        left: "left",
        
      },
      fontFamily: {
        lato: "Lato, sans-serif",
        raleway: "Raleway, sans-serif",
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
