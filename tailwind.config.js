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
      spacing: {
        '30': '30px',
        'main-section-padding': '30px 30px 0',
      },
      colors: {
        accent: '#f6b846',
        'white-55': 'rgba(255,255,255,0.55)',  //#8C
        'white-85': 'rgba(255,255,255,0.85)', //#D9
        'white-90': 'rgba(255,255,255,0.9)',  //#E6
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
      backgroundImage: {
        'blurred-bg': 'linear-gradient(180deg, rgba(4, 25, 29, 0) 0%, rgb(1 9 15 / 90%) 100%)',
        'custom-gradient-to-r': 'linear-gradient(to right, #6e6e6e, transparent)',
        'custom-gradient-to-b': 'linear-gradient(to bottom, #6e6e6e, transparent)',
        'transparent-circle': 'linear-gradient(135deg,rgba(246,184,70,.4) 0%,rgba(246,184,70,.01) 100%)',
      },
      boxShadow: {
        'available-shadow': '0px 0px 6px 2px rgba(75, 255, 114, 0.88)',
        'not-available-shadow': '0px 0px 6px 2px rgba(252, 38, 2, 0.88)',
      },
      transitionDuration: {
        short: '500ms',
      }
    },
  },
  plugins: [],
}

