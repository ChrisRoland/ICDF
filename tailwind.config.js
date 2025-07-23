/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'card-purple': 'hsl(249, 99%, 64%)',
        'card-dark-purple': 'hsl(278, 94%, 30%)',
        'bg-dark': 'hsl(278, 68%, 11%)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(163deg, hsl(249, 99%, 64%) 0%, hsl(278, 94%, 30%) 100%)',
        'main-gradient': 'linear-gradient(to bottom right, hsl(278, 68%, 11%), hsl(249, 99%, 64%))',
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
}