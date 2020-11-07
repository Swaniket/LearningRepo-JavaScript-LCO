// Part 1 of this keyword
// for node, it will give an empty scope
// for browser, it will return a windows object 

console.log(this);

function sayName() {
    var name = 'Swaniket'
    console.log(this);
}

sayName();