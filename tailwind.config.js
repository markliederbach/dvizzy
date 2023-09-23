/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/routes/**/*.{svelte,js}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mingo: {
          primary: '#e879f9',    
          secondary: '#60a5fa',   
          accent: '#0891b2',    
          neutral: '#2d2933',   
          'base-100': '#111827',   
          info: '#4eb7e4',    
          success: '#48e584',   
          warning: '#facc15',   
          error: '#e93f53'
        }
      }
    ]
  }
}

