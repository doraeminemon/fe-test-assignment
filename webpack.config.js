module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: 'file-loader',
      },
    ],
  },
};
