/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barre-de-recherche": "var(--barre-de-recherche-font-family)",
        navbar: "var(--navbar-font-family)",
      },
    },
  },
  plugins: [],
};
