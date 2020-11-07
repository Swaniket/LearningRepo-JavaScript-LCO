function isEven(element) {
    // if (element % 2 === 0) {
    //     return true
    // }
    // return false

    // Short way
    return element % 2 === 0;
}


// Another way to write the function
var isEven2 = function(element){
    return element % 2 === 0;
}


// Using arrow function
var isEven3 = (element) => {
    // If we remove the return keyword then it will give an undefined
    return element % 2 === 0;
}

console.log(isEven(5));
console.log(isEven2(2));
console.log(isEven3(100));



arr = [2, 4, 6, 8]
// we are passing the reference of the function
var result = arr.every(isEven) // Checking for every single element, and if all are passing then it gives back a single result of true, otherwise its false
console.log(result);


// Writing the callback with arrow function
// Callback arrow functions don't have any name. 
// Structure: () => {} with return
arr = [2, 3, 6, 8]
var result = arr.every((element) => {
    return element % 2 === 0;
})
console.log(result);


// or () => without return
arr = [2, 3, 6, 8]
var result = arr.every((element) => (element % 2 === 0))
console.log(result);


