var User = {
    name: "", 
    getUserName: function () {
        console.log(`User name is ${this.name}`);
    }
}

// Documentation way to create objects
var swan = Object.create(User)
console.log(swan);
swan.name = 'Swaniket Chowdhury'
swan.getUserName()

/* 
This works fine when we dont pass the properties in the time of creation of the object
But if we want to pass properties at the time of creation, the syntax is a bit weired! 
*/

var sam = Object.create(User, {
    name: {value : 'Sam'},
    courseCount: {value: 3},
})

sam.getUserName()