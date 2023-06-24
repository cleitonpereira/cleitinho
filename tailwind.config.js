/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'img-profile': "url('./assets/profile.jpg')",
      },
      spacing: {
        '128' : '32rem',
      }
    },
  },
  plugins: [],
}

