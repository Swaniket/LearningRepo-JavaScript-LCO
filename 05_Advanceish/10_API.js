// fetch will give you a promise response, then is for handling sucess, catch is for handling reject
fetch('https://api.chucknorris.io/jokes/random')
.then((response) => response.json())
.then((data) => {
    // console.log("Data is:", data);
    var joke = data.value
    console.log("Joke:", joke);
})
.catch()