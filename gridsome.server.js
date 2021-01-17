// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs")
const http = require("http")
const path = require("path")

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // api.onCreateNode((options) => {
  //   const match = options?.internal?.typeName.match(/Strapi(.+)/)
  //   if (match) {
  //     const dirPath = `./src/assets/img/${match[1].toLowerCase()}`
  //     if (!fs.existsSync(dirPath)) {
  //       fs.mkdirSync(dirPath)
  //     }
  //     const filePath = path.join(
  //       dirPath,
  //       options.picture.hash + options.picture.ext
  //     )

      
  //     http.get(`http://localhost:1337${options.picture.url}`, (response) => {
  //       options.picture.url = path.resolve(__dirname, filePath)
  //       const file = fs.createWriteStream(filePath);
  //       response.pipe(file);
  //     })
  //   }
  // })
}
