// User is allowed to make an purchase when he is:
// logged in 
// email is verified
// cardInfo - valid
// if any one is missing stop purchase.

var isLoggedIn = true
var isEmailVerified = true
var cardInfo = true

if (isLoggedIn === true && isEmailVerified === true && cardInfo === true){
    console.log('You can purchase!')
}

// if (isLoggedIn === true and isEmailVerified === true and cardInfo === true){
//     console.log('You can purchase!')
// }