const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'xuni'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://192.168.2.250",
                pathRewrite: {"^/api" : ""}
            }
        }
    }
}