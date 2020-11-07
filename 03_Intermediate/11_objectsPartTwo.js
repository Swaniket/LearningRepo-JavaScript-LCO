var user = {
    firstname: 'Swaniket',
    lastname: 'Chowdhury',
    role: 'Admin', 
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    // Defining a method inside of an object
    buyCourse: function (courseName) {
        // If you want to refer to a variable which is inside of the same object that you want to refer
        this.courseList.push(courseName)
    },
    courseCount: function () {
        return `${this.firstname} is enrolled in total of ${this.courseList.length} courses.`
    },
    info: function () {
        return `Firstname ${this.firstname} \n Lastname ${this.lastname} \n Role ${this.role} \n Login Count ${this.loginCount} \n Facebook Login ${this.facebookSignedIn} \n Courses Enrolled ${this.courseList}`
    }
}


console.log(user.courseCount());
user.buyCourse('Django & React Full Stack Dev')
console.log(user.courseCount());
console.log(user.courseList);

console.log(user.info());

