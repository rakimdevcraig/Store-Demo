// let apiURL = 'http://localhost:5000/api/items';
// // fetch the url
// fetch(apiURL)
//     .then(function (res) {
//         //  turn data from api into Json
//         return res.json();
//     })
//     .then(function (data) {
//         //   pass the data that's now json into data
//         console.log(data)
//         return data
//     })
//     .then(function (data) {
//         //   goes through each instance of the data
//         data.map((post, index) => {
//             var parentDiv = document.createElement("div");
//             //     creates the parent div
//             parentDiv.id = "parentDiv"

//             var name = document.createElement("li");
//             var price = document.createElement("li");
//             var quantity = document.createElement("li");

//             name.appendChild(document.createTextNode("Name: " + post.name));
//             price.appendChild(document.createTextNode("Info: " + post.price));
//             quantity.appendChild(document.createTextNode("Date: " + post.quantity));

//             parentDiv.appendChild(name)
//             parentDiv.appendChild(price)
//             parentDiv.appendChild(quantity)
//             document.getElementById("itemArea").appendChild(parentDiv);
//             // document.getElementById("users").appendChild(parentDiv);
//         })
//     })
//     .catch(function (err) {
//         console.log(err)
//     })


// fetch('http://localhost:5000/api/items')
//     .then((res) => res.json())
//     .then((data) => {
//         let output = '<h2 class="mb-4">Posts</h2>';
//         data.forEach(function (post) {
//             output += `
//           <div class="card card-body mb-3">
//             <h3>${post.name}</h3>
//             h3>${post.price}</h3>
//             h3>${post.quantity}</h3>
//           </div>
//         `;
//         });
//         document.getElementById('output').innerHTML = output;
//     })




function getPosts() {
    fetch('http://localhost:5000/api/items')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Items</h2>';
            data.forEach(function (post) {
                output += `
                <div class="card card-body mb-3 bg-light">
                <h3>Item Name: ${post.name}</h3>
                <h3>Item Price: ${post.price}</h3>
                <h3>Item Quantity: ${post.quantity}</h3>
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
getPosts()
