/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        brandBase: "#03001C",
        brandLightBase: "#05002e",
        brandDark: "#301e67",
        brandBlue: "#5b8fb9",
        brandAqua: "#B6eada",
        brandGrey: "#1f2937",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      animation: {
        scaleUpDown: "scaleUpDown 0.25s ease-in-out 1",
      },
      keyframes: {
        scaleUpDown: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scroll-behavior")(),
    require("tailwind-scrollbar-hide"),
  ],
};
