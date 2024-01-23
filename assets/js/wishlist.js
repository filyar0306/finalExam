let wishLists = document.getElementById("wishLists")



function getProducts () {
    wishLists. innerHTML = ""
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.map((item, index)=>{
        let myDiv = document.createElement("div")
        myDiv.className = "myDiv"
        myDiv.innerHTML = `

<img src="${item.image}" alt="">
<h1>${item.title}</h1>
<p>${item.name}</p>
<p>${item.price}</p>
<div class="productsButton">
<button onclick="removeFromWishlist(${index})">delete</button>

</div>

`
wishLists.appendChild(myDiv)
    })
}

function removeFromWishlist(index) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.splice(index,1) 
    localStorage.setItem("wish", JSON.stringify(wish))
    getProducts() 
}
getProducts()