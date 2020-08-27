function getPosts() {
    fetch('http://localhost:5000/api/items')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Items</h2>';
            data.forEach(function (post) {
                output += `
                <div class="card card-body mb-3 bg-light">
                <img class="img-fluid" src="${post.productImage}">
                <h3>Item Name: ${post.name}</h3>
                <h3>Item Price: ${post.price}</h3>
                <h3>Item Quantity: ${post.quantity}</h3>
                <input type="submit" class="btn btn-primary" value="Add to Cart">
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
getPosts()
