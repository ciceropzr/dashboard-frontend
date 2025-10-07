/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f97316", // laranja claro
          DEFAULT: "#ea580c", // laranja forte
          dark: "#c2410c", // laranja queimado
        },
        secondary: {
          light: "#c084fc", // roxo claro
          DEFAULT: "#a855f7", // roxo médio
          dark: "#7e22ce", // roxo profundo
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        surface: {
          light: "#f8fafc", // cinza quase branco
          dark: "#1e1b29", // roxo bem escuro puxado pro cinza
        },
        text: {
          light: "#1e293b", // cinza escuro (quase preto)
          dark: "#f8fafc", // quase branco
        },
      },
      backgroundImage: {
        login: "linear-gradient(to bottom right, #ea580c, #a855f7)", 
      },
    },
  },
  plugins: [],
};
