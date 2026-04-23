/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Funnel Display"', "sans-serif"],

        body: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

