/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      colors: {
        brand: '#00d4ff',
        dark: '#111',
        light: '#e0e0e0',
      },
      animation: {
        drive: 'drive 1.5s ease-out forwards',
        scroll: 'scroll 15s linear infinite',
      },
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};







