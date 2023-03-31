const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.base')
const path = require('path')
const apiMocker = require('mocker-api')

const config = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.module.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            // https://github.com/webpack-contrib/css-loader#modules
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]' // '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    static: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    open: true,
    https: true,
    proxy: {
      '/api': {
        target: 'https://some-api.com',
        changeOrigin: true // useful in name-based virtual hosted sites
      }
    },
    onBeforeSetupMiddleware: (devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      apiMocker(devServer.app, path.resolve(__dirname, '../mock'), {
        priority: 'mocker',
        proxy: {},
        pathRewrite: {},
        changeHost: true
      })
    }
  },

  target: 'web',
  // prettier-ignore
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
}

module.exports = merge(common, config)
