const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.less$/, // .less and .css
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?url=false',
                    'less-loader'
                ],
            },
        ]
    },
    // Add an instance of the MiniCssExtractPlugin to the plugins list
    // But remember - only for production!
    plugins: [new MiniCssExtractPlugin()],
    optimization: {
        minimize: true,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
