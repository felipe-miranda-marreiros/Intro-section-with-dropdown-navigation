/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'snape-white': 'hsl(0, 0%, 98%)',
        'snape-gray': 'hsl(0, 0%, 41%)',
        'snape-black': 'hsl(0, 0%, 8%)',
      },
      backgroundImage: {
        'hero-mobile': "url('/public/image-hero-mobile.png')",
        'hero-desktop': "url('/public/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
};
