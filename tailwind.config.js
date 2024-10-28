import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        hicTheme: {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            primary: {
              50: "#fcfbfa",
              100: "#f8f0ef",
              200: "#f1d5dd",
              300: "#e0acb9",
              400: "#d37e91",
              500: "#be5a6e",
              600: "#a14050",
              700: "#7b2f3b",
              800: "#552128",
              900: "#321417",
              DEFAULT: "#522c45",
            },
            secondary: {
              50: "#ecf4f2",
              100: "#c9f0ee",
              200: "#8ce9d8",
              300: "#51d1af",
              400: "#1ab480",
              500: "#129c56",
              600: "#118741",
              700: "#116935",
              800: "#0e4829",
              900: "#0a2c21",
              DEFAULT: "#00D084",
            },
            focus: "#00723F",
            success: {
              50: "#f2f7f7",
              100: "#d9eff7",
              200: "#aee1ef",
              300: "#79c4d9",
              400: "#40a2bd",
              500: "#2f83a1",
              600: "#286987",
              700: "#235069",
              800: "#19364c",
              900: "#102234",
              DEFAULT: "#40a2bd",
            },
            warning: {
              50: "#fcfbf8",
              100: "#faefd8",
              200: "#f5d6b0",
              300: "#e7ad7d",
              400: "#da7f50",
              500: "#c55e30",
              600: "#a94320",
              700: "#83321a",
              800: "#5b2313",
              900: "#3a160c",
              DEFAULT: "#da7f50",
            },
          },
        },
      },
    }),
  ],
};
