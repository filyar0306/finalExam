let tables = document.getElementById("tables")
let myForm = document.getElementById("myForm")
let titleInp = document.getElementById("titleInp")
let priceInp = document.getElementById("priceInp")
let nameInp = document.getElementById("nameInp")



myForm.addEventListener("submit", function (event) {

    event.preventDefault()

    axios.post("https://655c8cc025b76d9884fd82fe.mockapi.io/products", {
        name: nameInp.value,
        title: titleInp.value,
        price: priceInp.value,
    })
        .then((res) => {
            getFromForm
            console.log(res.data);
            myForm.reset()
        })
})


function getFromForm() {
    tables.innerHTML = ""
    axios.get("https://655c8cc025b76d9884fd82fe.mockapi.io/products")
        .then((res) => {
            db = res.data;
            res.data.map((item) => {
                let myDiv = document.createElement("tr")
                myDiv.className = "myDiv"
                myDiv.innerHTML = `
<td><h1>${item.title}</h1></td>
<td><img src="${item.image}" alt=""></td>
<td><p>${item.name}</p></td>
<td><p>${item.price}</p></td>
<td> <button onclick="removeFromForm(${item.id})">delete</button></td>


`
                tables.appendChild(myDiv)
            })
        })
}

formBtn.addEventListener("click", getFromForm)



function removeFromForm(id) {
    axios.delete(`https://655c8cc025b76d9884fd82fe.mockapi.io/products/${id}`)
        .then((res) => {
            getFromForm()
            console.log(res.data);
        })
}


let sortAZ = document.getElementById("sortAZ")
let sortZA = document.getElementById("sortZA")
let sortDef = document.getElementById("sortDef")



function sortDataAZ() {
    tables.innerHTML = ""
    axios.get("https://655c8cc025b76d9884fd82fe.mockapi.io/products")
        .then((res) => {
            db = res.data;
            let sortedData = db.sort((a, b) => a.name.localeCompare(b.name))
            sortedData.map((item) => {
                let myDiv = document.createElement("tr")
                myDiv.className = "myDiv"
                myDiv.innerHTML = `
    
    <td><h1>${item.title}</h1></td>
    <td><p>${item.name}</p></td>
    <td><p>${item.price}</p></td>
    <td> <button onclick="removeFromForm(${item.id})">delete</button></td>
    
    
    `
                tables.appendChild(myDiv)
            })
        })
}
sortAZ.addEventListener("click", sortDataAZ)


function sortDataZA() {
    tables.innerHTML = ""
    axios.get("https://655c8cc025b76d9884fd82fe.mockapi.io/products")
        .then((res) => {
            db = res.data;
            let sortedData = db.sort((a, b) => b.name.localeCompare(a.name))
            sortedData.map((item) => {
                let myDiv = document.createElement("tr")
                myDiv.className = "myDiv"
                myDiv.innerHTML = `
          
    <td><h1>${item.title}</h1></td>
    <td><p>${item.name}</p></td>
    <td><p>${item.price}</p></td>
    <td> <button onclick="removeFromForm(${item.id})">delete</button></td>
    
    
    `
                tables.appendChild(myDiv)
            })
        })
}

sortZA.addEventListener("click", sortDataZA)
sortDef.addEventListener("click", getFromForm)



let searchInput = document.getElementById("searchInput")
let searchButton = document.getElementById("searchButton")



function filterProducts() {
    tables.innerHTML = ""
    axios.get("https://655c8cc025b76d9884fd82fe.mockapi.io/products")
        .then((res) => {
            db = res.data;
                let filteredData = res.data.filter((item) => item.name.toLowerCase().startsWith(searchInput.value.toLowerCase()))
                filteredData.map((item) => {
                    let myDiv = document.createElement("tr")
                    myDiv.className = "myDiv"
                    myDiv.innerHTML = `
    
    <td><h1>${item.title}</h1></td>
    <td><p>${item.name}</p></td>
    <td><p>${item.price}</p></td>
    <td> <button onclick="removeFromForm(${item.id})">delete</button></td>
    
    
    `
                    tables.appendChild(myDiv)
                })
            })
        }

searchButton.addEventListener("click", filterProducts)