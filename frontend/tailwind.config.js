/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBase: '#03001C',
        brandDark: '#301e67',
        brandBlue: '#5b8fb9',
        brandAqua: '#B6eada'
      },
      fontFamily: {
        dancing: ['Dancing Script','cursive'],
      }
    },
  },
  plugins: [],
}
