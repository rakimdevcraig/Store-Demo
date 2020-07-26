let apiURL = 'http://localhost:5000/api/items';
// fetch the url
fetch(apiURL)
    .then(result => {
        return result.json()
    })
    .then(data => {
        console.log(data)
    })


//map through data
data.map((post, index) => {
    let parentDiv = document.createElement("div")
    let name = document.createElement("li")
    let price = document.createElement("li")
    let quantity = document.createElement("li")
})