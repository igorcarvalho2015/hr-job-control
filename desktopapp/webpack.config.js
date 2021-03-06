
module.exports = {
    entry: './js/app.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react']
          }
      }]
    },
    devServer: {
      inline: true,
      contentBase: './',
      port: 3333
  }
}
