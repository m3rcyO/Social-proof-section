/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
      },
      textColor: {
        'custom-purple': 'hsl(300, 43%, 22%)',
      },
    },
  },
  plugins: [],
}

