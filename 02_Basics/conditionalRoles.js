// Create an application with the following roles
// admin - gets full access
// subadmin - get access to create/delete course
// testprep - gets access to create/delete tests
// user - gets access to the course content

var user = 'user'

switch (user) {
    case 'admin':
        console.log('gets full access');
        break;
    case 'subadmin':
        console.log('get access to create/delete course');
        break;
    case 'testprep':
        console.log('gets access to create/delete tests');
        break;
    case 'user':
        console.log('gets access to the course content');
        break;
    default:
        console.log('Trail user');
        break;
}