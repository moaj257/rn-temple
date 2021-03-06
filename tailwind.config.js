module.exports = {
  purge: {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      vodoo: "#44233B",
      finn: "#694c5c",
      cinnabar: "#DB4242",
      linen: "#ffefe2",
      monalisa: "#fd8f8f",
      camelot: "#7e4555",
      coldturkey: "#cfb7b3",
      tapestry: "#A76B7C", //border
      eunry: "#cba7a7", // input color,
      canonpink: "#8c4e5d", // input bg
      champagnepink: "#F6E0CE",
      mountbattenpink: "#96818D"
    }, 
    fontFamily: {
      sans: ['Mukta Malar', 'sans-serif'],
      serif: ['Baloo Thambi 2', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'xl': '0 0px 30px -12px #DB4242',
        '2xl': '0 0px 40px -12px #DB4242',
        '3xl': '0 0px 50px -12px #DB4242',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    textOverflow: true,
  }
}
