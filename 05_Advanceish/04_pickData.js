/*
1. Destructing is not only for objects. 
2. To destructure, the RHS data type should be = to the LHS data structure (Probably).
*/

// 1. Destructuring on array
const user = ['Swaniket', 3, 'Admin']

// var role = user[2]
// var name = user[0]

// Instead of doing this we can also
// var [name, courseCount, role] = user


// console.log(name);
// console.log(courseCount);
// console.log(role);

// 1. Destructuring on Object
const myUser = {
    name: 'Swaniket',
    courseCount: 5,
    role: 'Admin'
}

// For object destructing specifically, the names should match as they are designed in the object, otherwise it will give an "undefined" as output
const {name, courseCount, role} = myUser

console.log(name);
console.log(courseCount);
console.log(role);