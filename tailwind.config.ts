import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "rgb(25, 50, 53)",
      primary90: "rgb(25, 50, 53,.9)",
      primary80: "rgb(25, 50, 53,.8)",
      primary70: "rgb(25, 50, 53,.7)",
      primary60: "rgb(25, 50, 53,.6)",
      primary50: "rgb(25, 50, 53,.5)",
      primary40: "rgb(25, 50, 53,.4)",
      primary30: "rgb(25, 50, 53,.3)",
      secondry: "rgb(198, 163, 114)",
      secondry90: "rgb(198, 163, 114,.9)",
      secondry80: "rgb(198, 163, 114,.8)",
      secondry70: "rgb(198, 163, 114,.7)",
      secondry60: "rgb(198, 163, 114,.6)",
      secondry50: "rgb(198, 163, 114,.5)",
      secondry40: "rgb(198, 163, 114,.4)",
      secondry30: "rgb(198, 163, 114,.3)",
    },
  },
  plugins: [],
};
export default config;
