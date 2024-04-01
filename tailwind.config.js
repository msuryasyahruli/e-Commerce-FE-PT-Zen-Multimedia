/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'max-lg': {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }

      'max-md': {'max': '960px'},
      // => @media (max-width: 960px) { ... }

      'max-sm': {'max': '576px'},
      // => @media (max-width: 576px) { ... }
      
      'min-sm': '577px',
      // => @media (min-width: 577px) { ... }

      'min-md': '961px',
      // => @media (min-width: 961px) { ... }

      'min-lg': '1441px',
      // => @media (min-width: 1441px) { ... }
    },
  },
  plugins: [],
}