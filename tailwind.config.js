/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'img-profile': "url('./assets/profile.jpg')",
        'back-city': "url('./assets/sp.jpg')",
        'back-mountain': "url('./assets/mountain.jpg')",
        'back-city-night': "url('./assets/sp-night.jpg')",
      },
      spacing: {
        '128' : '32rem',
      }
    },
  },
  plugins: [],
}

