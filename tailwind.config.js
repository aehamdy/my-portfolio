/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
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
        'white-85': 'rgba(255,255,255,0.85)', //#D9
        'white-90': 'rgba(255,255,255,0.9)',
        'dark-gray': '#323232', // Dark gray
        'medium-gray': '#646464', // Medium gray
        'light-gray': '#999999', // Light gray
        'neutral-gray': '#9A9A9A', // Neutral gray
        'soft-white': '#EEEEEE', // Soft white
        charcoal: '#3E4148', // Charcoal gray

        'body-light': 'rgb(246, 246, 246)',
        'body-dark': 'rgb(22, 22, 22)',
        'section-light': 'rgb(255, 255, 255)',
        'section-dark': 'rgb(34, 34, 34)',  

      },
    },
  },
  plugins: [],
}

