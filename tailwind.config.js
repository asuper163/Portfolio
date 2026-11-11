/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#101216",
        elevated: "#181c22",
        borderDark: "rgba(255, 255, 255, 0.12)",
        accentCyan: "#22d3ee",
        accentEmerald: "#34d399",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
}
