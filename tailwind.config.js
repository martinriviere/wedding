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
      }),
      colors: {
        dark: "#414847",
        green: "#84adaa",
        juniper: "#6b9294",
        grey: "#848a8a",
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
