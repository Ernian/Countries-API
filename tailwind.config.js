/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2b3945',
        'very-dark-blue-dm': '#202c37',
        'very-dark-blue-lm': '#111517',
        'dark-gray': '#858585',
        'very-light-gray': '#f2f2f2',
        'wite': '#fff',
      }
    },
    screens: {
      // xl: '1440px',
      // sm: '375px'
    }
  },
  plugins: [],
}
