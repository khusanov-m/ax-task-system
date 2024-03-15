/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "ax-black": "#484848",
        "ax-grey": "#AFB2BE",
        "ax-greylight": "#EAEAEA",
        "ax-greybg": "#F8F8F8",
        "ax-blue": "#4971FF",
        "ax-red": "#F2565C",
        "ax-orange": "#EAA238",
        "ax-green": "#8CC074",
      },
    },
  },
  plugins: [],
};
