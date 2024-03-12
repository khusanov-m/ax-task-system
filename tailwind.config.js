/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        black: "#484848",
        grey: "#AFB2BE",
        greylight: "#EAEAEA",
        greybg: "#F8F8F8",
        blue: "#4971FF",
        red: "#F2565C",
        orange: "#EAA238",
        green: "#8CC074",
      },
    },
  },
  plugins: [],
};
