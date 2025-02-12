/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "45px": "45px",
      },
      fontFamily: {
        myfont: [
          "Avenir-Regular",
          "MAZIUS-Italic",
          "NeutralFace-Bold",
          "sans-serif",
        ],
      },
      padding: {
        165: "165px",
      },

      screens: {
        md: "744px",
        lg: "1065px",
        xl: "1440px",
      },
      spacing: {
        "100px": "100px",
        "292px": "292px",
        "302px": "302px",
        "327px": "327px",
        "372px": "372px",
        "488px": "488px",
        "520px": "520px",
        "540px": "540px",
        "550px": "550px",
        "640px": "640px",
        "689px": "689px",
        "720px": "720px",
        "804px": "804px",
        "920px": "920px",
        "960px": "960px",
        "1110px": "1110px",
      },
      colors: {
        darkBackground: "#0e1010",
        border: "#272D2B",
        get: "#2F3634",
        textIcon: "#D1D5DB",
      },
    },
  },

  plugins: [],
};
