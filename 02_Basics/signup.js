const uid = 'abc123'

var fullName = 'Swaniket Chowdhury'
var email = 'swaniketchowdhury@gmail.com'
var password = '123456'
var confirmPassword = '123456'
var isLoggedInFromGoogle = false

// printing the information
// console.log(uid)
// console.log("FULL NAME IS: "+ fullName)
// console.log("EMAIL IS: ", email)

// using backticks also known as interpolation
console.log(`
    With unique ID: ${uid}
    User is: ${fullName}
    And his email is: ${email}
`)