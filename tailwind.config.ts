import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { violet: "#6C3BFF", orange: "#FF7049", turquoise: "#17C9C3", yellow: "#FFD65A", cream: "#FFF9F0", ink: "#1D1933" }, fontFamily: { sans: ["var(--font-inter)"], display: ["var(--font-space)"], hand: ["var(--font-caveat)"] }, boxShadow: { soft: "0 24px 80px rgba(36, 19, 81, .12)" } } },
  plugins: []
};
export default config;
