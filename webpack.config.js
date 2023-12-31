const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const config = {
    entry: {
      index: "./src/index.jsx"
    },
    devServer: {
      static: "./dist",
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html"
      }),
      // Add the CopyWebpackPlugin configuration
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "static", // Source folder with your static files
            to: "./" // Destination folder in the 'dist' directory
          }
        ]
      })
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true
    },

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Resolve URLs
            "resolve-url-loader",
            // Compiles Sass to CSS
            "sass-loader"
          ]
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource"
        },
        {
          test: /\.(?:js|jsx|mjs|cjs)$/,
          exclude: /node_modules/,
          use: "babel-loader",
          resolve: {
            extensions: [".js", ".jsx"]
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource"
        }
      ]
    },
    resolve: {
      alias: {
        Styles: path.resolve(__dirname, "src/styles")
      }
    }
  };
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.mode = "development";
  } else config.mode = "production";
  return config;
};
