/*
Define a function that can answer the role of a user
An user can be on the following roles:
admin - will all access
subadmin - with access to create & delete courses
testprep - with access to create & delete tests
user - consume all the content
other - trail user

Input - getUserRole(name, role)
*/

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is an admin`
        case "subadmin":
            return `${name} is a subadmin`
        case "testprep":
            return `${name} is a testprep`
        case "user":
            return `${name} is an user`
        case "other":
            return `${name} is an trail user`
        default:
            break;
    }
}

console.log(getUserRole("swaniket", "other"));

// create a function & storing it into a varibale

var getUserRole2 = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is an admin`
        case "subadmin":
            return `${name} is a subadmin`
        case "testprep":
            return `${name} is a testprep`
        case "user":
            return `${name} is an user`
        case "other":
            return `${name} is an trail user`
        default:
            break;
    }
}

console.log(getUserRole2("rahul", "admin"));