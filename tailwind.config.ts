/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
       colors: {
        'primary': '#1DB954',
        'secondary': '#1DB954',
        'secondarybg': '#222222',
        'bg': '##191414',
        'text': '#FFFFFF',
        'unActive': '#323232',
      }
    },
  },
  plugins: [],
}

