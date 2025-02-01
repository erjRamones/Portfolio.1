/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  purge: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}