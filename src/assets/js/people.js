var people = [ // let = var in ES6 (Note that if using Let webpack production may not work.)
	{name: 'John Doe'},
	{name: 'Steave Smith'},
	{name: 'Carol Johnson'}
];
//console.log(people); People is not included in our Bundle JS (production) unless this console.log is active. Three Shaking somewhat.

// ES2015 Sample Export (Also checks that Babel Loader is working correctly.)
const testButton = {
	button: '<button id="testButton">Press Me</button>',
	attachEl: () => {
		document.getElementById('testButton').addEventListener('click',
			() => {
				console.log('Clicked')
			}
		)
	}
};
export default testButton;
// End of ES2015 Sample Export

/*

module.export can be assigned to anything: 
module.exports = 'Hello World!!!';
module.exports = people;
module.exports = myFunction();
module.exports = myObject;

You do not need module.export if you are importing the entire file (it seems like).
*/