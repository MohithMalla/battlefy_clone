/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          50: "#ECF3FF",
          100: "#D9E7FF",
          200: "#B3CFFF",
          300: "#8CB8FF",
          400: "#66A0FF",
          500: "#4088FF",
          600: "#2E67CC",
          700: "#1F4799",
          800: "#122966",
          900: "#091633"
        }
      },
      boxShadow: {
        glow: "0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)"
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
