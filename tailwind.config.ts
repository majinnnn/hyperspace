import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #040478, #6d28d9, #d946ef)',
        'yellow-gradient': 'linear-gradient(to right, #d2f220, #d946ef)',
      },
    },
  },
  plugins: [],
};
export default config;
