/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          KhmerMoul: 'Moul',
          NotoSansKhmer: 'Noto Sans Khmer',
        }
      },
    },
  },
  plugins: [],
}