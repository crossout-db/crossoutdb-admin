import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        text: '#ffffff',
        background: '#404040',
        primary: '#262626',
        secondary: '#000000',
        accent: '#f49d06',
        xoPrimary: '#8b8e8c',
        xoSecondary: '#cb6600',
        xoTetriary: '#f9e9e2',
        xoQuaternary: '#ffffcb',
        xoQuinternary: '#d25908',
        xoCommon: '#ffffff',
        xoRare: '#0066CC',
        xoSpecial: '#33CCCC',
        xoEpic: '#B800FF',
        xoLegendary: '#F09E2E',
        xoRelic: '#FF6600',
        xoBase: '#8b8e8c',
      },
    },
  },
  plugins: [],
} satisfies Config;
