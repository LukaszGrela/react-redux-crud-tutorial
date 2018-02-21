const path = require('path');
const OUTPUT_FOLDER = 'public';
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, OUTPUT_FOLDER),
        filename: './js/[name].bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, OUTPUT_FOLDER),
        historyApiFallback: true
    }
};