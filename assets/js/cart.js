let customers = document.getElementById("customers")

function getProducts() {
    customers.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, index) => {
        let myDiv = document.createElement("div")
        myDiv.className = "myDiv"
        myDiv.innerHTML = `

<img src="${item.image}" alt="">
<h1>${item.title}</h1>
<p>${item.name}</p>
<p>${item.price}</p>
<p>${item.count}</p>
<div class="productsButton">
<button onclick="removeFromCart(${index})">delete</button>

</div>

`
        customers.appendChild(myDiv)
    })
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getProducts()
}
getProducts()