// Allow the user to access the code if he is
// loggedin from email
// logged in from google
// logged in from facebook

var viaEmail, viaGoogle, viaFacebook

viaEmail = true
viaGoogle = false
viaFacebook = false

// if (viaEmail === true || viaGoogle === true || viaFacebook === true) {
//     console.log('You can login');
// }
if (viaEmail|| viaGoogle || viaFacebook) {
    console.log('You can login');
}