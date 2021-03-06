import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import path from 'path'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import config from 'config'

const ENV = process.env.NODE_ENV

module.exports = {
  context: path.join(__dirname, '../'),
  entry: {
    app: [
      './src/main.jsx',
      'webpack-hot-middleware/client'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'axios',
      'classnames'
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash:16].js',
    publicPath: '/'
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, '../src'),
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src/styles'),
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../src/styles'),
        loader: `style!css?modules&importLoaders=1&localIdentName=${config.CSS}!postcss!sass`
      }
    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 2 versions']})
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app.html',
      filename: 'app.html',
      minify: {
        collapseWhitespace: false
      },
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    })
  ]
}
