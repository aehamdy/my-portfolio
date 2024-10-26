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
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      spacing: {
        'horizontal-separator-mt': '1rem',
        'section-margin': '45px',  //inner section margin top
        'section-padding': '25px',  //inner section padding inline
        'main-section-padding': '25px',  //main section padding Y axis
      },
      borderRadius: {
        'main-section': '32px',  //main section rounded corners
      },
      colors: {
        accent: '#f6b846',
        'white-55': 'rgba(255,255,255,0.55)',  //#8C
        'white-85': 'rgba(255,255,255,0.85)', //#D9
        'white-90': 'rgba(255,255,255,0.9)',  //#E6
        'dark-gray': '#323232', // Dark gray
        'medium-gray': '#646464', // Medium gray
        'light-gray': '#999999', // Light gray
        'gray-197': 'rgba(197,202,213,0.3)', // #C5CAD54D
        'gray-197-15': 'rgba(197,202,213,.15)',
        'light-gray-dd': '#DDDDDD',
        'neutral-gray': '#9A9A9A', // Neutral gray
        'soft-white': '#EEEEEE', // Soft white
        'gray-666': '#666666',
        charcoal: '#3E4148', // Charcoal gray


        'body-light': 'rgb(246, 246, 246)',
        'body-dark': 'rgb(22, 22, 22)',
        'section-light': 'rgb(255, 255, 255)',
        'section-dark': 'rgb(34, 34, 34)',  

        'new-badge': 'rgba(246,184,70,.15)',

      },
      backgroundImage: {
        'nav-separator': 'radial-gradient(ellipse at top, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        'blurred-bg': 'linear-gradient(180deg, rgba(4, 25, 29, 0) 0%, rgb(1 9 15 / 90%) 100%)',
        'custom-gradient-to-r': 'var(--gradient-to-right)',
        'custom-gradient-to-b': 'var(--gradient-to-bottom)',
        'custom-gradient-center': 'radial-gradient(ellipse at top, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        'transparent-circle': 'linear-gradient(135deg,rgba(246,184,70,.4) 0%,rgba(246,184,70,.01) 100%)',
        'transparent-bg': 'linear-gradient(135deg,rgba(246,184,70,.2) 0%,rgba(246,184,70,.01) 100%)',
      },
      boxShadow: {
        'available-shadow': '0px 0px 6px 2px rgba(75, 255, 114, 0.88)',
        'not-available-shadow': '0px 0px 6px 2px rgba(252, 38, 2, 0.88)',
      },
      transitionDuration: {
        short: '500ms',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

