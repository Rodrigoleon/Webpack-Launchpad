var people = [ // let = var in ES6 (Note that if using Let webpack production may not work.)
	{name: 'John Doe'},
	{name: 'Steave Smith'},
	{name: 'Carol Johnson'}
];

console.log(people);

/*

module.export can be assigned to anything: 
module.exports = 'Hello World!!!';
module.exports = people;
module.exports = myFunction();
module.exports = myObject;

You do not need module.export if you are importing the entire file (it seems like).
*/