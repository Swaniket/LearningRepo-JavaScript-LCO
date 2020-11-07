// Ways to define strings 

// var name = 'Swaniket\'s'
// var name2 = "Swaniket\'s"
// var name3 = `Swaniket's`

// console.log(name);
// console.log(name2);
// console.log(name3);

var name = `Swaniket`
var fullName = `${name} Chowdhury`

console.log(fullName);

//Useful methods
console.log(fullName.charAt(2));
console.log(fullName.endsWith('?'));
console.log(fullName.includes('Swa')); //It's case sensetive

// String conversions
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.toString());
// Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
console.log(fullName.toLocaleLowerCase());
//Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
console.log(fullName.toLocaleUpperCase());


