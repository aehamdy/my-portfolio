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
        heading: 'var(--heading-color)',
        paragraph: 'var(--paragraph-color)',
        button: 'var(--button-color)',
        icon: 'var(--icon-color)',
      }
    },
  },
  plugins: [],
}

