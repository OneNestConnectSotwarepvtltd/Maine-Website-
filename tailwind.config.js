/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#8b5cf6',
      },
      fontFamily: {
        // sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        // sans: ['"Comic Neue"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}