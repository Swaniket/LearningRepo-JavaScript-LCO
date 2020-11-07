// Closure also known as curring
function init() {
    var firstName = 'Swaniket'
    console.log("Inside the init");
    function sayFirstName() {
        console.log(firstName);
    }
    // I'm returning the reference to the method, but i'm not executing it right away.
    return sayFirstName
}

// When the init runs, it just doesn't run & go away, it gives me a reference to the function 'sayFirstName'
// var value = init()

// Technically the value holds the refarence to the sayFirstName. This is known as Closure
// value()


// Another example
function doAddition(x) {
    return function(y){
        return x+y
    }
}

// Add is holding a referance to the 
var add = doAddition(4)
console.log(add(5))

// I don't always need to hold a referance of it
console.log(doAddition(5)(5));