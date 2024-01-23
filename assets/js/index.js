let products = document.getElementById("products")

let page = 1
let limit = 3

const renderProducts = async () => {
   
    try {
        const response = await axios.get(`https://655c8cc025b76d9884fd82fe.mockapi.io/products?limit=${limit}&page=${page}`)
        const data = response.data;
        db = data;
        db.map((item) => {
            if (item.count == undefined) {
                item.count = 1
            }
            let myDiv = document.createElement("div")
            myDiv.className = "myDiv"
            myDiv.innerHTML = `

<img src="${item.image}" alt="">
<h1>${item.title}</h1>
<p>${item.name}</p>
<p>${item.price}</p>
<div class="productsButton">
 <button  onclick="addToCart(${item.id})">+cart</button>
 <button class="proButton" onclick="addToWishList(${item.id})">+wish</button>
</div>

`
            products.appendChild(myDiv)
        })
    } catch (error) {
        console.log(error);
    }
}


function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let productItem = cart.find(item => item.id== index)
    if (productItem) {
        productItem.count = (productItem.count || 1) + 1

    } else {
        cart.push(db.find(item => item.id== index))
    }
    localStorage.setItem("cart", JSON.stringify(cart))
   
}


function addToWishList(index) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    let productItems = wish.find((item) => item.id== index)
    if (productItems) {
        alert("favorilere elave edilib.")

    } else {
        wish.push(db.find((item) => item.id== index))
        localStorage.setItem("wish", JSON.stringify(wish))
    }

}



    renderProducts()
