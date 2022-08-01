/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#fe7d6a',
        'trow' : '#FE7D6A',
        'tred' : '#ff0000'
      },
    },
  
  },
  plugins: [],
  corePlugins: {
        preflight: false,
        }
}
