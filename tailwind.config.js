/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        roxo: {
          DEFAULT: "#7C3AED",
          claro: "#A78BFA",
          escuro: "#5B21B6",
        },
        azul: {
          DEFAULT: "#2563EB",
          claro: "#60A5FA",
          escuro: "#1E3A8A",
        },
        neon: "#22D3EE",
        base: {
          claro: "#F8F7FC",
          escuro: "#0B0B14",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        corpo: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradiente-principal": "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
        "gradiente-neon": "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
    },
  },
  plugins: [],
};
