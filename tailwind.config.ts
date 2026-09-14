import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        field: "#07090c",
        "halo-1": "#2dd4bf",
        "halo-2": "#22d3ee",
        "halo-3": "#3b82f6",
        ink: "#e8eef4",
        muted: "#8b99a8",
        warn: "#f5b942",
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(34, 211, 238, 0.28), 0 0 40px rgba(34, 211, 238, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
