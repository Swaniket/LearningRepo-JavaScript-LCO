const swaniket = {
    firstName: "Swaniket",
    lastName: "Chowdhury",
    role: "Admin",
    courseCount: 3,
    getInfo: function() {
        console.log(`
        First name is: ${this.firstName}
        Last name is: ${this.lastName}
        Role: ${this.role}
        Enrolled Course: ${this.courseCount}
        `);
    }    
}

const dj = {
    firstName: 'Rock',
    lastName: 'DJ',
    role: 'Sub Admin',
    courseCount: 4,
}

swaniket.getInfo();
// Normally we can't use the .getInfo() method for dj, coz it's never defined. but we can borrow the method.
// The getInfo() is a generic method, that means it could work in any object as long as it has the 4 properties used in the function. 
// this is pointing to the 'swaniket' object, but somehow If I am able to point it to dj then it will work absolutely fine over there.

// Now bind always gives yoy a reference back. 
var djInfo = swaniket.getInfo.bind(dj)
djInfo()

// There is another method like call, which works almost similar to the bind    
swaniket.getInfo.call(dj)