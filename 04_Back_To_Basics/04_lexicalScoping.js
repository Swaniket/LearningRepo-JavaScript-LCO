// lexical scoping
function init() {
    var firstName = 'Swaniket'
    function sayHello() {
        console.log(firstname);
    }
    sayHello()
}

init()
// If I want to acess first name here it's not available here
console.log(firstName);