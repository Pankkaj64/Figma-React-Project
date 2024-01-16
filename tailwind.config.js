/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dodgerblue: "#217eec",
        gray: "#28262c",
        dimgray: "#696671",
        gainsboro: "#d9d9d9",
        black: "#000",
        mediumblue: "#2421ce",
        darkblue: "#240db3",
        midnightblue: "#0f1b83",
        slateblue: "#424db8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        mixed: "Mixed",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      "9xl": "28px",
      "6xl": "25px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
