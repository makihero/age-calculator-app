/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)',
        'white': 'hsl(0, 0%, 100%)',
        'off-white': 'hsl(0, 0%, 94%)',
        'light-grey': 'hsl(0, 0%, 86%)',
        'smokey-grey': 'hsl(0, 1%, 44%)',
        'off-black': 'hsl(0, 0%, 8%)'
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch