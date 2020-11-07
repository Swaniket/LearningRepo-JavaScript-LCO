// Defining a prototype object
// Prototype are kind of template/blueprint for an object, for instance, when a new user is created it should have these properties.
var User = function (firstName, courseCount) {
    this.firstName = firstName
    this.courseCount = courseCount
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    }
}

// Creating new users
// The new keyword is used when we want to create an object in the functional way
/* The NEW keyword is responsible for:
1. Using the functional prototype
2. It invokes the constructor & creates an unique instance every single time
3. When we didn't used the new keyword, the "User('Swaniket', 2)" function call was a regular function call, which makes 'this' to point on the global/ window/empty object.
   but for using new keyword, the function call wasn't a regular function call, so the 'this' keyword pointed to the User object. 
*/

// To add new properties on the onject we can use prototypes.
// Note: I'm not actually touching the defination. I'm injecting some of the things form outside
User.prototype.getFirstName = function () {
    console.log(`Your firstname is ${this.firstName}`);
}


var swaniket = new User('Swaniket', 2)
//console.log(swaniket);
swaniket.getCourseCount()
if (swaniket.hasOwnProperty("firstName")){
    swaniket.getFirstName()
}


// To create a second instance of user
var sam = new User('Sam', 1)
// console.log(sam);
sam.getCourseCount()
if (sam.hasOwnProperty("firstName")){
    sam.getFirstName()
}



