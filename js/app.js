const addSquare = (joke) => {
    const square = document.createElement("div")
    square.classList.add("square")
    square.innerHTML = `<h5>${joke}</h5>`
    const container = document.querySelector(".joke-container")
    container.append(square)
}

const getJokeMakeSquare = () => {
    $.ajax("https://api.icndb.com/jokes/random")
    .then((data) => {
    console.log(data)
    console.log(data.value.joke)
    addSquare(data.value.joke)
})
}

getJokeMakeSquare()

const button = document.querySelector("button")
button.addEventListener("click", getJokeMakeSquare)


