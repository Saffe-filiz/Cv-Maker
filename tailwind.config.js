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
        },

        boxShadow: {
            'menu':' rgba(0, 0, 0, 0.2) 0px 5px 5px -3px\, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px\, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
            'form': ' rgba(0, 0, 0, 0.2) 0px 3px 1px -2px\, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px\, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px' 
        },
    }
 },
  plugins: [],
}