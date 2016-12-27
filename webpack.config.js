const webpack = require('webpack');

const config = {
  entry: `${__dirname}/src/js/index.jsx`,
  output: {
    path: `${__dirname}/dist/public/js/`,
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: false,
      comments: false,
      mangle: true,
    })
  );
} else {
  config.plugins.push(
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    })
  );
}

module.exports = config;
