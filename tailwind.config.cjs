/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        primaryDark: "#4338ca",
        background: "#f3f4f6",
        textBase: "#1f2937",
        textMuted: "#6b7280",
      },
      fontSize: {
        title: ["1.25rem", { lineHeight: "1.75rem" }],
        subtitle: ["1rem", { lineHeight: "1.5rem" }],
        body: ["0.875rem", { lineHeight: "1.25rem" }],
      },
    },
  },
  plugins: [],
};
