module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: [
        __dirname + '/src/index.js'
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + '/dist'
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};