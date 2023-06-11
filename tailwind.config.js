/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'solid-heading': '#42446E',
        'light-content': '#A7A7A7',
        'light-heading': '#CCCCCC',
        'dark-heading': '#1f2428',
        'dark-content': '#666666',
        'dark-background': '#191919',
        'dark-card': '#363636',
        'green-text': '#018C0F',
        'github-link': '#0969da',
        greenbg: '#D7FFE0',
      },
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
