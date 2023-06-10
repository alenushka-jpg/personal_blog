export default {
  mode: 'development',
  entry: './source/js/script.js', // Укажите точку входа для вашего приложения
  output: {
    filename: 'bundle.js', // Укажите имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
