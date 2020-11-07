// Show the user signout button if hes authenticated
// otherwise show him login/signup

var isAuthenticated = false

// if (isAuthenticated) {
//     console.log('Signout');
// }
// else {
//     console.log('login/signup');
// }

// We can write the same logic using TERNARY Operator
// Syntax: condition ? exprIfTrue : exprIfFalse

isAuthenticated ? console.log('Signout') : console.log('login/signup')