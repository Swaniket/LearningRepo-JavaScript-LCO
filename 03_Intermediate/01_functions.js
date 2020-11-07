function sayHello() {
    console.log("Hello there!");
}

// Calling a function
sayHello();

// Refering to a function
// sayHello;

// Passing parameter to a function
function sayHello2(name) {
    console.log(`Hello there ${name}, how are you?`);
}

sayHello2('Swaniket')


// Using return with function
function namaste(name) {
    return `Namaste ${name} from india`
}

console.log(namaste('Rahul'));