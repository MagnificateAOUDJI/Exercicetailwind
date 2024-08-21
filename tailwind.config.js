/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orange': '#f86009',
        'blanc':'#fff2f2',
        'gris': '#5c5c5c'
      },
      backgroundColor: {
        'orange': '#f86009',
        'blanc':'#fff2f2',
        'blueciel': '#08D3BB',
        'violet':'#5a31f0'
      },
      borderColor: {
        'orange': '#f86009',
        'blanc':'#fff2f2',
        'blueciel': '#08D3BB',
        'violet':'#5a31f0'
      },
      placeholderColor: {
        'orange': '#f86009',
        'blanc':'#fff2f2',
      },
      width: {
        5: '500px',
       
      },
      fontFamily: {
        'display': 'Poppins, Sans-serif',
      },
    },
  },
  plugins: [],
}