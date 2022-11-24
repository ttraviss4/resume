/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'pdf': "1056px"
      },
      width: {
        'pdf': "816px"
      }
    },
    fontFamily: {
      'sans': ['BlinkMacSystemFont'],
    },
  },
  plugins: [],
}
