// /*
// The ability to take as many values as argument as it can.
//  */
//  // Note that the .max() function can take as many arguments as it can 
// var returnedValue = Math.max(2,5,7,8,3,9,1)
// console.log(returnedValue);

// // It's also applicable for more methods.
// var myObj = {}
// // Here we can pass different objects as paramenes
// Object.assign(myObj, {a:1, b:2, c:3}, {x:7, y:8, z:9})
// // The result will be mix of all the objects passed
// console.log(myObj);

function sumOne(a,b) {
    return a+b
}

var myA = [4,5]
// Here as the function defination isn't expecting an array, it gives an unexpected output.
//console.log(sumOne(myA));
// but if we don't want to change the function, we can pass it as below: 
console.log(sumOne(...myA)); // This is known as spread operator
// Spread operator takes a group & tries to spread it to different values.

// Adds as many values passed on it.
/*
- When you are not sure how many values will come up we will use '...args'  
- 3 dot followed by a variable name. ex: '...Superman'
- Expect that an array is going to come up & we have to loop through it.
- "...args" is known as rest operator
- "...args" converts indivisual values into an array
- Spread operator was taking the values & trying to spread it to indivisual values.
*/
function sumTwo(...args){
    console.log(args);
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return sum
}

console.log(sumTwo(2,3, 5,6,3));

// Maybe we want the first 2 value to be product & rest of them wll be added up
function sumThree(a,b, ...args) {
    let multi = a*b
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return [sum, multi]
}

console.log(sumThree(2,3,4,5));