var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap/dist/js/bootstrap.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      Main: 'app/components/Main.jsx',
      Login: 'app/components/Login.jsx',
      Registration: 'app/components/Registration.jsx',
      Users: 'app/components/Users.jsx',
      User: 'app/components/User.jsx',
      Nav: 'app/components/Nav.jsx',
      usersList: 'app/api/usersList.jsx',
      Posts: 'app/components/Posts.jsx',
      Logout: 'app/components/Logout.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
