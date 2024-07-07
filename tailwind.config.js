/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["winter", "dark"],
  },
};
