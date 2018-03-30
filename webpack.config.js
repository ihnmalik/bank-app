const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  // entry: './src/store/bankStore.jsx',
  // entry: './src/bootstrap/form.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        // test: /.jpg$/,
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /.s?css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },

    ],
  },
  devtool: 'cheap-module-eval-source-map'
}; 






























// {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }