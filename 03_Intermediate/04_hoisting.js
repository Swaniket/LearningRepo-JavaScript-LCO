/* 
Context - Global Context, Execution Context

Global Context - 
1. Collecting information about everything in the code. 
2. Majority of the cases it's the window object.

Execution Context - 
1. Happens with every executable line of code.
2. Features included: Variable Object, Scope Chain, this keyword
3. Rules: 
    Function Declarations are scanned & made available.
    Variable Declarations are scanned & made undefined.
*/ 
tipper("50")

// The function call can be before the defination of the function
function tipper(amount) {
    var bill = parseInt(amount)
    console.log(bill + 5);
}



// In this case, the before call won't work, because here the function is defined as a variable
var bigTipper = function(amount) {
    var bill = parseInt(amount)
    console.log(bill + 5);
}

bigTipper("100")


// Variables
console.log(name);
var name = 'Swaniket'

function sayName(){
    var name = 'MR. C'
    console.log(name);
}
sayName()

console.log(name);
