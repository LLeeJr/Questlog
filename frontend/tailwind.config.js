const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme,
      primary: '#282828',
      primaryweak: '#404040',
      white: '#FFFFFF',
      qlyellow: '#F5D75B',
      qlgreen : '#82F566',
      qlpurp: '#C484F5',
      text: {
        DEFAULT: '#F5D75B',
        weekly : '#82F566',
        speci: '#C484F5',
      },
    },
    extend: {},
  },
  plugins: [],
}
