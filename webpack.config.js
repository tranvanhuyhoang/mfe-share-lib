const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "share-lib",
    webpackConfigEnv,
  })

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    // output: {
    //   libraryTarget: "system",
    //   filename: "js/app.js",
    // },
    externals: ["vue", "vue-router", /^mfe\/.+/],
    plugins: [new VueLoaderPlugin()],
  })
}
