/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        azulOscuro: "#1E3A8A",
        verdeBosque: "#10B981",
        grisClaro: "#F3F4F6",
        blancoPuro: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"], // Para el cuerpo del texto
        title: ["Poppins", "Montserrat", "sans-serif"], // Para los títulos
      },
    },
  },
  plugins: [],
};
