// vue.config.js
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",

    configureWebpack: {
        plugins: [new GenerateSW()]
    }
    // options...
}