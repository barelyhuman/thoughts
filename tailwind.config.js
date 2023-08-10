/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{njk,html,js,tsx,ts}'],
  theme: {
    fontFamily: {
      sans: 'Inter',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
