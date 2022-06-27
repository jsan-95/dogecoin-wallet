module.exports = {
  entry: "./src/public/App.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve:{
    extensions:['.js','.jsx'],
  },
  plugins: [
    new (require("html-webpack-plugin"))({
      template: "./src/public/index.html",
    }),
  ],
};