
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports ={
  entry : './assets/js/src/app.js',
  output : {
    filename : './assets/js/dist/main.js'
  },
  module:{
    rules:[
      {test: /\.scss$/,
      use:ExtractTextPlugin.extract({
        fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
      })
    }
    ]
  },
  plugins:[
    new ExtractTextPlugin('assets/stylesheets/dist/style.css')
  ]

}
