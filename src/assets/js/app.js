require('./people.js'); //requires people JS entire file.
require('../css/style.scss'); //must be the source file not the rendered CSS.
console.log('If this shows, the app is working as intended, suckah.');

// ES2015^ Import samples from (found in source maps youtube sample)
// ES5 Sample imports


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