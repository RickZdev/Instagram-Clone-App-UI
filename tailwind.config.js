/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0094F5',
        secondary: '#3EA9E5',
      },
      fontFamily: {
        SfUiRegular: 'SFUIText-Regular',
        SfUiMedium: 'SFUIText-Medium',
        SfUiSemiBold: 'SFUIText-SemiBold',
        SfUiBold: 'SFUIText-Bold',
        SfProRegular: 'SF-Pro-Text-Regular',
        SfProSemiBold: 'SF-Pro-Text-Semibold',
      }
    },
  },
  plugins: [],
}
