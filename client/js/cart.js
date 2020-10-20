function displayCart() {
    fetch('http://localhost:5000/api/cart')
        .then((res) => res.json())
        .then((data) => {
            let cart = data[0].cartItems
            let output = ''
            cart.forEach(function (item) {
                console.log(item)
                output += `
                <tr>
                <td width="60"><img src="${item.productPicture}" height="80" /></td>
                <td class="align-middle">${item.name}</td>
                <td class="align-middle">${item.price}</td>
                <td class="align-middle">${item.quantity}</td>
                </tr>
                `
            })
            document.getElementById('output').innerHTML = output
        })

}

displayCart()