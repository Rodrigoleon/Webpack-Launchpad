// CommonJS Imports/Requires
require('./module-x.js'); //requires module-x JS entire file.
require('../css/style.scss'); //must be the source file not the rendered CSS.

// Importing a sample image (with ES2015).
import img from '../media/images/react-logo.png';

// Testing Defaults
console.log('If this shows, the app is working as intended.');
var app = document.getElementById('app');

// ES2015 Sample Import (Also checks that Babel Loader is working correctly.)
import testButton from './module-x';
var newMessage = () => (testButton.button);
app.innerHTML = newMessage();
testButton.attachEl();
// End of ES2015 Sample Import

// Adding the sample image (with ES5).
app.innerHTML += '<img src="' + img + '">';

// HMR
// In order for Hot Module Replacement (HMR) to happen in this file, you must include this line.
if (module.hot){
	module.hot.accept();
}
// End of HMR


/* 
You can also use:
var $ = require('jquery');
import something from 'path/to/module';
import myVarOrLet from 'path/to/module';
import myFunction() from 'path/to/module';
*/