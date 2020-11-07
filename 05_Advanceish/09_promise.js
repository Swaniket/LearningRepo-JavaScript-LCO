const uno = () => `I'm One`

// const des = () => {
//     setTimeout(() => `I'm Two`, 3000)
// }

// Rewritten using promises
const des = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I'm Two`) 
        }, 3000)
    })
}


const tres = () => `I'm Three`;


// We have to make this method async becuase our promise call is in this method.
// As the whole method is async, there can be multiple await calls
const callMe = async () => {
    let valOne = uno()
    console.log(valOne);
    
    // Others won't get executed because of the await call
    let valTwo = await des()
    // This log is getting undefined because it wasn't returned at the point of logging
    console.log(valTwo);

    let valThree = tres()
    console.log(valThree);
}

callMe()

/*
- In web application, anything which is a resourse(ex. a database call, or API call), if you treat it as a normal variable, it will be a big trouble
- It's a good idea to return this kinda things in an asynchronous manner
*/

/*
Promises are events which mightbe full filling up in the future or it might be not, but it's going to give you the response back.
Just like we can create object, arrays we can create promises
Promises have 2 states: 
1. Either it's gonna be fullfilled
2. Or it's not
*/