// Classes are almost like blueprints where you define how it should look like
class User {
    // classes always comes with a constructor.
    // If you don't create one, the class will automatically create one which will be empty & does nothing.
    // A constructor is a method, which runs as soon as the object is created
    constructor(name, email){
        this.name = name
        this.email = email
    }
    // classes can have more property
    // courseList = []
    // to make a variable private we need to put a # and use # wherever it is referanced
    #courseList = []

    // we don't need to write function keyword to declare a method
    getInfo(){
        return {name: this.name, email: this.email}
    }
    // This is a setter as it sets some value to a variable
    enrollCourse(name){
        this.#courseList.push(name)
    }
    // This works as a getter as it gets some information from the class(Which may be private)
    getCourseList(){
        return this.#courseList
    }

    toExtend() {
        return 'Im from super class'
    }

    // The static keyword allows the function to be private- means no child class can access this method
    static login() {
        return "You are logged in"
    }
}

class subAdmin extends User{
    constructor(name, email) {
        // Super() method takes the parameters & passes them to the superclass in the constructor for further processing
        super(name, email)
    }
    getAdminInfo() {
        return `Inhering the method from super class ${super.toExtend()}`
    }

    // We are overwriting the login method in the User class
    login() {
        return 'You are loggedin as Sub-Admin'
    }
}

// Now, to acess this class in different files:
module.exports = User

const rock = new User("rock", "rock@rock.com")
// console.log(rock.getInfo());
rock.enrollCourse('Angular Bootcamp')
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new subAdmin('tom', 'tom@tom.com')
console.log(tom.getAdminInfo());
console.log(tom.login());
// If not constructor is defined in the child class, the getInfo() call will be successfull but there is no way to handle the name & email calls
console.log(tom.getInfo());
