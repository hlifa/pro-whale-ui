/*
 * @Author: your name
 * @Date: 2021-03-22 17:44:56
 * @LastEditTime: 2021-04-02 17:26:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /whale-ui/vue.config.js
 */
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const mergeConfigureWebpack = isProd
  ? {
      output: {
        libraryExport: "default",
      },
    }
  : {
      entry: {
        examples: "./docs/entry.js",
      },
      output: {
        filename: "[name].[hash:7]js",
        chunkFilename: isProd ? "[name].[hash:7].js" : "[name].js",
      },
      resolve: {
        alias: {
          "@": __dirname + "/src",
        },
      },
    };

const chainWebpack = isProd
  ? () => {}
  : (config) => {
      config.plugin("html").tap((args) => {
        args[0].template = path.resolve(__dirname, "./docs/index.tpl");
        return args;
      });

      // 解析Markdown文件转成vue组件
      config.module
        .rule("md")
        .test(/\.md$/)
        .use("vue-loader")
        .loader("vue-loader")
        .options({
          compilerOptions: {
            preserveWhitespace: false,
          },
        })
        .end()
        .use("markdown-loader")
        .loader(
          require("path").resolve(__dirname, "./docs/loader/markdown-loader.js")
        )
        .end();
    };

module.exports = {
  outputDir: path.resolve(__dirname, "./dist"),
  publicPath: isProd ? "/" : "/pro-whale-ui/",
  configureWebpack: mergeConfigureWebpack,
  chainWebpack: chainWebpack,
};
