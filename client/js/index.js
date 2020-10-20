function getPosts() {
    fetch('http://localhost:5000/api/items')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Items</h2>';
            data.forEach(function (item) {
                // console.log(item)
                output += `
                <div class="card card-body mb-3 bg-light">
                <img class="img-fluid" src="${item.productPicture}">
                <h3>Item Name: ${item.name}</h3>
                <h3>Item Price: ${item.price}</h3>
                <h3>Item Quantity: ${item.quantity}</h3>
                <button type="button" onclick="addToCart('${item._id}','${item.name}','${item.quantity}','${item.productPicture}', '${item.price}')">Add To Cart</button> 
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })


}


function addToCart(itemID, itemName, itemQuantity, itemPicture, itemPrice) {
    let id = itemID
    let name = itemName
    let quantity = itemQuantity
    let picture = itemPicture
    let price = itemPrice

    fetch("http://localhost:5000/api/cart", {

        // Adding method type 
        method: "POST",
        // Adding body or contents to send 
        // Adding headers to the request 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "cartItems": {
                "product": id,
                "name": name,
                "quantity": quantity,
                "productPicture": picture,
                "price": price
            }
        })
    })
        // Converting to JSON 
        .then(response => response.json())
        // Displaying results to console 
        .then(json => console.log(json));
}
getPosts()
