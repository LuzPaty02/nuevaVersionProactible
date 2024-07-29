// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1199px', // Adding the custom screen size for the logo
      },
      backgroundColor: {
        DEFAULT: '#ffffff', // Default background color white
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'custom-xs': '10px',
        'custom-m': '14px',
        'custom-l': '16px',
        'custom-xl': '20px',
      },
      fontWeight: {
        normal: 600,
        bold: 700,
      },
      textColor: {
        black: '#000000',
        darkGray: '#4a4a4a',
        blue: '#091766',
      },
    },
  },
  plugins: [],
};
