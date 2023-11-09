import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      default: "Noto Sans",
    },
    screens: {
      tablet: "376px",
      desktop: "769px",
      xlTablet: "1024px",
    },
    extend: {
      backgroundImage: {
        goggles: "url('/vr-goggles.jpeg')",
      },
      boxShadow: {
        nav: "0px 1px 2px 0px rgba(0, 0, 0, 0.07)",
      },
      backgroundColor: {
        overlay:
          "linear-gradient(0deg, rgba(14, 32, 76, 0.70) 0%, rgba(14, 32, 76, 0.70) 100%)",
      },
      colors: {
        dark: '#3D4160',
      },
    },
  },
  plugins: [],
};
export default config;
