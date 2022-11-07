const path = require('path');

module.exports = {
  /** Define entry point */
  entry: path.resolve(__dirname, 'src', 'index.ts'),

  /** Define bundle params */
  output: {
    // Define output path and filename
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

    // Define library name
    library: 'VAR_TOOL_NAME',   

    // Define library type 
    libraryTarget: 'umd', 

    // Define library export
    libraryExport: 'default'
  },

  module: {
    rules: [
      /** Process ts files */
      {
        test: /\.ts$/,
        exclude: [ /node_modules/ ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ],
            },
          },
          'ts-loader',
        ]
      },

      /** Process css files */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
        ],
      },

      /** Process svg files */
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
            options: {
              removeSVGTagAttrs: false
            }
          }
        ],
      },
    ]
  },
};