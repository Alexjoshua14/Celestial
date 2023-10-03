/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    colors: {
      primary: {
        '900': '#006087',
        '800': '#0081a7',
        '700': '#0091ba',
        '600': '#16a4cc',
        '500': '#23b2d9',
        '400': '#41bddb',
        '300': '#5fc9de',
        '200': '#88d9e6',
        '100': '#b6e8ef',
        '50': '#e2f6f8'
      },
      accent: {
        '500': '#8ACB88',
      },
      background: {
        'primary': '#F5F5F5',
        'accent': '#f8e7e5'
      },
      foreground: {
        'primary': '#252627'
      },
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      teal: colors.teal,
      pink: colors.pink,
      yellow: colors.yellow,
      slate: colors.slate,

    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // sans: ['var(--font-cormonant'],
        // serif: ['var(--font-catamaran)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}