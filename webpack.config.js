let path = require('path')
let webpack = require('webpack')
let envFile = require('node-env-file')
let CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: [
    './app/app.js',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locales$/, [/moment$/]),
    new webpack.NoEmitOnErrorsPlugin(),
    new CompressionPlugin({   
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  output: {
    path: path.resolve( __dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["babel-preset-es2015", "react", "babel-preset-stage-0" ]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      { 
        test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' 
      }
    ]
  },
  devtool: 'cheap-source-map' 
}
