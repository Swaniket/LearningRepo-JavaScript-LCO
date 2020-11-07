var listedPrice = 799;
var sellingPrice = 199;

var offPercentage = (listedPrice - sellingPrice)/listedPrice * 100
console.log(`${offPercentage}% Off`)

// to round off the percentage
// Importing round method from the Math library
var offPercentageRound = Math.round(offPercentage)
console.log(offPercentageRound)

// Getting the data type
var result = listedPrice > sellingPrice

console.log(result);