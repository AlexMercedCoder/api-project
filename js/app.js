$.ajax("https://api.icndb.com/jokes/random")
.then((data) => {
    console.log(data)
    console.log(data.value.joke)
})