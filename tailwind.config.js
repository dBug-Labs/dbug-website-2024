/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',   // Small screens (e.g., mobile portrait)
        'md': '768px',   // Medium screens (e.g., tablets)
        'lg': '1024px',  // Large screens (e.g., small desktops)
        
      },
    },
  },
  plugins: [],
}