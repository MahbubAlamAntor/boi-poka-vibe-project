/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bannerColor: 'rgba(19, 19, 19, 0.05)',
        primary: 'rgb(35, 190, 10)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

