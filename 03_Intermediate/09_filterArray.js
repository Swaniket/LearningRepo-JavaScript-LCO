// Using .fill()
var testArray = [2,4,6,3,1,5,9,8]

// Signature of .fill(): 
// 1st Argument: What should be filled up
// 2nd Argument: Defining the start point (The start range in inclusive & the end range is exclusive)
//console.log(testArray.fill('h', 2, 5));


// Using .filter()
const myNumber = [22,23,24,55,66,77,87,98]

// It will return an array
// It expects a callback function as an argument
const result = myNumber.filter( (num) => num != 55)

//console.log(result);


// Using .slice()
var users = ['Ted', 'Swan', 'Ronu', 'Atma', 'Sundi', 'Urubas']

// Signature: 1st argument- Start, 2nd Argument- End
// console.log(users.slice(1, 4));

// Just proving the starting range
// console.log(users.slice(2));

// console.log(users.slice(0 , users.length - 1));

// Using .splice()
// Signature: 1st Argument- Start, 2nd Argument- Count of elements, 3rd Argument- The replaced value
// You can pass on as many values as you like
users.splice(1,3,'REPLACED', 'AGAIN')

console.log(users);
