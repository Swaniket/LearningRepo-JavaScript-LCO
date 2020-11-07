// Objects are way more optimized than arrays

var user = {
    firstname: 'Swaniket',
    lastname: 'Chowdhury',
    role: 'Admin', 
    loginCount: 32,
    facebookSignedIn: true
}

// The dot '.' feature is almost like accessing an object
//console.log(user.firstname);

// Another way of accessing the object properties
//console.log(user["lastname"]);

// Updating a value
user.loginCount = 44
//console.log(user.loginCount);


console.log(user);

console.table(user)