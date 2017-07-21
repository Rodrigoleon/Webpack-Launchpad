# Webpack Launchpad

## Welcome!
Webpack Launchpad is a small, easy-to-use and well-documented Webpack boilerplate for Webpack beginners. Use it to create your next amazing project or learn how to use Webpack.

Almost every line in Webpack Launchpad will be commented so that you can learn what each line is doing. You may play around with the code however you like, or use it as is to kick start (or, uh, provide a launchpad for) your own project.

## Status
Webpack Launchpad is almost ready for consumption! I am currently testing some of its features, plugins and loaders as well as reviewing and cleaning all documentation. Aside from that, feel free to use it! As I find cool things (standards/best practices/new features), I will update this ongoing project!

## What Webpack Launchpad Includes:

### Webpack Features

* [Code Splitting](https://webpack.js.org/guides/code-splitting/)
* [Hot Module Reloading](https://webpack.js.org/guides/hot-module-replacement/)
* [Source Maps](https://webpack.js.org/configuration/devtool/) (JS and [CSS](https://webpack.js.org/loaders/css-loader/#sourcemap))
* [Cache Busting](https://webpack.js.org/guides/caching/)
* [Environment Variables](https://webpack.js.org/guides/environment-variables/)
* [External Dependencies](https://webpack.js.org/configuration/externals/)
* [Asset Loading](https://webpack.js.org/guides/asset-management/) (Images, Fonts, JSON [JSON is supported by Default])
* [Three Shaking](https://webpack.js.org/guides/tree-shaking/)
* [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)

### Webpack Plugins

* [HMR](https://webpack.js.org/plugins/hot-module-replacement-plugin/)
* [Extract Text](https://webpack.js.org/plugins/extract-text-webpack-plugin/)
* [HTML Webpack](https://webpack.js.org/plugins/html-webpack-plugin/)
* [Clean Webpack](https://webpack.js.org/guides/output-management/)
* [PurifyCSS](https://github.com/webpack-contrib/purifycss-webpack)

### Webpack Loaders

* [SASS/SCSS](https://github.com/webpack-contrib/sass-loader)
* [PostCSS](https://github.com/postcss/postcss-loader)
* [File](https://webpack.js.org/loaders/file-loader/)
* [URL](https://github.com/webpack-contrib/url-loader)
* [CSS](https://webpack.js.org/loaders/css-loader/)
* [HTML](https://webpack.js.org/loaders/html-loader/)
* [Style](https://webpack.js.org/loaders/style-loader/)
* [SVG Sprite](https://github.com/kisenka/svg-sprite-loader)
* [Img](https://github.com/thetalecrafter/img-loader)
* [JSLint](https://webpack.js.org/loaders/jshint-loader/)

## Rules

PRs are welcome depending on what we are adding! Here are a few helpful points:

* Please don't use ES6/ES2015 at this time unless necessary. There are a few bits on this project that uses ES6/ES2015 (since Webpack 2 and up supports it), but for the most part, keep it newbie friendly.
* Use 4 space tab :P -- no, lets not add a file to handle that.
* Keep it as light as possible! Only the essentials!
* Document your code! Get really hand-holdy with it.
* Make sure you are using the best and latest way to do whatever it is you are adding!
* Please test your code!
* Assume that your audience is learning JavaScript and Webpack.
* Be nice! :)

## TO DO

### Repo

* Add all to-do items to Github.
* Start docs explaining code.
* Start docs explaining how to run code.
* Create a folder structure example.
* Logo maybe?
* Add testing Launchpad project.
* Test this in an actual project once all the points are done!

### Add to Launchpad

* [WebWorkers/Offline Plugin/Webpack](https://github.com/NekR/offline-plugin).
* Test Long Term Caching (Different chunks from files included/not included).
* Check for typos in the config and all other files.
* Fix Click Me module Example.
* Make sure we are not shipping anything to customers that we do not want.
* Check for Deprecated notices issue not from [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/529) (may be dependency of a dependency).

### LG Project

* [Javascript HTML Template example as an alternative](https://github.com/jantimon/html-webpack-plugin/tree/master/examples/javascript-advanced)
* Add testing Launchpad features.
* Add testing LG project.
* Add [CommonChunk Plugin](https://www.youtube.com/watch?v=KAALn4Ys8Mg&index=8&list=PLpPnRKq7eNW2_dy8Re4lyByThMtTAhw5Q) as option to [Webpack](https://webpack.js.org/plugins/commons-chunk-plugin/).

### Wish List

* [Tree Shaking CSS](https://github.com/webpack-contrib/css-loader/issues/506)

## Known Issues

### libpng issues

Installing img-loader on some versions of OSX may raise errors with a [missing libpng dependency](https://github.com/tcoopman/image-webpack-loader/issues/51#issuecomment-273597313):

		Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib

This can be remedied by installing the newest version of libpng with [homebrew](http://brew.sh/):

		brew install libpng

### PurifyCSS

PurifyCSS purifies all CSS that is not being used in HTML files. This, essentially, does not include JavaScript files that may include CSS Modules, JSX, etc. The PurifyCSS team has a [work around](https://github.com/webpack-contrib/purifycss-webpack/issues/97) but the [issue](https://github.com/webpack-contrib/purifycss-webpack/issues/104) is [still](https://github.com/webpack-contrib/purifycss-webpack/issues/116) present.

As this project assumes you will be using most of your CSS in classes and IDs you set in JavaScript, I will comment out PurifyCSS for the time being.

### JSHint

Current ReadMe for [JSHint](https://github.com/webpack-contrib/jshint-loader#usage) shows outdated configuration.


## Sources

Webpack Launchpad takes the best parts from these fine folks and their tutorials:

* [Webpack Guide](https://webpack.js.org/guides/)
* [NPM Guide](https://www.sitepoint.com/beginners-guide-node-package-manager/)
* [Webpack Seminar](https://www.youtube.com/watch?v=eWmkBNBTbMM)
* [Webpack For Beginners](https://www.youtube.com/playlist?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os)
* [Traversy Media Webpack Crash Course](https://www.youtube.com/watch?v=lziuNMk_8eQ)
* [LearnCode Academy Quick Webpack Tutorial](https://www.youtube.com/watch?v=9kJVYpOqcVU)

And follows the conventions of these fine... uh... sites/entities/folks?

* [The SASS Way](http://thesassway.com/beginner/how-to-structure-a-sass-project)
* [SVG Sprites](https://www.webdesignerdepot.com/2017/05/how-to-create-and-manage-svg-sprites/)
* [Best of Webpack Plugins and Loaders: Awesome Webpack](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)
