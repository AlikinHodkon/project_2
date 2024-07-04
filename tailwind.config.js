/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      wiggle: {
        '0%': { transform: 'rotateY(0deg)' },
        '75%': { transform: 'rotate(3deg)' },
      }
    },
  },
  plugins: [],
}