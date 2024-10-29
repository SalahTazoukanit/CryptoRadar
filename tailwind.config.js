/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "green1": "#0ECB81" ,
      "red1" : "#F6465D",
      "white1" : "#ffffff",
      "yellow1" : "#F0B90B",
      "black" : "#000000",
      "gray" : "#1E2329",
      "transparent" : "transparent"
    },
    
  },
  plugins: [function ({ addBase }) {
    addBase({
      'h1': { fontSize: '40px', fontWeight: 'bold' },
      'h2': { fontSize: '30px', fontWeight: 'semibold' },
      'h3': { fontSize: '20', fontWeight: 'medium' },
      'h4': { fontSize: '1.25rem', fontWeight: 'medium' },
      'h5': { fontSize: '1.125rem', fontWeight: 'normal' },
      'h6': { fontSize: '1rem', fontWeight: 'normal' },
    });
  },],
}

