module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'ocean-bg': '#f9f9f9',
      'ocean-button-1': '#5ea244',
      'ocean-button-2': '#39b54a',
      'ocean-brown-1': '#4e2214',
      'ocean-brown-2': '#311813',
      'ocean-gray': '#282829',
      'transparent': 'rgba(0,0,0,0)',
      'ocean-red-1': '#c1121f',
      'ocean-red-2': '#b10d18',
      'ocean-orange-1': '#d76d31',
      'ocean-orange-2': '#d06427',
      'ocean-yellow-1': '#edd21f',
      'ocean-yellow-2': '#edbf1f',
      'ocean-blue-1': '#5ead3f',
      'ocean-blue-2': '#3c7e25',
      'ocean-transaction-bg': '#e8e8e8',
      'ocean-transaction-b-border': '#8f8f8f3d',

    },
    extend: {
      keyframes: {
        bounceX: {
          '0%,100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(25%)' },
        }
      },
      animation: {
        'arrow': 'bounceX 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}