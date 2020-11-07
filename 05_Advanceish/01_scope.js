// Let's see a simple example where I try to print my name before it was declared. 
// console.log(name);
// It will give me an undefined because it used var keyword. 

var name = 'Swaniket'

// Things are different with let keyword, It will straigth up throw an error.
// let name = "Swaniket"

if (true) {
    // When we are using var, it will be accessable outside of the scope
    // var lastName = 'Chowdhury'

    // let doesn't allows a variable to be accessed once the scope is over
    let lastName = 'Chowdhury'
    // console.log(lastName);
    
}
console.log(lastName);

/*
So the main difference between var & let is: 
1. You can't access the variable declared with 'let' keyword, outside of the scope. It will throw an error if you do so.
2. 'let' is Used for backend
3. In 'var' keyword, you can access it outside of a scope, for example outside of an if-else statement or for loop.
4. That's why in for loop they uses 'let' keyword not 'var' keyword.
5. 'var' is Used for frontend.
*/

