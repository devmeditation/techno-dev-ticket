/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "420px",
      },

      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },

      backgroundImage: {
        background: "url('/background.png')",
      },

      colors: {
        brand: {
          300: "rgb(255, 121, 244)",
          500: "rgb(255, 81, 229)",
          700: "rgb(255, 34, 221)",
          
        },
        green: {
          500: "#04D361",
        },
        yellow: {
          500: "#FF2"
        },
        neutral: {
          200: "#e1e1e6",
          800: "#202024",
          900: "#121214",
        },
      },

      dropShadow: {
        ticket: "0 0 48px rgb(255, 34, 221, 0.25)",
      },
    },
  },
  plugins: [],
};
