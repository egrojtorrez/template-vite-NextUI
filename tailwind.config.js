import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
      themes: {
        "uabcTheme": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            primary: {
              50:  '#fcfbfa',
              100: '#f8f0ef',
              200: '#f1d5dd',
              300: '#e0acb9',
              400: '#d37e91',
              500: '#be5a6e',
              600: '#a14050',
              700: '#7b2f3b',
              800: '#552128',
              900: '#321417',
              DEFAULT: "#522c45",
            },
            secondary: {
              50: "#faefdd",
              100: "#f8ead1",
              200: "#f7e5c6",
              300: "#f1d5a3",
              400: "#e7b65f",
              500: "#DD971A",
              600: "#c78817",
              700: "#a67114",
              800: "#855b10",
              900: "#6c4a0d",
              DEFAULT: "#DD971A",
            },
            focus: "#00723F",
          },
        },
      },
    })],
}
