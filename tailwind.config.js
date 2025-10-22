/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        slateblue: "#708090",  // fondo body
        golden: "#facc15",     // acentos hover
        darkblue: "#1e293b",   // footer
        brightblue: "#2563eb", // botones
        lightgray: "#e2e8f0",  // fondos
        textsecondary: "#475569",
        textmain: "#444",
      },
    },
  },
  plugins: [],
}

