// Normal Array declaration
var countries = ['India', 'USA', 'Japan', 'Russia']

// Object oriented way to declare an array
var states = new Array('Rajasthan', 'Kolkata', 'Bangalore', 'Mumbai')

// Accessing the elements
//console.log(states[2]);

// Different methods & property

// Getting the lenght of the array
//console.log(states.length);

// Replacing a perticular element
states[0] = 'Assam'
//console.log(states);

// We can store different data types in an array

var user = ['Swaniket', 'swaniketchowdhury@gmail.com', 3, 34, true]

// get rid of the last element
user.pop()
//console.log(user)

// Add a value at the front of the array by using unshift
user.unshift('NEW VALUE')
//console.log(user)

// Get rid of the front element by using shift
user.shift()
console.log(user);

// Finding an element in the array
console.log(user.indexOf(3));
// When it doesn't find the element, it returns -1
console.log(user.indexOf('Blabka'));

//.form() method - convert anything into an array
console.log(Array.from("Swaniket"));