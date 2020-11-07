// Holding a function in a variable
function sayHello() {
    console.log('I say hello');
    console.log('I again say hello');
}

// sayHello()

// Syntax for a function which call itself immidiately after declareation
// Self-Executing Anonymous function
// Also known as IIFE(Immediately Invoked Function Expression)

(function () {
    console.log('I say hello');
    console.log('I again say hello');
}) ()