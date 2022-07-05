const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "share-lib",
    webpackConfigEnv,
  })

  const config = merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    externals: ["vue", "vue-router", /^@mfe\/.+/],
    plugins: [new VueLoaderPlugin()],
  })

  return config
}
