/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBase: '#000000',
        brandLightBase: '#05002e',
        brandDark: '#301e67',
        brandBlue: '#5b8fb9',
        brandAqua: '#B6eada',
        brandGrey: '#1f2937',

      },
      fontFamily: {
        dancing: ['Dancing Script','cursive'],
      }
    },
  },
  plugins: [
    require('tailwind-scroll-behavior')(),
    require('tailwind-scrollbar-hide')
  ],
}
