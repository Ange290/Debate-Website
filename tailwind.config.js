/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
       agency: ['"Agency FB"', 'sans-serif'],
       sans: ['Helvetica', 'Arial', 'sans-serif']
      },
    },
    
  },
  plugins: [],
}

