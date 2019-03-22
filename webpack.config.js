var path = require('path'); // Webpack Config needs this line to make sure the filepath is absolute. It is needed mostly for webpack-dev-server usage. (https://github.com/webpack-contrib/awesome-webpack#table-of-contents)
var webpack = require('webpack'); // Needed for Plugins that use Webpack
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var glob = require('glob'); // Goes with Purify (and does not require an npm install)
var PurifyCSSPlugin = require('purifycss-webpack');
var SpriteLoaderPlugin = require('svg-sprite-loader/plugin'); // You must use this with Sprite Loader if you want it to extract to a new location.

// For most usecases you can use Parcel.

module.exports = env => { // You may use an Object ( take out: "env => { return" ) or an ES6/ES2015 function so that we can pass the env parameter.
    
    // Create Plugins variable to hold production vs development plugins.
    var plugins = env.prod
        ?   [ // When in Production
                //new webpack.optimize.UglifyJsPlugin({
                    //Change settings here so that non dev one is debuggable
                //}),
            ]
        :   [ // When in Development
                new webpack.HotModuleReplacementPlugin() // Activating HMR
            ];
            
    // Pushing Plugins that are used in both dev and prod.
    plugins.push(
        new ExtractTextPlugin( env.prod ? "assets/css/styles.[contenthash:10].min.css" : "assets/css/styles.css" ), // Name and Destination. Note that "[contenthash:10]" is only available on ExtractTextPlugin
        //new PurifyCSSPlugin({ // Make sure this is after ExtractTextPlugin!
            // Give paths to parse for rules. These should be absolute!
            //paths: glob.sync(path.join(__dirname, 'src/*.html')),
        //}),
        new HtmlWebpackPlugin({
            template: 'src/index.html', // Where to look for the Source Index.html
            filename: 'index.html' // Where to place the new index.html file for the App/Dist dir.
        }),
        new CleanWebpackPlugin(['app']), // Removes Dist/App folder before compiling happens.
        new SpriteLoaderPlugin() // You must use this with Sprite Loader if you want it to extract to a new location.
    );

    return {
        devtool: env.prod ? 'source-map' : 'eval', // Alternatively, we can use inline-source-map instead of eval to have CSS Sourcemaps on Dev mode.
        plugins: plugins, // Please note that there are alternative options on how to pass plugins that are prod vs dev.
        entry: './src/assets/js/app.js', // Your main JS file with all your requires/imports. (Resets a default. Needed for this file to work.)
        output: {
            path: path.resolve(__dirname, 'app'), // Your output file path. (Resets a default. Needed for this file to work.) 
            // Make this the dist/app directory so that all your compiled stuff goes here. This way you can let index.html template compile to index.html and style.css compile to assets/css/style.css. (Needed for our current directory structure.)
            filename: env.prod ? 'assets/js/app.[chunkhash].min.js' : 'assets/js/app.js' // What the name of your output file is. (Resets a default. Needed for this file to work.)
            //publicPath: '/app/' // This is used if Webpack-dev-server fails but its failing to live reload anyway.
        },
        module: { // Adding Loaders.
            rules: [
                { // CSS compilers with source maps. They must be in order (last executes first).
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            { loader: 'css-loader', options: { sourceMap: true } },
                            { loader: 'postcss-loader', options: { sourceMap: true } },
                            { loader: 'sass-loader', options: { sourceMap: true } }
                        ]
                    })
                },
                { // HTML Compiler (html-loader)
                    test: /\.html$/,
                    use : ['html-loader']
                },
                { // URL Loader to load assets (images)
                    test: /\.(jpe?g|png|gif)$/, // Note that if you are not using the SVG Sprite Loader, you can add SVG here as well.
                    use : [
                        {
                            loader: 'url-loader', // Optionally, you can use File-Loader (It is already included in Launchpad and url-loader uses file loader to move files if no url is needed. [you need both]).
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/media/images/', // Image Destination for App/Dist Dir.
                                limit: 10000 // This is only set when using URL Loader. (How big the file is/Greater files will come in as regular URLs).
                            }
                        },
                        { // If Imagemin is not working with jpgs, please check the docs.
                            loader: 'img-loader',
                            options: {
                                enabled: env.prod ? true : false
                            }
                        },
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/media/fonts/', // Image Destination for App/Dist Dir.
                                publicPath: '../../' // Because of our unique(?) file structure, we must set this so that our CSS takes the correct path.
                            }
                        }
                    ]
                },
                { // The Babel Loader
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'] // You may use env as stated in the docs.
                        }
                    }
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: { extract: true, spriteFilename: 'assets/media/vectors/svg-sprite-[hash:12].svg' },
                        }
                    ]
                },
                {
                    test: /\.js$/, // include .js files
                    enforce: "pre", // preload jshint loader (must be used as a preloader aka before all other loaders.)
                    exclude: /node_modules/, // exclude any and all files in the node_modules folder
                    use: [
                        {
                            loader: "jshint-loader",
                            options: {
                                // any jshint option http://www.jshint.com/docs/options/
                                // i. e.
                                camelcase: true,
                                // jshint errors are displayed by default as warnings
                                // set emitErrors to true to display them as errors
                                emitErrors: false,
                                // jshint to not interrupt the compilation
                                // if you want any file with jshint errors to fail
                                // set failOnHint to true
                                failOnHint: false,
                                // Lets JSHint know we are using ES6.
                                esversion: 6
                            }
                        }
                    ]
                }
            ]
        }, // Modules End
        externals: {
            'jquery' : 'jQuery' // jQuery is imported externally (from CDN). You will need to add Loadash, React, Angular, etc to this if you want to do the same with those. -- To import jQuery into your app.js (or other frameworks/libs), use "import $ from 'jquery';" and make sure to add your CDN dependency to your HTML file. (https://webpack.js.org/guides/author-libraries/)
        },
        devServer: {
            hot: env.prod ? false : true, // Tell the dev-server we're using HMR
        }
    };
}