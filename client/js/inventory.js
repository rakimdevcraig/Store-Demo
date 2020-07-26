document.getElementById('addItem').addEventListener('submit', addItem);


function addItem(e) {
    e.preventDefault();

    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value

    fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: name, price: price, quantity: quantity })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}
