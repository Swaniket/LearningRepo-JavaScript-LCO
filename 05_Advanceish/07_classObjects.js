// Importing the module

// import User from "./06_classes.js"
const User = require("./06_classes.js")

// Create object for the class
const swaniket = new User("Swaniket", "swaniketchowdhury@gmail.com")

console.log(swaniket.getInfo());

swaniket.enrollCourse('React Bootcamp')
swaniket.enrollCourse('Angular Bootcamp')

// console.log(swaniket.getCourseList());

// Loop through the array
let courses = swaniket.getCourseList()
courses.forEach((c) => console.log(c))