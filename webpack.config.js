const webpack = require("webpack");
import HtmlWebpackPlugin from "html-webpack-plugin";

export default function(webpackConfig, env) {
  // 对roadhog默认配置进行操作，比如：
  if (env === "production") {
    webpackConfig.plugins.push(
      new webpack.BannerPlugin("版权所有，翻版必究"),
      new HtmlWebpackPlugin({
        template: "src/index.ejs",
        inject: true,
        favicon: "./src/assets/imgs/favicon.ico"
      })
    );
  }
  return webpackConfig;
}
