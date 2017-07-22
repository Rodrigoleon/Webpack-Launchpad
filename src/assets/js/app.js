// CommonJS Imports/Requires
require('./modules/module-x'); //requires module-x JS entire file.
require('../css/style.scss'); //must be the source file not the rendered CSS (aka SCSS).

// Setting defaults for testing purposes
console.log('If this shows, the app is working as intended.');
// Grabbing our app.
var app = document.getElementById('app');
// Sample Function creates new Elements.
function newNode(elm, att, attName, content, appendTo) {
	var fragment = document.createDocumentFragment();
	var newNode = document.createElement(elm);
	newNode.setAttribute(att, attName);
	newNode.innerHTML = content;
	fragment.appendChild(newNode);
	appendTo.appendChild(fragment);
}

// Sample paragraph to target with CSS Font.
app.innerHTML = '<p>This is Webpack Launchpad!</p>';

// Importing jQuery as an Externals sample
import $ from 'jquery';
$('#app').css('border-top', '1px solid #00daff');

// ES2015 Sample Import (Also checks that Babel Loader is working correctly.)
import testButton from './modules/module-x';
var newMessage = () => (testButton.button);
newNode("div", 'class', 'button', newMessage(), app );
testButton.attachEl();
// End of ES2015 Sample Import

// Importing a sample image (with ES2015).
import img from '../media/images/react-logo.png';
// Adding the sample image (with ES5) to the dom.
var reactLogo = '<img src="' + img + '" alt="Reactive" width="460">';
newNode("figure", 'class', 'logo', reactLogo, app );

// SVG Sprites
import codeIcon from '../media/vectors/code.svg';
console.log(codeIcon);
window.addEventListener('DOMContentLoaded', () => {
	// Renders <img> tag. This works on Local dev.
	const image = `<img width="${codeIcon.width}" height="${codeIcon.height}" src="${codeIcon.url}">`;
	// Renders SVG inline code (shadow dom).
	// Please note that the example below does not work/spits out errors when developing locally: (https://stackoverflow.com/questions/29493965/unsafe-attempt-to-load-url-svg).
	const usage = `<svg viewBox="${codeIcon.viewBox}"><use xlink:href="${codeIcon.url}"></use></svg>`;
	var svgOutput = `${image} ${usage}`;
	newNode("div", 'class', 'svg', svgOutput, app );
});
// End of SVG Sprites.

// HMR
// In order for Hot Module Replacement (HMR) to happen in this file, you must include this line.
if (module.hot){
	module.hot.accept();
}
// End of HMR


/* 
You can also require other parts of your code this way:
var $ = require('jquery');
import something from 'path/to/module';
import myVarOrLet from 'path/to/module';
import myFunction() from 'path/to/module';
*/