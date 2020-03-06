const webpack = require('webpack');
//公共文件
module.exports={
    target: 'node',
    mode: process.env.NODE_ENV,
    module: {
        rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-react', ['@babel/preset-env']]
            }
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'production')
        })
    ]
}