module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        fern: "url('/assets/img/fern.jpg')",
        flower: "url('/assets/img/flower.png')"
      }),
      colors: {
        dark: "#414847",
        green: "#84adaa",
        juniper: "#6b9294",
        grey: {
          light: "#848a8a",
          dark: "#282b2a",
        },
        gold: "#a37b55",
      },
      fontFamily: {
        baskerville: ["'Libre Baskerville'", "serif"],
        haviland: ["'Mr De Haviland'"],
        arapey: ["Arapey"],
      },
      backgroundSize: {
        "30%": "30%",
        "50%": "50%",
      },
      inset: {
        "-full": "-100%",
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
