var path = require('path'); // Webp Config needs this line to make sure the filepath is absolute. It is needed mostly for webpack-dev-server usage. (https://github.com/webpack-contrib/awesome-webpack#table-of-contents)
var webpack = require('webpack'); // Needed for Plugins that use Webpack
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => { // You may use an Object ( take out: "() => { return" ) or an ES6/ES2015 function so that we can pass the env parameter.
    
    // Create Plugins variable to hold production vs development.
    var plugins = env.prod
        ?   [ // When in Production
                //new webpack.optimize.UglifyJsPlugin({
                    //Change settings here so that non dev one is debuggable
                //}),
            ]
        :   [ // When in Development
                new webpack.HotModuleReplacementPlugin() // Activating HMR
            ];
            
    // Pushing Plugins that are used regardless dev vs prod.
    plugins.push(
        new ExtractTextPlugin("assets/css/styles.css"), // Name and Destination (It outputs it as ..css name for some reason?)
        new HtmlWebpackPlugin({
            template: 'src/index.html', // Where to look for the Source Index.html
            filename: 'index.html' // Where to place the new index.html file for the App/Dist dir.
        }),
        new CleanWebpackPlugin(['dist']) // Removes Dist/App folder before compiling happens.

    );

    return {
        entry: './src/assets/js/app.js', // My main JS file with all my requires/imports. (Resets a default. Needed for this file.)
        output: {
            path: path.resolve(__dirname, 'app'), // My output file path. (Resets a default. Needed for this file.) Could also just be path: __dirname+'/app/js' if not using webpack-dev-server. ** Make this the dist/app folder so that all your compiled stuff goes here. This way you can let index.html be index.html and style.css be assets/css/style.css.
            filename: 'assets/js/app.min.js' // What the name of my output file is. (Resets a default. Needed for this file.)
            //publicPath: '/app/' // This is used if Webpack-dev-server fails but its failing to live reload anyway.
        },
        devtool: env.prod ? 'source-map' : 'eval',

        module: { // Adding Loaders.
            rules: [
                { // CSS Compiler (uses sass and css-loader)
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use : ['css-loader', 'sass-loader']
                    })
                },
                { // HTML Compiler (html-loader)
                    test: /\.html$/,
                    use : ['html-loader']
                },
                { // CSS Compiler (uses sass and css-loader)
                    test: /\.(jpg|png)$/,
                    use : [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/img/' // Image Destination for App/Dist Dir.
                            }
                        }
                    ]
                }
            ]
        }, // Modules End

        plugins: plugins,
        devServer: {
            hot: env.prod ? false : true, // Tell the dev-server we're using HMR
        }

    };
}