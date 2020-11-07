// var name = "Swaniket"

// console.log("Line number 3", name)

// function sayName(){
//     console.log("Line number 6", name) // 'name' is not defined in the function, so it takes name from the global context. When we define its own variable it will use that
// }

// sayName()

var name = "Swaniket"

console.log("Line number 13", name)

function sayName(){
    var name = 'Mr. Chowdhury'
    console.log("Line number 17", name) 
    // 'name' is not defined in the function, so it takes name from the global context. When we define its own variable it will use that
    sayNameTwo()

    function sayNameTwo(){
        console.log('Line number 20', name)
    }
}

sayName()