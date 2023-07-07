/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
        colors: {
            'borderColor': '#0000001f',
            'mobileColor': '#000000de',
            'brandColor': '#4372ff',
        },
        fontSize: {
          'm': '15px',
        }
    }
 },
  plugins: [],
}