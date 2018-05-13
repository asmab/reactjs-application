import path, {resolve} from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ExtractTextPlugin = require('extract-text-webpack-plugin')
// Instances 
const extractCSS = new ExtractTextPlugin('vendor.css')
const extractSCSS = new ExtractTextPlugin('styles_1.css')
const extractLESS = new ExtractTextPlugin('styles_2.css')


export default {
    devtool: 'inline-source-map',

    entry: [ 'webpack-hot-middleware/client?reload=true', './src/index'],

    target: 'web',

    output: {
        path: resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        contentBase: './src',
        publicPath: '/'
    },

    plugins: [
        // Create index.html from template. It will then inject bundle.js into index.html automatically at build time.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),

        //jquery and tether are needed by Bootstrap 4
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: "tether"            
        }),
        
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new ExtractTextPlugin({ })
    ],

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), use: 'babel-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
            { test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.(png|jpg|svg)$/, use: 'file-loader' },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader']
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'less-loader' ]
                })
            }
        ]
    }
};
