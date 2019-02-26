var path = require("path");
const MiniExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "public", "dist"),
            filename: "bundle.js",
            publicPath: "/dist"
        },
        module: {
            rules: [
            {
                test: /\.js$/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                {
                    loader: MiniExtractTextPlugin.loader,
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        sourceMap: true
                    }
                }
                ]
            },
            {
                test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    outputPath: '/images'
                }
            }
            ]
        },
        plugins: [
            new MiniExtractTextPlugin({
                filename: "styles.css",
            })
        ],
        devtool: isProduction ? 'inline-source-map' : 'source-map', //source-map takes longer to build, but is better for production
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,   //tells dev server that we are routing via client-side code, it should return index.html for all 404 routes
            publicPath: '/dist/'
        }
        }
};