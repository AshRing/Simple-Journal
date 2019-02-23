const path = require('path');
const MiniExtractTextPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

//function returns webpack config object when called. Advantageous b/c you can call function with arguments
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniExtractTextPlugin({
        filename: "styles.css",
    });  //extract css styles into their own file

    return {
        mode: isProduction ? "production" : "development",
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    isProduction ? 'style-loader' : MiniExtractTextPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }  
                    },
                    {
                        loader: 'sass-loader',
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
            }]
        },
        optimization: {
            splitChunks: {
              cacheGroups: {
                styles: {
                  name: 'styles',
                  test: /\.css$/,
                  chunks: 'all',
                  enforce: true
                }
              }
            }
          },
        plugins: [
            CSSExtract,
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer()
                    ]
                }
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //source-map takes longer to build, but is better for production
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,   //tells dev server that we are routing via client-side code, it should return index.html for all 404 routes
            publicPath: '/dist/'
        }
    }
}