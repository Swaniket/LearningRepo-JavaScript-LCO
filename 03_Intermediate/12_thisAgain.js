// this- For all regular function calls, this points to the window object or global object or in the case of node, global empty object.
console.log(this);

var user = {
    firstName: 'Swaniket', 
    courseCount: 4,
    getCourseCount: function () {
        console.log('Line 8', this);
        function sayHello() {
            console.log("Hello");
            console.log("LINE 11", this);
        }
        // This is a regular function call, so it will content the global object
        sayHello()
    },
}

// This is not a regular function call, because the fuction is not a regular function, It's called through an object
user.getCourseCount()