/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D96F28',
        white: '#ffffff',
        black: '#000',
        tablecolor: '#0163D2',
        print: '#34A300',
        red: '#A30000',
        inputBg: '#FFF2EA', // Add this line
      },
      backgroundImage: {
        login: "url('images/login.svg')",
        banner: "url('images/Banner/banner.svg')",
        netionl: "url('images/Banner/netionl.png')",
      },
    },
  },
  plugins: [],
};
