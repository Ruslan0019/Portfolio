/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "45px": "45px", // Добавляем кастомный размер шрифта 40 пикселей
      },
      fontFamily: {
        myfont: ["Avenir-Regular", "MAZIUS-Italic", "NeutralFace-Bold", "sans-serif"], // Здесь "sans-serif" - запасной шрифт
      },
      padding: {
        165: "165px", // Кастомный паддинг
      },

      screens: {
        md: "744px", // Средние экраны
        lg: "1065px", // Большие экраны
        xl: "1440px", // Очень большие экраны
      },
      spacing: {
        "100px": "100px",
        "689px": "689px",
        "292px": "292px",
        "960px": "960px",
        "302px": "302px",
        "1110px": "1110px",
        "372px": "372px",
        "920px": "920px",
        "804px": "804px",
        "520px": "520px",
        "488px": "488px",
        "540px": "540px",
        "550px": "550px",
        "720px": "720px",
        "327px": "327px",
        "640px": "640px",
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
