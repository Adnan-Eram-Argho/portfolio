/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fef9c3",
        
"secondary": "#f59e0b",
        
"accent": "#ff00ff",
        
"neutral": "#323338",
        
"base-100": "#2C2D32",
        
"info": "#0000ff",
        
"success": "#00ffff",
        
"warning": "#00ff00",
        
"error": "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

  