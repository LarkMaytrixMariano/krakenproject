/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#002329",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        mobilenav: "rgba(140, 226, 241, 1)",
        navcolor: "rgba(0, 35, 41, 1)",
        mobiletitle: "#043F48",
        herocolor: "#DFFAFF",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        'hero': "url('assets/kraken_assets/heroimg.svg')",
        'bghero': "url('assets/kraken_assets/bghero.svg')",
      },
      textShadow: {
        'shadow-text': '0px 0px 90px rgba(0, 26, 39, 0.24)', // Define the text-shadow utility class
      },
    },
    screens: {
      hollow: "20px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    // ...other plugins
    require("@designbycode/tailwindcss-text-shadow")
    ({
      shadowColor: "rgba(0, 26, 39, 0.24)",
      shadowBlur: "3px",
      shadowOffsetX: "5px",
      shadowOffsetY: "5px",
  }),
],
};