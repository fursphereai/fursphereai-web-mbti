/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      clipPath: {
        'inset-0': 'inset(0)',
        'inset-custom': 'inset(10px 20px 10px 20px)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5676CF, #AFBFE9)',
      },
      fontFamily: {
        balooRegular: ['"Baloo 2 Regular"', "sans-serif"],
        balooExtraBold: ['"Baloo 2 ExtraBold"', "sans-serif"],
        Inter: ['"Inter"', "sans-serif"],
        Ubuntu: ['"Ubuntu"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
