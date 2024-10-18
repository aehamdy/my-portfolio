/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f6b846',
        'white-55': 'rgba(255,255,255,0.55)',
        'white-85': 'rgba(255,255,255,0.85)',
        'white-90': 'rgba(255,255,255,0.9)',
        'dark-gray': '#323232', // Dark gray
        'medium-gray': '#646464', // Medium gray
        'light-gray': '#999999', // Light gray
        'neutral-gray': '#9A9A9A', // Neutral gray
        'soft-white': '#EEEEEE', // Soft white
        charcoal: '#3E4148', // Charcoal gray
      },
    },
  },
  plugins: [],
}

