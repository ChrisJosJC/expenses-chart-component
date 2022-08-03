/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "crema": "hsl(var(--cream) /<alpha-value>)",
      "cyan": "hsl(var(--cyan) /<alpha-value>)",

      "pale-orange": "hsl(var(--pale-orange) /<alpha-value>)",
      "soft-red": "hsl(var(--soft-red) /<alpha-value>)",
      white: "#FFF",
    },
    textColor: {
      white: "#FFF",
      black: "#000",
      "primary": "hsl(var(--dark-brown))",
      "secundary": "hsl(var(--medium-brown))",
    },
    extend: {}
  },
  plugins: [],
}