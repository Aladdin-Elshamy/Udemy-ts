/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stars: '#b4690e',
        testimonilasBg: "#F7F9FA"
      },
      screens: {
        'xsm': '200px',
      },
    },
  },

  plugins: [],
}
