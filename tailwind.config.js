/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif']
      },
      colors: {
        sidebar: '#202123'
      }
    },
  },
  plugins: [],
}

