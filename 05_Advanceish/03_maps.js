// Maps works almost like objects, but they are not objects, they are completely different

// Creating an new instance for the map object
var myMap = new Map()

// Set values to the maps
myMap.set(1,'Uno')
myMap.set(2,'Dos')
myMap.set(3,'Tres')
myMap.set(4,'Cuatro')

console.log(myMap);

// Grab values from the maps

// Grab all the values: Classic way is using a 'for-of' loop
// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`Value is ${value}`);
// }

// The for of loop, we first get the key then the value
for (let [key, value] of myMap) {
    console.log(`Key is ${key} and Value is ${value}`);
}

//But for the for-each loop, we first get the value then the key
myMap.forEach( (value) => console.log(value))

myMap.forEach((v,k) => console.log(`The value is ${v} and the key is ${k}`))

// Delete by key
myMap.delete(2)
console.log(myMap);