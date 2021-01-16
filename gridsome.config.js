// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Mariage Manon & Martin`,
  transformers: {
    remark: {
      externalLinksTarget: `_blank`,
      externalLinksRel: [`nofollow`, `noopener`, `noreferrer`],
      anchorClassName: `icon icon-link`,
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: `gridsome-plugin-typescript`,
    },
    {
      use: `gridsome-plugin-tailwindcss`,
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`activity`],
      },
    },
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set(`@images`, `@/assets/img`)
  },
}
