/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', '...defaultTheme.fontFamily.sans'],
        },
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-slash-zero': { 'font-feature-settings': '"cv11"' },
        '.font-tabular-numbers': { 'font-feature-settings': '"tnum"' },
        '.font-single-story-a': { 'font-feature-settings': '"ss01"' },
      });
    },
  ],
}