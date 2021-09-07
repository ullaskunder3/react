// 1.Enter point of application
// 2.Where to put the output file

const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public/script'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          
          // ---comment: for options we can create seperate .babelrc ---
          options: {
            presets: [
              "@babel/react" , 
              "@babel/env"
            ]
          }
        }
      }
    ]
  }
};
