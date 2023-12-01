/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E42313',
        white: '#FFFFFF',
        black: '#1D1D1B',
        gray: '#706F6F',
        'light-gray': '#EDEDED',
      },
      fontFamily: {
        sans: ["GothamRounded", 'sans-serif'],
        secondary: "Gotham",
      },
    },
  },
  plugins: [],
}
