import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
				xs: '576px',
				sm: '768px',
				md: '992px',
				lg: '1200px',
				xl: '1400px',
				xxl: '1800px'
			},
			maxWidth: {
				xs: '540px',
				sm: '720px',
				md: '960px',
				lg: '1140px',
				xl: '1320px',
				xxl: '1750px'
			},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
