import type { Config } from "tailwindcss";

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};