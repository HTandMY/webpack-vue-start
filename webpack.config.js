const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: [".js", ".vue", ".scss", ".css"],   //import时允许隐藏的扩展名
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
        }
    },
    devtool: "eval-cheap-module-source-map",            //开发模式下代码映射模式
    entry: {
        index: './src/main.js',
    },
    output: {
        filename: 'js/app.[hash:8].js',
        chunkFilename: 'js/chuck.[hash:8].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,                         //压缩代码
        minimizer: [new UglifyJsPlugin({        //压缩代码使用的插件
            uglifyOptions: {
                output: {
                    comments: false,
                }
            }
        })]
    },
    devServer: {
        contentBase: './src/public'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: './src/public/index.html',
            favicon: './src/public/favicon.png',
            hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {   
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" 
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: './images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};