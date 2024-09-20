/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover': '#9d42d7',
        'primary': '#4a29a4',
        'black':"#2d2f31"
      }
    },
  },
  plugins: [],
}